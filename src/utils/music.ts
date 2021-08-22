import ajax from 'Apis/apiBase';

const MAX_CACHE_LEN = 30;  // 最大缓存歌曲数量

class Music {
    public cache: Map<string, AudioBuffer>; // 缓存
    private cacheIds: string[];  // 已缓存歌曲的 id 数组
    private onEnded: (() => void) | null;  // 播放结束的回调

    private audioContext: AudioContext;
    private gainNode: GainNode;
    private currentSource: AudioBufferSourceNode | null;

    constructor() {
        this.cache = new Map();
        this.cacheIds = [];
        this.audioContext = new AudioContext();
        this.gainNode = this.audioContext.createGain();
        this.gainNode.connect(this.audioContext.destination);
        this.currentSource = null;
        this.onEnded = null;
    }

    /* ============= 私有方法 ============= */
    // Returns Uint8Array of WAV bytes
    private getWavBytes(buffer: any, options: Record<string, any>) {
        const type = options.isFloat ? Float32Array : Uint16Array;
        const numFrames = buffer.byteLength / type.BYTES_PER_ELEMENT;

        const headerBytes = this.getWavHeader(Object.assign({}, options, { numFrames }));
        const wavBytes = new Uint8Array(headerBytes.length + buffer.byteLength);

        // prepend header, then add pcmBytes
        wavBytes.set(headerBytes, 0);
        wavBytes.set(new Uint8Array(buffer), headerBytes.length);

        return wavBytes;
    }

    // adapted from https://gist.github.com/also/900023
    // returns Uint8Array of WAV header bytes
    private getWavHeader(options: any) {
        const numFrames = options.numFrames;
        const numChannels = options.numChannels || 2;
        const sampleRate = options.sampleRate || 44100;
        const bytesPerSample = options.isFloat ? 4 : 2;
        const format = options.isFloat ? 3 : 1;

        const blockAlign = numChannels * bytesPerSample;
        const byteRate = sampleRate * blockAlign;
        const dataSize = numFrames * blockAlign;

        const buffer = new ArrayBuffer(44);
        const dv = new DataView(buffer);

        let p = 0;

        function writeString(s: string) {
            for (let i = 0; i < s.length; i++) {
                dv.setUint8(p + i, s.charCodeAt(i));
            }
            p += s.length;
        }

        function writeUint32(d: number) {
            dv.setUint32(p, d, true);
            p += 4;
        }

        function writeUint16(d: number) {
            dv.setUint16(p, d, true);
            p += 2;
        }

        writeString('RIFF');              // ChunkID
        writeUint32(dataSize + 36);       // ChunkSize
        writeString('WAVE');              // Format
        writeString('fmt ');              // Subchunk1ID
        writeUint32(16);                  // Subchunk1Size
        writeUint16(format);              // AudioFormat
        writeUint16(numChannels);         // NumChannels
        writeUint32(sampleRate);          // SampleRate
        writeUint32(byteRate);            // ByteRate
        writeUint16(blockAlign);          // BlockAlign
        writeUint16(bytesPerSample * 8);  // BitsPerSample
        writeString('data');              // Subchunk2ID
        writeUint32(dataSize);            // Subchunk2Size

        return new Uint8Array(buffer);
    }

    /**
     * 获取指定 id 歌曲的 buffer
     */
    private async getMusicBuffer(id: string): Promise<AudioBuffer | null> {
        const { cache, cacheIds, audioContext } = this;
        const cachedBuffer = cache.get(id);

        // 已缓存
        if (cachedBuffer) {
            return cachedBuffer;
        }

        // 获取歌曲的 Arraybuffer
        const res: ArrayBuffer | null = await ajax(`/getMusic?id=${id}`, {
            responseType: 'arraybuffer',
        }).catch(_ => null);

        if (res === null) {
            console.log('get music fail');
            return null;
        }

        // ArrayBuffer 转 AudioBuffer
        const audioBuffer = await audioContext.decodeAudioData(res);

        // 缓存数超过限制，删除最早放入的 buffer
        if (cache.size >= MAX_CACHE_LEN) {

            const firstId = cacheIds.shift();
            cache.delete(firstId);
        }

        // 放入缓存
        cache.set(id, audioBuffer);
        cacheIds.push(id);

        return audioBuffer;
    }

    /* ============= 暴露方法 =============  */
    /**
     * 播放指定 id 的歌曲
     * @param id 歌曲 id
     * @param offset 播放初始位置，默认为 0
     */
    async play(id: string | number, offset?: number): Promise<void> {
        const { currentSource, audioContext, gainNode, onEnded } = this;

        // 停止当前音频
        currentSource && currentSource.disconnect();

        // 创建 Source
        const source = audioContext.createBufferSource();
        source.connect(gainNode);
        this.currentSource = source;

        // 获取歌曲的 AudioBuffer
        const audioBuffer = await this.getMusicBuffer(String(id));
        source.buffer = audioBuffer;

        // 播放
        source.start(audioContext.currentTime, offset || 0);

        // 设置播放结束的回调
        onEnded && (source.onended = onEnded);
    }

    /**
     * 下载指定 id 的歌曲
     * @param id 歌曲 id
     */
    async download(id: string | number, fileName: string): Promise<boolean> {
        const audioBuffer = await this.getMusicBuffer(String(id));
        if (!audioBuffer) {
            return false;
        }

        // Float32Array samples
        const [left, right] = [audioBuffer.getChannelData(0), audioBuffer.getChannelData(1)];

        // interleaved
        const interleaved = new Float32Array(left.length + right.length);
        for (let src = 0, dst = 0; src < left.length; src++, dst += 2) {
            interleaved[dst] = left[src];
            interleaved[dst + 1] = right[src];
        }

        // get WAV file bytes and audio params of your audio source
        const wavBytes = this.getWavBytes(interleaved.buffer, {
            isFloat: true,       // floating point or 16-bit integer
            numChannels: 2,
            sampleRate: 48000,
        });
        const wav = new Blob([wavBytes], { type: 'audio/wav' });

        const a = document.createElement('a');
        a.href = URL.createObjectURL(wav);
        a.download = `${fileName}.wav`;
        a.click();

        return true;
    }

    /**
     * 设置播放结束时的回调函数
     * @param callback 回调函数
     */
    setOnEnded(callback: () => void) {
        this.onEnded = callback;
    }
}

// 单例模式
export default (() => {
    let instance: Music | null;
    return () => instance || (instance = new Music());
})();
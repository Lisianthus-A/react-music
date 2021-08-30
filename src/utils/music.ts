import ajax from 'Apis/apiBase';
import cache from './cache';
import { songDetail, getLyric } from 'Apis/song';
import { resolveLyric, resolveSongs } from 'Utils/resolve';

export interface MusicItem {
    buffer: AudioBuffer;
    info: {
        id: number;
        name: string;
        singers: Array<{ id: number, name: string; }>
        duration: number;
        cover: string;
        isFree: boolean;
        albumId: number;
        albumName: string;
        lyric: [string, string, number][];
    }
}

class Music {
    private onEnded: (() => void) | null;  // 播放结束的回调
    private startTime: number;  // 开始时间，用于计算当前播放时长
    private playingItem: MusicItem;  // 当前播放的歌曲

    private audioContext: AudioContext;
    private gainNode: GainNode;
    private currentSource: AudioBufferSourceNode | null;

    constructor() {
        this.audioContext = new AudioContext();
        this.gainNode = this.audioContext.createGain();
        this.gainNode.connect(this.audioContext.destination);
        this.currentSource = null;
        this.onEnded = null;
        this.startTime = 0;

    //    this.getMusic(776039).then(item => {
    //        this.playingItem = item;
    //    });
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
     * 获取指定 id 歌曲信息
     */
    private async getMusic(id: number): Promise<MusicItem | null> {
        const { audioContext } = this;
        const cacheItem = cache().get(id);

        // 已缓存，直接返回缓存项
        if (cacheItem) {
            return cacheItem;
        }

        // 获取歌曲的 Arraybuffer
        const res: ArrayBuffer | null = await ajax(`/getMusic?id=${id}`, {
            responseType: 'arraybuffer',
            withCredentials: false
        }).catch(_ => null);

        if (res === null) {
            console.log('get music fail');
            return null;
        }

        // ArrayBuffer 转 AudioBuffer
        const audioBuffer = await audioContext.decodeAudioData(res);

        // 歌曲详情
        const detailRes = await songDetail([id]);
        const detail = resolveSongs(detailRes.songs, 'detail')[0];

        // 歌词
        const lyricRes = await getLyric(id);
        const lyric = resolveLyric(lyricRes);

        const item = {
            buffer: audioBuffer,
            info: {
                ...detail,
                lyric,
                duration: audioBuffer.duration
            }
        };

        // 将歌曲信息保存到缓存中
        cache().save(id, item);

        return item;
    }

    /* ============= 暴露方法 =============  */
    /**
     * 播放歌曲
     * 
     * @param id 歌曲 id
     * @param offset 播放初始位置，默认为 0
     */
    async play(id: number, offset?: number): Promise<boolean> {
        const { currentSource, audioContext, gainNode, onEnded } = this;

        // 停止当前音频
        currentSource && currentSource.disconnect();

        // 创建 Source
        const source = audioContext.createBufferSource();
        source.connect(gainNode);
        this.currentSource = source;

        // 获取歌曲的 AudioBuffer
        const music = await this.getMusic(id);
        if (!music) {
            return false;
        }
        source.buffer = music.buffer;

        // 播放
        this.startTime = audioContext.currentTime - (offset || 0);
        source.start(audioContext.currentTime, offset || 0);
        this.playingItem = music;

        // 设置播放结束的回调
        source.onended = () => {
            this.startTime = 0;
            onEnded && onEnded();
        }
        return true;
    }

    /**
     * 暂停播放
     */
    async pause(): Promise<boolean> {
        await this.audioContext.suspend();
        return true;
    }

    /**
     * 恢复播放
     */
    async restart(): Promise<boolean> {
        await this.audioContext.resume();
        return true;
    }

    /**
     * 设置音量
     * @param value 音量 0 ~ 1 的数字
     */
    setVolume(value: number): void {
        this.gainNode.gain.value = value;
    }

    /**
     * 下载歌曲
     * @param id 歌曲 id
     */
    async download(id: number, fileName: string): Promise<boolean> {
        const music = await this.getMusic(id);
        if (!music) {
            return false;
        }
        const audioBuffer = music.buffer;

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

        // 使用 a 标签结合 download 属性下载
        const a = document.createElement('a');
        const url = URL.createObjectURL(wav);
        a.href = url;
        a.download = `${fileName}.wav`;
        a.click();
        URL.revokeObjectURL(url);

        return true;
    }

    /**
     * 设置播放结束时的回调函数
     * @param callback 回调函数
     */
    setOnEnded(callback: () => void) {
        this.onEnded = callback;
    }

    /**
     * 获取当前播放时长
     */
    getCurrentTime(): number {
        const { audioContext, startTime } = this;
        return startTime 
        ? audioContext.currentTime - startTime
        : 0;
    }

    /**
     * 获取当前播放的歌曲
     */
    getPlayingItem(): MusicItem['info'] {
        return this.playingItem.info;
    }
}

// 单例模式
export default (() => {
    let instance: Music | null;
    return () => instance || (instance = new Music());
})();
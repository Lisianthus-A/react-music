import ajax from 'Apis/apiBase';
import cache from './cache';
import { songDetail, getLyric } from 'Apis/song';
import { resolveLyric, resolveSongs } from 'Utils/resolve';

export interface MusicItem {
    buffer: ArrayBuffer;
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
    // 播放结束的回调
    private onEnded: (() => void) | null;
    // 开始时间，用于计算当前播放时长
    private startTime: number;
    // 当前播放的歌曲
    private playingItem: MusicItem | null;
    // 当前状态
    private status: 'playing' | 'pause' | 'pendding';
    private lock: boolean;

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
        this.playingItem = null;
        this.status = 'pendding';

        //    this.getMusic(776039);
    }

    /* ============= 私有方法 ============= */

    /**
     * 获取指定 id 歌曲信息
     */
    private async getMusic(id: number): Promise<MusicItem | null> {
        const cacheItem = cache().get(id);

        // 已缓存，直接返回缓存项
        if (cacheItem) {
            return cacheItem;
        }

        // 获取歌曲的 Arraybuffer
        const buffer: ArrayBuffer | null = await ajax(`/getMusic?id=${id}`, {
            responseType: 'arraybuffer',
            withCredentials: false
        }).catch(_ => null);

        if (buffer === null) {
            console.log('get music fail');
            return null;
        }

        // 歌曲详情
        const detailRes = await songDetail([id]);
        const detail = resolveSongs(detailRes.songs, 'detail')[0];

        // 歌词
        const lyricRes = await getLyric(id);
        const lyric = resolveLyric(lyricRes);

        const item = {
            buffer,
            info: {
                ...detail,
                lyric
            }
        };

        // 将歌曲信息保存到缓存中
        cache().save(id, item);

        return item;
    }

    /**
     * 恢复播放
     */
    private async restart(): Promise<boolean> {
        await this.audioContext.resume();
        this.status = 'playing';
        return true;
    }

    /* ============= 暴露方法 =============  */
    /**
     * 播放歌曲
     * 
     * @param id 歌曲 id
     * @param offset 播放初始位置，默认为 0
     */
    async play(id: number, offset?: number): Promise<boolean> {
        const { currentSource, audioContext, gainNode, playingItem, status, lock } = this;
        if (lock) {
            return false;
        }
        this.lock = true;
        // 需要播放的歌曲与当前歌曲相同并且当前状态为暂停
        // 恢复 Context 为播放状态
        if (id === playingItem?.info?.id && status === "pause") {
            this.lock = false;
            await this.restart();
            if (offset === 0) {
                return true;
            }
        }

        // 停止当前音频
        this.startTime = 0;
        if (currentSource) {
            currentSource.disconnect();
            currentSource.onended = null;
        }

        // 创建 Source
        const source = audioContext.createBufferSource();
        source.connect(gainNode);
        this.currentSource = source;

        // 获取歌曲的 ArrayBuffer
        const music = await this.getMusic(id);
        if (!music) {
            this.lock = false;
            return false;
        }
        const audioBuffer = await audioContext.decodeAudioData(music.buffer.slice(0));
        source.buffer = audioBuffer;

        // 播放
        this.startTime = audioContext.currentTime - (offset || 0);
        source.start(audioContext.currentTime, offset || 0);
        this.playingItem = music;
        this.status = 'playing';

        // 设置播放结束的回调
        source.onended = () => {
            this.startTime = 0;
            this.status = 'pendding';
            this.onEnded && this.onEnded();
        }
        this.lock = false;
        return true;
    }

    /**
     * 暂停播放
     */
    async pause(): Promise<boolean> {
        await this.audioContext.suspend();
        this.status = 'pause';
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
    async download(id: number, songName: string): Promise<boolean> {
        const music = await this.getMusic(id);
        if (!music) {
            return false;
        }
        const blob = new Blob([music.buffer]);
        const blobUrl = URL.createObjectURL(blob);

        // 使用 a 标签结合 download 属性下载
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = `${songName}.mp3`;
        a.click();
        URL.revokeObjectURL(blobUrl);

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
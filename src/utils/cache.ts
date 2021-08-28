import type { MusicItem } from './music';

const MAX_CACHE_LEN = 30;  // 最大缓存数量

class MusicCache {
    private cacheIds: number[];  // 已缓存歌曲的 id 数组
    private cache: Map<number, MusicItem>;  // 缓存

    constructor() {
        this.cacheIds = [];
        this.cache = new Map();
    }

    /**
     * 保存歌曲信息到缓存中
     * @param item 缓存项
     */
    save(id: number, item: MusicItem): void {
        const { cache, cacheIds } = this;
        // 缓存数超过限制，删除最早放入的缓存项
        if (cache.size >= MAX_CACHE_LEN) {
            const firstId = cacheIds.shift();
            cache.delete(firstId);
        }

        // 放入缓存
        cache.set(id, item);
        cacheIds.push(id);
    }

    /**
     * 读取指定 id 的歌曲缓存
     * @param id 歌曲 id
     */
    get(id: number): MusicItem | null {
        return this.cache.get(id) || null;
    }
}

// 单例模式
export default (() => {
    let instance: MusicCache | null;
    return () => instance || (instance = new MusicCache());
})();
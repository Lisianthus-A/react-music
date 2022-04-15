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
        if (cacheIds.length >= MAX_CACHE_LEN) {
            const firstKey = cacheIds.shift();
            cache.delete(firstKey as number);
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

    /**
     * 删除指定 id 的歌曲缓存
     * @param id 歌曲 id
     */
    del(id: number): void {
        const { cache, cacheIds } = this;
        const index = cacheIds.findIndex(item => item === id);
        if (index !== -1) {
            cacheIds.splice(index, 1);
            cache.delete(id);
        }
    }

    /**
     * 删除所有歌曲缓存
     */
    delAll() {
        const { cache } = this;
        cache.clear();
        this.cacheIds = [];
    }
}

// 单例模式
export default (() => {
    let instance: MusicCache;
    return () => instance || (instance = new MusicCache());
})();
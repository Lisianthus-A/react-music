import type { MusicItem } from './music';

const MAX_CACHE_LEN = 30;  // 最大缓存数量

interface MapKey {
    id: number;
}

class MusicCache {
    private cacheIds: MapKey[];  // 已缓存歌曲的 id 数组
    private cache: WeakMap<MapKey, MusicItem>;  // 缓存

    constructor() {
        this.cacheIds = [];
        this.cache = new WeakMap();
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
            cache.delete(firstKey);
        }

        // 放入缓存
        const key = { id };
        cache.set(key, item);
        cacheIds.push(key);
    }

    /**
     * 读取指定 id 的歌曲缓存
     * @param id 歌曲 id
     */
    get(id: number): MusicItem | null {
        const { cacheIds } = this;
        const key = cacheIds.find(item => item.id === id);
        if (!key) {
            return null;
        }

        return this.cache.get(key);
    }

    /**
     * 删除指定 id 的歌曲缓存
     * @param id 歌曲 id
     */
    del(id: number): void {
        const { cache, cacheIds } = this;
        const index = cacheIds.findIndex(item => item.id === id);
        if (index !== -1) {
            const key = cacheIds.splice(index, 1)[0];
            cache.delete(key);
        }
    }

    /**
     * 删除所有歌曲缓存
     */
    delAll() {
        const { cache, cacheIds } = this;
        for (const key of cacheIds) {
            cache.delete(key);
        }
        this.cacheIds = [];
    }
}

// 单例模式
export default (() => {
    let instance: MusicCache;
    return () => instance || (instance = new MusicCache());
})();
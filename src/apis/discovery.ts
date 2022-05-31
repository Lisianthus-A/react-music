// 推荐相关 API

import ajax from './apiBase';

export interface BannerRes {
    banners: {
        imageUrl: string;
        targetId: number;
        targetType: number;
        url: string;
    }[];
}

/**
 * 获取轮播图
 */
export const banner = () => {
    return ajax<BannerRes>('/banner');
}

export interface RecommendPlaylistRes {
    result: {
        id: number;
        name: string;
        copywriter: string;
        picUrl: string;
        playCount: number;
    }[];
}

/**
 * 获取推荐歌单
 * @param limit 限制数
 */
export const recommendPlaylist = (limit: number = 10) => {
    return ajax<RecommendPlaylistRes>(`/personalized?limit=${limit}`);
}

export interface TopSongRes {
    data: {
        id: number;
        name: string;
        album: {
            id: number;
            name: string;
            picUrl: string;
        };
        artists: {
            id: number;
            name: string;
        }[];
    }[];
}

/**
 * 新歌速递
 * @param type 类型 全部0 华语7 欧美96 日系8 韩系16
 */
export const topSong = (type: number = 0) => {
    return ajax<TopSongRes>(`/top/song?type=${type}&limit=10`);
}

//获取相似的歌曲
export const simiSong = (id: number) => {
    return ajax(`/simi/song?id=${id}`);
}
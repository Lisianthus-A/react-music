// 搜索相关 API

import ajax from './apiBase';

interface SearchSuggestRes {
    result: {
        songs?: {
            id: number;
            name: string;
            artists: { name: string }[];
        }[];
        albums?: {
            id: number;
            name: string;
            artist: { name: string };
        }[];
        artists?: {
            id: number;
            name: string;
        }[];
        playlists?: {
            id: number;
            name: string;
        }[];
    };
}

/**
 * 搜索关键词
 * @param keywords 关键词
 */
export const searchSuggest = (keywords: string) => {
    return ajax<SearchSuggestRes>(`/search/suggest?keywords=${keywords}`);
}

// 搜索单曲
export interface SearchSongRes {
    result: {
        songCount: number;
        songs: {
            id: number;
            name: string;
            fee: number;
            duration: number;
            artists: {
                id: number;
                name: string;
            }[];
            album: {
                id: number;
                name: string;
            };
        }[];
    };
}

// 搜索专辑
export interface SearchAlbumRes {
    result: {
        albumCount: number;
        albums: {
            id: number;
            name: string;
            picUrl: string;
            publishTime: number;
            description: string;
            artists: {
                id: number;
                name: string;
            }[];
        }[];
    };
}

// 搜索歌手
export interface SearchSingerRes {
    result: {
        artistCount: number;
        artists: {
            id: number;
            name: string;
            picUrl: string;
        }[];
    };
}

// 搜索歌单
export interface SearchPlaylistRes {
    result: {
        playlistCount: number;
        playlists: {
            id: number;
            name: string;
            coverImgUrl: string;
            description: string;
        }[];
    };
}

type SearchRes = SearchSongRes | SearchAlbumRes | SearchSingerRes | SearchPlaylistRes;
/**
 * 搜索
 * @param keywords 关键词
 * @param type 类型 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单
 * @param offset 偏移
 */
export const search = (keywords: string, type: string, offset: number) => {
    return ajax<SearchRes>(`/cloudsearch?keywords=${keywords}&type=${type}&offset=${offset}`);
}
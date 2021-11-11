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
    }
}

// 搜索关键词
export const searchSuggest = (keywords: string) => {
    return ajax<SearchSuggestRes>(`/search/suggest?keywords=${keywords}`);
}
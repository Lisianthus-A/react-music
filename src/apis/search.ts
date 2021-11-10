// 搜索相关 API

import ajax from './apiBase';

// 搜索关键词
export const searchSuggest = (keywords: string) => {
    return ajax(`/search/suggest?keywords=${keywords}`);
}
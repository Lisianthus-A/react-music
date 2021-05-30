// 搜索相关 API

import ajax from './apiBase';

// 搜索关键词
export const searchSuggest = async (keywords) => {
    const result = await ajax(`/search/suggest?keywords=${keywords}`);
    return result;
}
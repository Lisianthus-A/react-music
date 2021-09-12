//歌手相关 API

import ajax from './apiBase';

/**
 * 歌手图片、歌曲等信息
 * @param id 歌手 id
 * @returns 
 */
export const singerInfo = (id: number | string) => {
    return ajax(`/artists?id=${id}`);
}

/**
 * 歌手介绍
 * @param id 歌手 id
 * @returns 
 */
export const singerDesc = (id: number | string) => {
    return ajax(`/artist/desc?id=${id}`);
}
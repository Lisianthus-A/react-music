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
 */
export const singerDesc = (id: number | string) => {
    return ajax(`/artist/desc?id=${id}`);
}

/**
 * 获取歌手专辑
 * @param id 歌手 id
 * @param offset 偏移
 */
export const singerAlbum = (id: number | string, offset: number = 0) => {
    return ajax(`/artist/album?id=${id}&limit=30&offset=${offset}`);
}

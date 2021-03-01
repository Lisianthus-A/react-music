//歌手相关 API

import ajax from './apiBase';

//歌手图片、歌曲等信息
export const singerInfo = async (id) => {
    const result = await ajax(`/artists?id=${id}`);
    return result;
}

//歌手介绍
export const singerDesc = async (id) => {
    const result = await ajax(`/artist/desc?id=${id}`);
    return result;
}
import ajax from './apiBase';

//歌手图片、歌曲等信息
export const artists = async (id) => {
    const result = await ajax(`/artists?id=${id}`);
    return result;
}

//歌手介绍
export const artistDesc = async (id) => {
    const result = await ajax(`/artist/desc?id=${id}`);
    return result;
}
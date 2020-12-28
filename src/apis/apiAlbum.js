import ajax from './apiBase';

//专辑评论
export const commentAlbum = async (id) => {
    const result = await ajax(`/comment/album?id=${id}`);
    return result;
}

//专辑内容
export const album = async (id) => {
    const result = await ajax(`/album?id=${id}`);
    return result;
}
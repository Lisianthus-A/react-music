import ajax from './apiBase';

export const getFMList = async () => {
    const result = await ajax('/personal_fm');
    return result;
}

//不喜欢歌曲
export const unlike = async (id) => {
    const result = await ajax(`/fm_trash?id=${id}`);
    return result;
}
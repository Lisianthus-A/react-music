//私人 FM 相关 API

import ajax from './apiBase';

//获取私人FM列表
export const getFMList = async () => {
    const result = await ajax(`/personal_fm?timestamp=${Date.now()}`);
    return result;
}

//不喜欢歌曲
export const unlike = async (id) => {
    const result = await ajax(`/fm_trash?id=${id}`);
    return result;
}
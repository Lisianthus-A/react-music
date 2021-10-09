// 私人 FM 相关 API

import ajax from './apiBase';

// 获取私人FM列表
export const getFMList = () => {
    return ajax(`/personal_fm?_t=${Date.now()}`);
}

// 不喜欢歌曲
export const unlike = (id: number) => {
    return ajax(`/fm_trash?id=${id}`);
}
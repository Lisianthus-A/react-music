//歌曲相关 API

import ajax from './apiBase';

//音乐评论
export const songComment = async (id) => {
    const result = await ajax(`/comment/music?id=${id}`);
    return result;
}

//歌曲详情  ids 为歌曲 id 数组
export const songDetail = async (ids) => {
    ids.length = ids.length > 200 ? 200 : ids.length;  //限制长度为 200
    const result = await ajax(`/song/detail?ids=${ids.join()}`);
    return result;
}

//获取歌词
export const getLyric = async (id) => {
    const result = await ajax(`/lyric?id=${id}`);
    return result;
}

//歌单相关 API

import ajax from './apiBase';

//歌单详情
export const songlistDetail = async (id) => {
    const result = await ajax(`/playlist/detail?id=${id}&timestamp=${Date.now()}`);
    return result;
}

//获取歌单评论
export const songlistComment = async (id) => {
    const result = await ajax(`/comment/playlist?id=${id}`);
    return result;
}

//对歌单添加或删除歌曲  opt-> add 或 del  tracks -> 需要操作的歌曲id数组
export const songlistTracks = async (opt, id, tracks) => {
    const ids = tracks.join();  //歌曲 id 数组
    const result = await ajax(`/playlist/tracks?op=${opt}&pid=${id}&tracks=${ids}`);
    return result;
}

//收藏 / 取消收藏歌单  type --> 1 收藏 2 取消收藏  id --> 歌单id
export const songlistSubscribe = async (id, type = 1) => {
    const result = await ajax(`/playlist/subscribe?t=${type}&id=${id}`);
    return result;
}

//删除歌单
export const deleteSonglist = async (id) => {
    const result = await ajax(`/playlist/delete?id=${id}`);
    return result;
}

//用户歌单
export const userSonglist = async (id) => {
    const result = await ajax(`/user/playlist?uid=${id}&timestamp=${Date.now()}`);
    return result;
}
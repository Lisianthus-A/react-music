import ajax from './apiBase';

//歌单详情
export const playlistDetail = async (id) => {
    const result = await ajax(`/playlist/detail?id=${id}&timestamp=${Date.now()}`);
    return result;
}

//歌曲详情  ids->歌曲id数组
export const songDetail = async (ids) => {
    ids.length = ids.length > 200 ? 200 : ids.length;  //限制长度为 200
    const result = await ajax(`/song/detail?ids=${ids.join()}`);
    return result;
}

//获取歌词
export const lyric = async (id) => {
    const result = await ajax(`/lyric?id=${id}`);
    return result;
}

//收藏/取消收藏歌单  type--> 1收藏 2取消收藏  id--> 歌单id
export const playlistSubscribe = async (id, type = 1) => {
    const result = await ajax(`/playlist/subscribe?t=${type}&id=${id}`);
    return result;
}

//对歌单添加或删除歌曲  opt-> add 或 del  tracks -> 需要操作的歌曲id数组
export const playlistTracks = async (opt, playlistId, tracks) => {
    const ids = tracks.join();
    const result = await ajax(`/playlist/tracks?op=${opt}&pid=${playlistId}&tracks=${ids}`);
    return result;
}

//用户歌单
export const userPlaylist = async (id) => {
    const result = await ajax(`/user/playlist?uid=${id}&timestamp=${Date.now()}`);
    return result;
}
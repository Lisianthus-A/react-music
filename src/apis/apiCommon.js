import ajax from './apiBase';

//歌单详情
export const playlistDetail = async (id) => {
    const result = await ajax(`/playlist/detail?id=${id}`);
    return result;
}

//歌曲详情  ids->歌曲id数组
export const songDetail = async (ids) => {
    const result = await ajax(`/song/detail?ids=${ids.join()}`);
    return result;
}

//获取歌词
export const lyric = async (id) => {
    const result = await ajax(`/lyric?id=${id}`);
    return result;
}
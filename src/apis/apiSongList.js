import ajax from './apiBase';
import { playlistDetail, songDetail } from './apiCommon';

//歌单评论
export const commentPlaylist = async (id) => {
    const result = await ajax(`/comment/playlist?id=${id}`);
    return result;
}

//对歌单添加或删除歌曲  opt-> add 或 del  tracks -> 需要操作的歌曲id数组
export const playlistTracks = async (opt, playlistId, tracks) => {
    const ids = tracks.join();
    const result = await ajax(`/playlist/tracks?op=${opt}&pid=${playlistId}&tracks=${ids}`);
    return result;
}

//歌单详情
export { playlistDetail };

//歌曲详情
export { songDetail };
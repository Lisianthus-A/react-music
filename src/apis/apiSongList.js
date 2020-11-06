import ajax from './apiBase';
import { playlistDetail, songDetail, playlistTracks, playlistSubscribe } from './apiCommon';

//歌单评论
export const commentPlaylist = async (id) => {
    const result = await ajax(`/comment/playlist?id=${id}`);
    return result;
}

//对歌单添加或删除歌曲
export { playlistTracks };

//歌单详情
export { playlistDetail };

//歌曲详情
export { songDetail };

//收藏/取消收藏歌单
export { playlistSubscribe };
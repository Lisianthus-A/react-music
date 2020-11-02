import ajax from './apiBase';
import { playlistDetail } from './apiCommon';

//歌单详情
export { playlistDetail };

//歌单评论
export const commentPlaylist = async (id) => {
    const result = await ajax(`/comment/playlist?id=${id}`);
    return result;
}
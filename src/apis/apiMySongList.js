import ajax from './apiBase';
import { playlistDetail, songDetail } from './apiCommon';

//用户歌单
export const userPlaylist = async (id) => {
    const result = await ajax(`/user/playlist?uid=${id}`);
    return result;
}

//删除歌单
export const deletePlaylist = async (id) => {
    const result = await ajax(`/playlist/delete?id=${id}`);
    return result;
}
import ajax from './apiBase';
import { userPlaylist } from './apiCommon';

//用户歌单
export { userPlaylist };

//删除歌单
export const deletePlaylist = async (id) => {
    const result = await ajax(`/playlist/delete?id=${id}`);
    return result;
}
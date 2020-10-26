import ajax from './apiBase';
import { playlistDetail, songDetail } from './apiCommon';

//轮播图
export const banner = async () => {
    const result = await ajax('/banner');
    return result;
}

//推荐歌单
export const personalized = async (limit = 10) => {
    const result = await ajax(`/personalized?limit=${limit}`);
    return result;
}

//新歌速递
//全部0 华语7 欧美96 日系8 韩系16
export const topSong = async (type = 0) => {
    const result = await ajax(`/top/song?type=${type}`);
    return result;
}

//歌单详情
export { playlistDetail };

//歌曲详情
export { songDetail };
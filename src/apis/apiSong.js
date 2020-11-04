import ajax from './apiBase';
import { songDetail, lyric } from './apiCommon';

//音乐评论
export const commentMusic = async (id) => {
    const result = await ajax(`/comment/music?id=${id}`);
    return result;
}

//歌曲详情
export { songDetail };

//歌词
export { lyric };

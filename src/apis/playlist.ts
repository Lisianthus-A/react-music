// 歌单相关 API

import ajax from './apiBase';

export interface PlaylistDetailRes {
    playlist: {
        name: string;
        coverImgUrl: string;
        tags: string[];
        description: string;
        creator: {
            userId: number;
            nickname: string;
            avatarUrl: string;
            createTime: number;
        };
        trackIds: {
            id: number;
            at: number;
        }[];
    }
}

/**
 * 歌单详情
 * @param id 歌单 id
 */
export const playlistDetail = (id: number) => {
    return ajax<PlaylistDetailRes>(`/playlist/detail?id=${id}`);
}

type CommentItem = {
    content: string;
    user: {
        userId: number;
        nickname: string;
        avatarUrl: string;
    };
    beReplied: Omit<CommentItem, 'beReplied'>[];
}

export interface PlaylistCommentRes {
    total: number;
    hotComments: CommentItem[];
    comments: CommentItem[];
}

/**
 * 歌单评论
 * @param id 歌单 id
 */
export const playlistComment = (id: number) => {
    return ajax<PlaylistCommentRes>(`/comment/playlist?id=${id}`);
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
    const result = await ajax(`/user/playlist?uid=${id}`);
    return result;
}
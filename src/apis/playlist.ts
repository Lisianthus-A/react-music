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

interface CommentItem {
    content: string;
    user: {
        userId: number;
        nickname: string;
        avatarUrl: string;
    };
    time: number;
    likedCount: number;
    beReplied: Omit<CommentItem, 'beReplied' | 'time' | 'likedCount'>[];
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

/**
 * 对歌单添加或删除歌曲
 * @param opt 操作
 * @param playlistId 歌单 id
 * @param songId 歌曲 id
 * @returns 
 */
export const songlistTracks = (opt: 'add' | 'del', playlistId: number, songId: number) => {
    return ajax(`/playlist/tracks?op=${opt}&pid=${playlistId}&tracks=${songId}`);
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

interface UserSonglistRes {
    playlist: {
        id: number;
        name: string;
        subscribed: boolean;
        coverImgUrl: string;
        trackCount: number;
    }[];
}

/**
 * 用户歌单
 * @param id 用户 id
 */
export const userPlaylist = (id: number | string) => {
    return ajax<UserSonglistRes>(`/user/playlist?uid=${id}`);
}
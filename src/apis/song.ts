// 歌曲相关 API

import ajax from './apiBase';

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

export interface SongCommentRes {
    total: number;
    hotComments: CommentItem[];
    comments: CommentItem[];
}

/**
 * 获取歌曲评论
 * @param id 歌曲 id
 */
export const songComment = (id: number | string) => {
    return ajax<SongCommentRes>(`/comment/music?id=${id}`);
}

export interface SongDetailRes {
    songs: {
        id: number;
        name: string;
        al: {
            id: number;
            name: string;
            picUrl: string;
        };
        ar: {
            id: number;
            name: string;
        }[];
    }[];
}

/**
 * 获取歌曲详情
 * @param ids 歌曲 id 数组
 */
export const songDetail = (ids: number[] | string[]) => {
    return ajax<SongDetailRes>(`/song/detail?ids=${ids.join()}`);
}

export interface LyricRes {
    uncollected?: boolean;
    nolyric?: boolean;
    lrc: { lyric: string; };
    tlyric: { lyric?: string };
}

/**
 * 获取歌词
 * @param id 歌曲 id
 * @returns 
 */
export const getLyric = async (id: number | string) => {
    return ajax<LyricRes>(`/lyric?id=${id}`);
}

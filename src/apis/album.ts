// 专辑相关 API

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

export interface AlbumCommentRes {
    total: number;
    hotComments: CommentItem[];
    comments: CommentItem[];
}

/**
 * 专辑评论
 * @param id 专辑 id
 * @returns 
 */
export const albumComment = (id: number | string) => {
    return ajax<AlbumCommentRes>(`/comment/album?id=${id}`);
}

/**
 * 专辑内容
 * @param id 专辑 id
 */
export const album = async (id: number | string) => {
    return ajax(`/album?id=${id}`);;
}
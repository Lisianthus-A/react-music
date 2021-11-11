import React, { useState, useEffect } from 'react';
import { songComment, songDetail, getLyric } from 'Apis/song';
import { useQuery } from 'Utils/hooks';
import { resolveLyric, resolveDetail, resolveSongs } from 'Utils/resolve';
import View from './components/View';

import { SongItem } from 'AppContainer/index';
import type { SongCommentRes } from 'Apis/song';

export interface PageState {
    // 详情
    detail: Record<string, any>;
    // 歌曲列表
    songList: SongItem[];
    // 歌词
    lyric: [string, string, number][];
    // 评论
    comment: SongCommentRes;
}

function Song() {
    const id = useQuery('id');

    if (!id) {
        return <div>歌曲id错误</div>;
    }

    const [pageState, setPageState] = useState<PageState | null>(null);

    useEffect(() => {
        const getData = async () => {
            const detailRes = await songDetail([id]);
            const lyricRes = await getLyric(id);
            // 详情
            const detail = resolveDetail(detailRes);
            // 歌曲列表
            const songList = resolveSongs(detailRes.songs, 'detail');
            // 歌词
            const lyric = resolveLyric(lyricRes);
            // 评论
            const comment = await songComment(id);

            setPageState({ detail, songList, lyric, comment });
        }

        setPageState(null);
        getData();
    }, [id]);

    // 改变标题
    useEffect(() => {
        const title = pageState?.detail?.title;
        if (title) {
            document.title = title;
        }        
    }, [pageState]);

    return (
        <View pageState={pageState} />
    );
}

export default Song;
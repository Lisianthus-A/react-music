import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { album, albumComment } from 'Apis/album';
import { searchItem } from 'Utils/index';
import { resolveSongs, resolveDetail } from 'Utils/resolve';
import View from './components/View';

import type { SongItem } from 'AppContainer/index';
import type { AlbumCommentRes } from 'Apis/album';

export interface PageState {
    // 详情
    detail: any;
    // 歌曲列表
    songList: SongItem[];
    // 评论
    comment: AlbumCommentRes;
}

function Album() {
    const { search } = useLocation();
    const id = searchItem(search, 'id');
    if (!id) {
        return (
            <div>id错误</div>
        );
    }

    const [pageState, setPageState] = useState<PageState | null>(null);

    useEffect(() => {
        const getData = async () => {
            const detailRes = await album(id);
            // 详情
            const detail = resolveDetail(detailRes);
            // 歌曲列表
            const songList = resolveSongs(detailRes.songs, 'detail');
            // 评论
            const comment = await albumComment(id);

            setPageState({ detail, songList, comment });
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

export default Album;
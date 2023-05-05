import { useState, useEffect } from 'react';
import { useQuery } from '@/utils/hooks';
import { resolveDetail } from '@/utils/resolve';
import { playlistDetail, playlistComment } from '@/apis/playlist';
import SongListView from './components/View';

import type { PlaylistCommentRes } from '@/apis/playlist';

export interface PageState {
    // 详情
    detail: Record<string, any>;
    // 所有歌曲 id
    songIds: number[];
    // 评论
    comment: PlaylistCommentRes;
}

function Playlist() {
    const id = useQuery('id');
    const [pageState, setPageState] = useState<PageState | null>(null);

    // 改变标题
    useEffect(() => {
        const title = pageState?.detail?.title;
        if (title) {
            document.title = title;
        }
    }, [pageState]);

    useEffect(() => {
        if (!id) {
            return;
        }

        const getData = async () => {
            const detailRes = await playlistDetail(id as string);
            // 详情
            const detail = resolveDetail(detailRes);
            // 所有歌曲 id
            const songIds = detailRes.playlist.trackIds.map(({ id }) => id);
            // 评论
            const comment = await playlistComment(id as string);

            setPageState({ detail, songIds, comment });
        }

        setPageState(null);
        getData();
    }, []);

    if (!id) {
        return <div>id 错误</div>;
    }

    return (
        <SongListView pageState={pageState} />
    );
}

export default Playlist;
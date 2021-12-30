import { useState, useEffect } from 'react';
import { useQuery } from 'Utils/hooks';
import { resolveDetail } from 'Utils/resolve';
import { playlistDetail, playlistComment  } from 'Apis/playlist';
import SongListView from './components/View';

import type { PlaylistCommentRes} from 'Apis/playlist';

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
    if (!/\d+/.test(id)) {
        return <div>id 错误</div>;
    }

    const [pageState, setPageState] = useState<PageState | null>(null);

    // 改变标题
    useEffect(() => {
        const title = pageState?.detail?.title;
        if (title) {
            document.title = title;
        }
    }, [pageState]);

    useEffect(() => {
        const getData = async () => {
            const detailRes = await playlistDetail(id);
            // 详情
            const detail = resolveDetail(detailRes);  
            // 所有歌曲 id
            const songIds = detailRes.playlist.trackIds.map(({ id }) => id);
            // 评论
            const comment = await playlistComment(id);

            setPageState({ detail, songIds, comment });
        }

        setPageState(null);
        getData();
    }, [id]);

    return (
        <SongListView pageState={pageState} />
    );
}

export default Playlist;
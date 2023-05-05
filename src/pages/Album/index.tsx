import { useEffect, useState } from 'react';
import { album, albumComment } from '@/apis/album';
import { useQuery } from '@/utils/hooks';
import { resolveSongs, resolveDetail } from '@/utils/resolve';
import View from './components/View';

import type { SongItem } from '@/containers';
import type { AlbumCommentRes } from '@/apis/album';

export interface PageState {
    // 详情
    detail: any;
    // 歌曲列表
    songList: SongItem[];
    // 评论
    comment: AlbumCommentRes;
}

function Album() {
    const id = useQuery('id');

    const [pageState, setPageState] = useState<PageState | null>(null);

    useEffect(() => {
        if (!id) {
            return;
        }

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
    }, []);

    // 改变标题
    useEffect(() => {
        const title = pageState?.detail?.title;
        if (title) {
            document.title = title;
        }
    }, [pageState]);

    if (!id) {
        return (
            <div>id错误</div>
        );
    }

    return (
        <View pageState={pageState} />
    );
}

export default Album;
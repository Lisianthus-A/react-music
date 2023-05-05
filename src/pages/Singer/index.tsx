import { useState, useEffect } from 'react';
import { useQuery } from '@/utils/hooks';
import { resolveSongs } from '@/utils/resolve';
import { singerInfo, singerDesc, singerAlbum } from '@/apis/singer';
import View from './components/View';

import type { SongItem } from '@/containers';

export interface PageState {
    header: any;
    songList: SongItem[];
    albumList: any[];
    intro: any;
}

function Singer() {
    const id = useQuery('id');

    const [pageState, setPageState] = useState<PageState | null>(null);

    useEffect(() => {
        if (!id) {
            return;
        }

        const getData = async () => {
            const singerRes = await singerInfo(id as string);
            const descRes = await singerDesc(id as string);
            const albumRes = await singerAlbum(id as string);

            const header = {
                name: singerRes.artist.name,
                alias: singerRes.artist.alias,
                cover: singerRes.artist.picUrl
            };
            const songList = resolveSongs(singerRes.hotSongs, 'detail');
            const intro = {
                intro: descRes.introduction,
                briefDesc: descRes.briefDesc
            };
            const albumList = albumRes.hotAlbums.map((item: any) => ({
                id: item.id,
                name: item.name,
                singer: item.artists,
                picUrl: item.picUrl
            }));

            setPageState({ header, songList, intro, albumList })
        }

        setPageState(null);
        getData();
    }, []);

    // 改变标题
    useEffect(() => {
        const name = pageState?.header?.name;
        if (name) {
            document.title = `${name}的音乐`;
        }
    }, [pageState]);

    if (!id) {
        return <div>id 错误</div>;
    }

    return (
        <View pageState={pageState} />
    );
}

export default Singer;

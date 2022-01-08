import { useState, useEffect } from 'react';
import { useQuery } from 'Utils/hooks';
import { resolveSongs } from 'Utils/resolve';
import { singerInfo, singerDesc } from 'Apis/singer';
import View from './components/View';

import type { SongItem } from 'AppContainer/index';

export interface PageState {
    header: any;
    songList: SongItem[];
    intro: any;
}

function Singer() {
    const id = useQuery('id');

    const [pageState, setPageState] = useState<PageState | null>(null);

    useEffect(() => {
        const getData = async () => {
            const singerRes = await singerInfo(id as string);
            const descRes = await singerDesc(id as string);

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

            setPageState({ header, songList, intro })
        }

        setPageState(null);
        getData();
    }, [id]);

    // 改变标题
    useEffect(() => {
        const name = pageState?.header?.name;
        if (name) {
            document.title = `${name}的音乐`;
        }
    }, [pageState]);

    return (
        <View pageState={pageState} />
    );
}

export default Singer;
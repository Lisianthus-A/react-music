import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchItem } from 'Utils/index';
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
    const { search } = useLocation();
    const id = searchItem(search, 'id');

    const [pageState, setPageState] = useState<PageState | null>(null);

    useEffect(() => {
        const getData = async () => {
            const singerRes = await singerInfo(id);
            const descRes = await singerDesc(id);

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
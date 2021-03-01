import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchItem } from 'Utils';
import { resolveSongs } from 'Utils/resolve';
import { singerInfo, singerDesc } from 'Apis/singer';

import SingerView from './components/View';

export default () => {
    const { search } = useLocation();
    const id = searchItem(search, 'id');

    const [state, setState] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const singerRes = await singerInfo(id);
            const descRes = await singerDesc(id);

            const header = {
                name: singerRes.artist.name,
                alias: singerRes.artist.alias,
                cover: singerRes.artist.picUrl
            };
            const songs = resolveSongs(singerRes.hotSongs);
            const intro = {
                intro: descRes.introduction,
                briefDesc: descRes.briefDesc
            };

            setState({ header, songs, intro })
        }

        setState(null);
        getData();
    }, [id]);

    return (
        <SingerView state={state} />
    );
}
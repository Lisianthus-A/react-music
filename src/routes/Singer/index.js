import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchItem } from 'Utils';
import { resolveSongs } from 'Utils/resolve';
import { artists, artistDesc } from 'Apis/apiSinger';

import SingerView from './components/View';

export default () => {
    const { search } = useLocation();
    const id = searchItem(search, 'id');

    const [state, setState] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const artistsRes = await artists(id);
            const descRes = await artistDesc(id);

            const header = {
                name: artistsRes.artist.name,
                alias: artistsRes.artist.alias,
                cover: artistsRes.artist.picUrl
            };
            const songs = resolveSongs(artistsRes.hotSongs);
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
import React, { useState, useEffect } from 'react';
import { searchItem } from 'Utils';
import { useLocation } from 'react-router-dom';
import style from './View.module.scss';

import Loading from 'Components/Loading';

import { artists, artistDesc } from 'Apis/apiSinger';

import Header from './Header';
import Tabs from './Tabs';
import Songs from './Songs';
import Introduction from './Introduction';

const tabs = [
    { text: '热门作品', id: 0 },
    { text: '歌手介绍', id: 1 },
];

const Singer = ({ playlist, setPlaylist }) => {
    const { search } = useLocation();
    const id = searchItem(search, 'id');

    const [activeTab, setActive] = useState(0);
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

            const songs = artistsRes.hotSongs.map(({ id, name, ar, fee, dt, al: { id: albumId, name: album } }) => ({
                id,
                albumId,
                album,
                title: name,
                singer: ar.map(({ name }) => name).join('/'),
                duration: dt / 1000,
                singerId: ar[0].id,
                fee: fee === 1
            }));
            //briefDesc
            const intro = {
                intro: descRes.introduction,
                briefDesc: descRes.briefDesc
            };

            setState({ header, songs, intro })
        }

        getData();
    },
        []
    );

    if (!state) {
        return <Loading />;
    }

    return (
        <div className={style.singer}>
            <Header data={state.header} />
            <Tabs tabs={tabs} activeTab={activeTab} setActive={setActive} />
            {activeTab === 0 &&
                <Songs data={state.songs} playlist={playlist} setPlaylist={setPlaylist} />
            }
            {activeTab === 1 &&
                <Introduction data={state.intro} />
            }
        </div>
    );
}

export default Singer;
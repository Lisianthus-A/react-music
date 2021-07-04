import React from 'react';
import style from './View.module.scss';

import Loading from 'Components/Loading';
import SongList from 'Components/SongList';
import Header from './Header';
import Tabs from 'Components/Tabs';
import Introduction from './Introduction';

const Singer = ({ state }) => {
    if (!state) {
        return <Loading />;
    }

    return (
        <div className={style.singer}>
            <Header data={state.header} />
            <Tabs>
                <Tabs.Pane key="0" text="热门作品">
                    <SongList data={state.songs} />
                </Tabs.Pane>
                <Tabs.Pane key="1" text="歌手介绍">
                    <Introduction data={state.intro} />
                </Tabs.Pane>
            </Tabs>
        </div>
    );
}

export default Singer;
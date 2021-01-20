import React, { useState } from 'react';
import style from './View.module.scss';

import Loading from 'Components/Loading';
import SongList from 'Components/SongList';
import Header from './Header';
import Tabs from './Tabs';
import Introduction from './Introduction';

const tabs = [
    { text: '热门作品', id: 0 },
    { text: '歌手介绍', id: 1 },
];

const Singer = ({ state }) => {
    if (!state) {
        return <Loading />;
    }
    const [activeTab, setActive] = useState(0);

    return (
        <div className={style.singer}>
            <Header data={state.header} />
            <Tabs tabs={tabs} activeTab={activeTab} setActive={setActive} />
            {activeTab === 0 &&
                <SongList data={state.songs} />
            }
            {activeTab === 1 &&
                <Introduction data={state.intro} />
            }
        </div>
    );
}

export default Singer;
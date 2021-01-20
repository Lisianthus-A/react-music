import React from 'react';
import style from './View.module.scss';

import Loading from 'Components/Loading';

import Carousel from './Carousel';
import RecommentSongList from './RecommentSongList';
import RecentMusicList from './RecentMusicList';

const Discovery = ({ state, onSongPlay, onSonglistPlay }) => {

    if (!state) {
        return <Loading />;
    }

    return (
        <div className={style.discovery}>
            <div className={style.banner}>
                <Carousel data={state.bannerData.banners} />
            </div>
            <div>
                <div className={style.title}>推荐歌单</div>
                <RecommentSongList data={state.recommendData.result} onPlay={onSonglistPlay} />
            </div>
            <div>
                <div className={style.title}>最新音乐</div>
                <RecentMusicList data={state.topSongData} onPlay={onSongPlay} />
            </div>
        </div>
    );
}

export default Discovery;
import React, { useEffect, useState, memo } from 'react';
import './View.scss';
import { banner, personalized, topSong } from 'Apis/apiDiscovery';
import Carousel from 'Components/Carousel';

import RecommentSongList from './RecommentSongList';
import RecentMusicList from './RecentMusicList';

const initialState = {
    bannerData: null,
    recommendData: null,
    topSongData: null
};

const Discovery = memo(({ audioRef }) => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const getData = async () => {
            const bannerData = await banner();
            const recommendData = await personalized();
            const topSongData = await topSong();
            setState({ bannerData, recommendData, topSongData });
            console.log('state', { bannerData, recommendData, topSongData });
        }
        getData();
    },
        []
    );

    return (
        <div className='discovery'>
            <div className='banner'>
                <Carousel data={state.bannerData?.banners || []} /> {/*测试数据，待替换*/}
            </div>
            <div className='recommend'>
                <div className='title'>推荐歌单</div>
                <RecommentSongList data={state.recommendData?.result || []} />  {/*测试数据，待替换*/}
            </div>
            <div className='recent-music'>
                <div className='title'>最新音乐</div>
                <RecentMusicList data={state.topSongData?.data || []} />  {/*测试数据，待替换*/}
            </div>
        </div>
    );
});

export default Discovery;
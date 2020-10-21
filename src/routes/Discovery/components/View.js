import React, { useEffect } from 'react';
import './View.scss';
import { banner, personalized, topSong } from 'Apis/apiDiscovery';
import Carousel from 'Components/Carousel';

import RecommentSongList from './RecommentSongList';
import RecentMusicList from './RecentMusicList';

import testBannerData from 'TestData/banner';  //测试数据，待替换
import testRecommendData from 'TestData/personalized';  //测试数据，待替换
import testTopSongData from 'TestData/topSong';  //测试数据，待替换
import testImg from 'Images/test.jpg';

const Discovery = ({ audioRef }) => {
    // useEffect(() => {
    //     const asyncFoo = async () => {
    //         console.log(await banner());
    //         console.log(await personalized());
    //         console.log(await topSong());
    //     }
    //     asyncFoo();
    // },
    //     []
    // );
    return (
        <div className='discovery'>
            <div className='banner'>
                <Carousel data={testBannerData.banners} /> {/*测试数据，待替换*/}
            </div>
            <div className='recommend'>
                <div className='title'>推荐歌单</div>
                <RecommentSongList data={testRecommendData.result} />  {/*测试数据，待替换*/}
            </div>
            <div className='recent-music'>
                <div className='title'>最新音乐</div>
                <RecentMusicList data={testTopSongData.data} />  {/*测试数据，待替换*/}
            </div>
        </div>
    );
}

export default Discovery;
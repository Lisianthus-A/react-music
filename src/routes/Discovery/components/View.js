import React, { useEffect, useContext } from 'react';
import './View.scss';
import { banner, personalized, topSong } from '../../../apis/apiDiscovery';
import Carousel from '../../../components/Carousel';

const Discovery = () => {
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
                <Carousel />
            </div>
            <div className='recommend-song'>推荐歌单</div>
            <div className='recent-music'>最新音乐</div>
        </div>
    );
}

export default Discovery;
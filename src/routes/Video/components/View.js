import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchItem } from 'Utils';

const Video = () => {
    const { search } = useLocation();
    const id = searchItem(search, 'id');

    // useEffect(() => {
    //     //隐藏音乐播放器
    //     const middle = document.getElementsByClassName('middle')[0];
    //     middle.style.height = '100%';

    //     return () => {
    //         middle.style.height = 'calc(100% - 128px)';
    //     }
    // },
    //     []
    // );

    return (
        <div className='video'>
            Video Id={id}
        </div>
    );
}

export default Video;
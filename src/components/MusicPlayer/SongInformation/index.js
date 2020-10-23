import React from 'react';
import './index.scss';
import { convertTime } from 'Utils';

const SongInformation = ({ current, duration, title, singer, cover }) => {
    return (
        <div className='song-container'>
            <div className='image'>
                <img src={cover} alt='' />
            </div>
            <div className='information'>
                <div className='song'>{title} - <span className='singer'>{singer}</span></div>
                <div className='time'>{`${convertTime(current)} / ${convertTime(duration)}`}</div>
            </div>
        </div>
    );
}

export default SongInformation;
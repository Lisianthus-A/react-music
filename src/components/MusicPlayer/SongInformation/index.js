import React from 'react';
import './index.scss';
import { convertTime } from 'Utils';

const SongInformation = ({ current, duration, title, singer, cover, id }) => {
    return (
        <div className='song-container'>
            <div className='image'>
                <img src={`${cover}?param=50y50`} />
            </div>
            <div className='information'>
                <div className='song'><a href={`/#/Song?id=${id}`}>{title}</a> - <span className='singer' title={singer}>{singer}</span></div>
                <div className='time'>{`${convertTime(current)} / ${convertTime(duration)}`}</div>
            </div>
        </div>
    );
}

export default SongInformation;
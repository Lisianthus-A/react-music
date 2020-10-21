import React from 'react';
import './index.scss';
import testImg from 'Images/test.jpg';
import { convertTime } from 'Utils';

const SongInformation = ({ current, duration }) => {
    return (
        <div className='song-container'>
            <div className='image'>
                <img src={testImg} alt='' />
            </div>
            <div className='information'>
                <div className='song'>ONE's hope - <span className='singer'>やなぎなぎ</span></div>
                <div className='time'>{`${convertTime(current)} / ${convertTime(duration)}`}</div>
            </div>
        </div>
    );
}

export default SongInformation;
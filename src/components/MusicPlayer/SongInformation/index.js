import React from 'react';
import './index.scss';
import testImg from '../../../../assets/images/test.jpg';
import { convertTime } from '../../../utils';

const SongInformation = (props) => {
    const { current, duration } = props;
    return (
        <div className='song-container'>
            <div className='image'>
                <img src={testImg} alt='' />
            </div>
            <div className='information'>
                <div className='song'>丁香花 - <span className='singer'>唐磊</span></div>
                <div className='time'>{`${convertTime(current)} / ${convertTime(duration)}`}</div>
            </div>
        </div>
    );
}

export default SongInformation;
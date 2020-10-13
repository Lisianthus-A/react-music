import React, { useRef, useState } from 'react';
import './index.scss';
import testImg from '../../../assets/images/test.jpg';
import { StepBackwardOutlined, CaretRightOutlined, PauseOutlined, StepForwardOutlined } from '@ant-design/icons';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    const [playing, setPlaying] = useState(false);
    const togglePlay = () => {
        setPlaying(!playing)
    }

    return (
        <div className='music-player'>
            <audio ref={audioRef} style={{ display: 'none' }} />
            <div className='song-container'>
                <div className='image'>
                    <img src={testImg} alt='' />
                </div>
                <div className='information'>
                    <div className='song'>丁香花 - <span className='singer'>唐磊</span></div>
                    <div className='time'>00:00 / 12:34</div>
                </div>
            </div>
            <div className='control-button-container'>
                <div className='prev'><StepBackwardOutlined /></div>
                <div className='play-or-pause' onClick={togglePlay}>
                    {playing ? <PauseOutlined /> : <CaretRightOutlined />}
                </div>
                <div className='next'><StepForwardOutlined /></div>
            </div>
            <div className='other-button'>other-button</div>
        </div>
    );
}

export default MusicPlayer;
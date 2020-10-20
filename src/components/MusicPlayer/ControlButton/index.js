import React from 'react';
import './index.scss';
import { StepBackwardOutlined, CaretRightOutlined, PauseOutlined, StepForwardOutlined } from '@ant-design/icons';

const ControlButton = ({ isPlaying, setPlaying, audioRef, setDuration }) => {
    const togglePlay = () => {
        const audio = audioRef.current;
        setDuration(audio.duration);  //设置歌曲时长

        //播放或暂停
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }

        setPlaying(!isPlaying)
    }

    return (
        <div className='control-button-container'>
            <div className='prev'><StepBackwardOutlined /></div>
            <div className='play-or-pause' onClick={togglePlay}>
                {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
            </div>
            <div className='next'><StepForwardOutlined /></div>
        </div>
    );
}

export default ControlButton;
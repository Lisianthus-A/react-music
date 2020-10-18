import React from 'react';
import './index.scss';
import { StepBackwardOutlined, CaretRightOutlined, PauseOutlined, StepForwardOutlined } from '@ant-design/icons';

const ControlButton = (props) => {
    const { playing, setPlaying, audioRef, setDuration } = props;
    
    const togglePlay = () => {
        const audio = audioRef.current;
        setDuration(audio.duration);  //设置歌曲时长

        //播放或暂停
        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }

        setPlaying(!playing)
    }

    return (
        <div className='control-button-container'>
            <div className='prev'><StepBackwardOutlined /></div>
            <div className='play-or-pause' onClick={togglePlay}>
                {playing ? <PauseOutlined /> : <CaretRightOutlined />}
            </div>
            <div className='next'><StepForwardOutlined /></div>
        </div>
    );
}

export default ControlButton;
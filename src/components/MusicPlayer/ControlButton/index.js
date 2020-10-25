import React, { memo } from 'react';
import './index.scss';
import { StepBackwardOutlined, CaretRightOutlined, PauseOutlined, StepForwardOutlined } from '@ant-design/icons';

const ControlButton = memo(({ isPlaying, setPlaying, audioRef }) => {
    const togglePlay = () => {
        const audio = audioRef.current;

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
            <div className='prev' title='上一首'><StepBackwardOutlined /></div>
            <div className='play-or-pause' onClick={togglePlay} title='播放/暂停'>
                {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
            </div>
            <div className='next' title='下一首'><StepForwardOutlined /></div>
        </div>
    );
});

export default ControlButton;
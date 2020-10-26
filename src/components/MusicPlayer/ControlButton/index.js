import React, { memo } from 'react';
import './index.scss';
import { StepBackwardOutlined, CaretRightOutlined, PauseOutlined, StepForwardOutlined } from '@ant-design/icons';

const ControlButton = memo(({ isPlaying, setPlaying, audioRef, playMode, playlist, playingIndex, setPlayingIndex }) => {
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

    //上一首
    const handlePrevious = () => {
        if (playMode === 'list-loop') {  //列表循环
            setPlayingIndex((playlist.length + playingIndex - 1) % playlist.length);
        } else {  //随机
            setPlayingIndex(parseInt(Math.random() * playlist.length));
        }
    }

    //下一首
    const handleNext = () => {
        if (playMode === 'list-loop') {  //列表循环
            setPlayingIndex((playingIndex + 1) % playlist.length);
        } else {  //随机
            setPlayingIndex(parseInt(Math.random() * playlist.length));
        }
    }

    return (
        <div className='control-button-container'>
            <div className='prev' title='上一首' onClick={handlePrevious}><StepBackwardOutlined /></div>
            <div className='play-or-pause' onClick={togglePlay} title='播放/暂停'>
                {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
            </div>
            <div className='next' title='下一首' onClick={handleNext}><StepForwardOutlined /></div>
        </div>
    );
});

export default ControlButton;
import React, { memo } from 'react';
import './index.scss';
import { StepBackwardOutlined, CaretRightOutlined, PauseOutlined, StepForwardOutlined } from '@ant-design/icons';

const ControlButton = memo(({ isPlaying, setPlaying, audioRef, playMode, playlist, playingMusic, setPlayingMusic }) => {
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


    const handleChangeMusic = (type = 'next') => {
        const len = playlist.length;
        const audio = audioRef.current;
        if (len === 1 || playMode === 'single-cycle') {  //列表只有一首歌 || 单曲循环，设置播放位置为0
            audio.currentTime = 0;
            return;
        }

        //当前播放音乐对应的下标
        const currentIndex = playlist.findIndex(({ id }) => id === playingMusic.id) ?? -1;

        let nextIndex = null;

        if (playMode === 'list-loop') {  //列表循环
            nextIndex = type === 'next' ? (currentIndex + 1) % len : (len + currentIndex - 1) % len;
        } else {  //随机
            nextIndex = parseInt(Math.random() * len);
            if (nextIndex === currentIndex) {  //随机的下标与当前播放音乐下标相同，设置播放位置为0
                audio.currentTime = 0;
                return;
            }
        }

        setPlayingMusic(playlist[nextIndex]);
    }

    return (
        <div className='control-button-container'>
            <div className='prev' title='上一首' onClick={() => handleChangeMusic('prev')}><StepBackwardOutlined /></div>
            <div className='play-or-pause' onClick={togglePlay} title='播放/暂停'>
                {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
            </div>
            <div className='next' title='下一首' onClick={() => handleChangeMusic('next')}><StepForwardOutlined /></div>
        </div>
    );
});

export default ControlButton;
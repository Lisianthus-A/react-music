import React, { memo } from 'react';
import style from './index.module.scss';
import { StepBackwardOutlined, CaretRightOutlined, PauseOutlined, StepForwardOutlined } from '@ant-design/icons';

const ControlButton = memo(({ isPlaying, playMode, playlist, playingMusic, setPlaying, setPlayingMusic, audio }) => {

    //切换音乐
    const handleChangeMusic = (type = 'next') => {
        const len = playlist.length;
        if (len <= 1 || playMode === 'single-cycle') {  //列表只有一首歌 || 单曲循环，设置播放位置为 0
            audio.currentTime = 0;
            return;
        }

        //当前播放音乐对应的下标
        const currentIndex = playlist.findIndex(({ id }) => id === playingMusic.id);

        //根据播放模式决定下一首歌曲
        let nextIndex;
        switch (playMode) {
            case 'list-loop': //列表循环
                nextIndex = type === 'next' 
                    ? (currentIndex + 1) % len  //下一首
                    : (len + currentIndex - 1) % len; //上一首
                break;
            case 'random':  //随机
                nextIndex = Math.random() * len >> 0;
                if (nextIndex === currentIndex) {  //随机的歌曲与当前歌曲相同，则选取下一首歌曲
                    nextIndex = (currentIndex + 1) % len;
                }
                break;
        }

        setPlayingMusic(playlist[nextIndex]);
    }

    return (
        <div className={style.container}>
            <div className={style.prev} title='上一首' onClick={() => handleChangeMusic('prev')}><StepBackwardOutlined /></div>
            <div className={style['play-or-pause']} onClick={() => setPlaying(!isPlaying)} title='播放/暂停'>
                {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
            </div>
            <div className={style.next} title='下一首' onClick={() => handleChangeMusic('next')}><StepForwardOutlined /></div>
        </div>
    );
});

export default ControlButton;
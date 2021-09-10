import React, { memo, useContext } from 'react';
import style from './index.module.scss';
import {
    StepBackwardOutlined,
    CaretRightOutlined,
    PauseOutlined,
    StepForwardOutlined
} from '@ant-design/icons';
import { StateContext, FuncContext } from 'AppContainer/index';

function ControlButton() {
    const { getSong, playSong, pauseSong } = useContext(FuncContext);
    const { state } = useContext(StateContext);
    const { isPlaying, playingItem } = state;

    // 切换歌曲
    const handleChangeMusic = (type: 'next' | 'prev') => {
        const song = getSong(type, state);
        playSong(song);
    }

    // 暂停或恢复播放
    const handlePlayOrPause = () => {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong(playingItem);
        }
    }

    return (
        <div className={style.container}>
            <div className="prev" title='上一首' onClick={() => handleChangeMusic('prev')}>
                <StepBackwardOutlined />
            </div>
            <div className="play-or-pause" onClick={handlePlayOrPause} title='播放/暂停'>
                {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
            </div>
            <div className="next" title='下一首' onClick={() => handleChangeMusic('next')}>
                <StepForwardOutlined />
            </div>
        </div>
    );
}

export default memo(ControlButton);
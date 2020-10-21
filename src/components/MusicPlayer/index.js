import React, { forwardRef } from 'react';
import './index.scss';
import { useSetState } from 'Utils/hooks';

import SongInformation from './SongInformation';
import ControlButton from './ControlButton';
import OtherButton from './OtherButton';
import ProgressBar from './ProgressBar';

const testSrc = 'https://music.163.com/song/media/outer/url?id=776039';

const initialState = {
    isPlaying: false,  //是否正在播放
    duration: 0,  //总时长
    currentTime: 0  //当前播放位置
};

const MusicPlayer = forwardRef((props, audioRef) => {

    const [state, setState] = useSetState(initialState);

    //设置播放状态
    const setPlaying = (isPlaying) => {
        setState({ isPlaying });
    }

    //设置总时长
    const setDuration = (duration) => {
        setState({ duration });
    }

    //设置当前播放位置
    const setTime = (currentTime) => {
        setState({ currentTime })
    }

    //播放位置更新触发事件
    const handleTimeUpdate = (e) => {
        setTime(e.target.currentTime);
    }

    return (
        <div className='music-player'>
            <audio
                ref={audioRef}
                style={{ display: 'none' }}
                src={testSrc}
                onEnded={() => setPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
            />
            <SongInformation
                current={state.currentTime}
                duration={state.duration}
            />
            <ControlButton
                audioRef={audioRef}
                isPlaying={state.isPlaying}
                setPlaying={setPlaying}
                setDuration={setDuration}
            />
            <OtherButton
                audioRef={audioRef}
            />
            <ProgressBar
                audioRef={audioRef}
                progress={state.currentTime / state.duration * 10000}
                duration={state.duration}
                setTime={setTime}
            />
        </div>
    );
});

export default MusicPlayer;
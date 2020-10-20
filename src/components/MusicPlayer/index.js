import React, { useReducer, forwardRef } from 'react';
import './index.scss';
import SongInformation from './SongInformation';
import ControlButton from './ControlButton';
import OtherButton from './OtherButton';
import ProgressBar from './ProgressBar';
import { useInterval } from '../../utils/hooks';
import { reducer, initialState } from './reducer';

const testSrc = 'https://music.163.com/song/media/outer/url?id=776039';

const MusicPlayer = forwardRef((props, audioRef) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    //设置播放状态
    const setPlaying = (payload) => {
        dispatch({ type: 'setPlaying', payload });
    }

    //设置总时长
    const setDuration = (payload) => {
        dispatch({ type: 'setDuration', payload });
    }

    //设置当前播放位置
    const setTime = (payload) => {
        dispatch({ type: 'setTime', payload })
    }

    //设置音量
    const setVolume = (payload) => {
        audioRef.current.volume = payload;
        dispatch({ type: 'setVolume', payload });
    }

    //通过定时器不断更新当前播放位置
    useInterval(() => {
        setTime(audioRef.current.currentTime);
    }, 200);

    return (
        <div className='music-player'>
            <audio ref={audioRef} style={{ display: 'none' }} src={testSrc} onEnded={() => setPlaying(false)} />
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
                setVolume={setVolume}
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
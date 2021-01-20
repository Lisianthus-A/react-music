import React, { memo, useContext } from 'react';
import style from './index.module.scss';
import { globalMethods, DataContext, TimeContext } from 'AppContainer';
import { convertTime } from 'Utils';

import SongInformation from './SongInformation';
import ControlButton from './ControlButton';
import OtherButton from './OtherButton';
import ProgressBar from './ProgressBar';

const MusicPlayer = memo(() => {

    const {
        isPlaying,  //是否播放中
        playMode,  //播放模式
        playlist,  //播放列表
        playingMusic,  //当前播放音乐
        playingMusic: { id, name, cover, singers, duration },
    } = useContext(DataContext);
    const currentTime = useContext(TimeContext);  //当前播放时间（秒数）
    const convertedTime = convertTime(currentTime);  //当前播放时间，形如 00:00 的字符串
    const convertedDuration = convertTime(duration);  //总时长，形如 00:00 的字符串

    const { setPlaying, setPlayingMusic, setPlayMode, setPlaylist, audioRef } = globalMethods;

    return (
        <div className={style['music-player']}>
            <SongInformation  {...{ id, name, cover, singers, convertedTime, convertedDuration }} />
            <ControlButton {...{ isPlaying, playMode, playlist, playingMusic, setPlaying, setPlayingMusic, audioRef }} />
            <OtherButton {...{ id, playMode, playlist, playingMusic, setPlaying, setPlayingMusic, setPlayMode, setPlaylist, audioRef }} />
            <ProgressBar {...{ currentTime, duration, audioRef }} />
        </div>
    );
});

export default MusicPlayer;
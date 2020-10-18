import React, { useRef, useState } from 'react';
import './index.scss';
import SongInformation from './SongInformation';
import ControlButton from './ControlButton';
import OtherButton from './OtherButton';
import { useInterval } from '../../utils/hooks';

const testSrc = 'https://music.163.com/song/media/outer/url?id=151985';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    const [playing, setPlaying] = useState(false);  //是否正在播放
    const [duration, setDuration] = useState(0);  //总时长
    const [currentTime, setTime] = useState(0);  //当前播放位置

    //读取当前播放位置
    useInterval(() => {
        setTime(audioRef.current.currentTime);
    }, 500);

    return (
        <div className='music-player'>
            <audio ref={audioRef} style={{ display: 'none' }} src={testSrc} onEnded={() => setPlaying(false)} />
            <SongInformation
                current={currentTime}
                duration={duration}
            />
            <ControlButton
                playing={playing}
                setPlaying={setPlaying}
                audioRef={audioRef}
                setDuration={setDuration}
            />
            <OtherButton />
        </div>
    );
}

export default MusicPlayer;
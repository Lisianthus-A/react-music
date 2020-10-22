import React from 'react';
import './index.scss';
import SongInformation from './SongInformation';
import ControlButton from './ControlButton';
import OtherButton from './OtherButton';
import ProgressBar from './ProgressBar';

const MusicPlayer = ({ audioRef, current, duration, isPlaying, setPlaying, setTime }) => {
    return (
        <div className='music-player'>
            <SongInformation
                current={current}
                duration={duration}
            />
            <ControlButton
                audioRef={audioRef}
                isPlaying={isPlaying}
                setPlaying={setPlaying}
            />
            <OtherButton
                audioRef={audioRef}
            />
            <ProgressBar
                audioRef={audioRef}
                progress={current / duration * 10000}
                duration={duration}
                setTime={setTime}
            />
        </div>
    );
};

export default MusicPlayer;
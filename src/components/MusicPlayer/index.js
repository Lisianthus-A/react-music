import React from 'react';
import './index.scss';
import SongInformation from './SongInformation';
import ControlButton from './ControlButton';
import OtherButton from './OtherButton';
import ProgressBar from './ProgressBar';

const MusicPlayer = ({ audioRef, current, isPlaying, setPlaying, setTime, playlist, playingIndex, playMode, setPlayMode, setPlayingIndex }) => {
    const { title, singer, cover, duration } = playlist[playingIndex];

    return (
        <div className='music-player'>
            <SongInformation
                current={current}
                duration={duration}
                title={title}
                singer={singer}
                cover={cover}
            />
            <ControlButton
                audioRef={audioRef}
                isPlaying={isPlaying}
                playlist={playlist}
                playingIndex={playingIndex}
                playMode={playMode}
                setPlaying={setPlaying}
                setPlayingIndex={setPlayingIndex}
            />
            <OtherButton
                audioRef={audioRef}
                playlist={playlist}
                playingIndex={playingIndex}
                playMode={playMode}
                setPlayMode={setPlayMode}
            />
            <ProgressBar
                audioRef={audioRef}
                // progress={current / duration * 10000}
                current={current}
                duration={duration}
                setTime={setTime}
            />
        </div>
    );
};

export default MusicPlayer;
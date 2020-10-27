import React from 'react';
import './index.scss';
import SongInformation from './SongInformation';
import ControlButton from './ControlButton';
import OtherButton from './OtherButton';
import ProgressBar from './ProgressBar';

const MusicPlayer = ({ audioRef, current, isPlaying, setPlaying, setTime, playlist, playingMusic, playMode, setPlayMode, setPlayingMusic, setPlaylist }) => {
    const { id, title, singer, cover, duration } = playingMusic;

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
                playingMusic={playingMusic}
                playMode={playMode}
                setPlaying={setPlaying}
                setPlayingMusic={setPlayingMusic}
            />
            <OtherButton
                audioRef={audioRef}
                playlist={playlist}
                playingMusic={playingMusic}
                playMode={playMode}
                setPlayMode={setPlayMode}
                setPlaylist={setPlaylist}
                setPlayingMusic={setPlayingMusic}
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
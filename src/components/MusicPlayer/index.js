import React from 'react';
import './index.scss';
import SongInformation from './SongInformation';
import ControlButton from './ControlButton';
import OtherButton from './OtherButton';
import ProgressBar from './ProgressBar';

const MusicPlayer = ({ audioRef, current, isPlaying, setPlaying, playlist, playingMusic, playMode, setPlayMode, setPlayingMusic, setPlaylist }) => {
    const { id, title, singer, cover, duration } = playingMusic;

    return (
        <div className='music-player'>
            <SongInformation
                current={current}
                duration={duration}
                title={title}
                singer={singer}
                cover={cover}
                id={id}
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
                id={id}
                setPlayMode={setPlayMode}
                setPlaylist={setPlaylist}
                setPlayingMusic={setPlayingMusic}
                setPlaying={setPlaying}
            />
            <ProgressBar
                audioRef={audioRef}
                current={current}
                duration={duration}
            />
        </div>
    );
};

export default MusicPlayer;
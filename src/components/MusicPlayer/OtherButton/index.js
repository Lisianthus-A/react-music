import React, { memo } from 'react';
import './index.scss';
import Playlist from './Playlist';
import PlayMode from './PlayMode';
import Volume from './Volume';


const OtherButton = memo(({ audioRef, playlist, playingMusic, playMode, setPlayMode, setPlaylist, setPlayingMusic, setPlaying, id }) => {

    return (
        <div className='other-button'>
            <Playlist
                id={id}
                audioRef={audioRef}
                playlist={playlist}
                playingMusic={playingMusic}
                setPlaylist={setPlaylist}
                setPlaying={setPlaying}
                setPlayingMusic={setPlayingMusic}
            />
            <PlayMode
                playMode={playMode}
                setPlayMode={setPlayMode}
            />
            <Volume
                audioRef={audioRef}
            />
        </div>
    );
});

export default OtherButton;
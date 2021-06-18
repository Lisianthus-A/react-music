import React, { memo } from 'react';
import style from './index.module.scss';
import Playlist from './Playlist';
import PlayMode from './PlayMode';
import Volume from './Volume';

const OtherButton = memo(({ id, playMode, playlist, playingMusic, setPlaying, setPlayingMusic, setPlayMode, setPlaylist, audioRef }) => (
    <div className={style['other-button']}>
        <Playlist {...{ id, playlist, playingMusic, audioRef, setPlaylist, setPlaying, setPlayingMusic }} />
        <PlayMode {...{ playMode, setPlayMode }} />
        <Volume audioRef={audioRef} />
    </div>
));

export default OtherButton;
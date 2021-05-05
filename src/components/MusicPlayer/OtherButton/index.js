import React, { memo } from 'react';
import style from './index.module.scss';
import Playlist from './Playlist';
import PlayMode from './PlayMode';
import Volume from './Volume';

const OtherButton = memo(({ id, playMode, playlist, playingMusic, setPlaying, setPlayingMusic, setPlayMode, setPlaylist, audio }) => (
    <div className={style['other-button']}>
        <Playlist {...{ id, playlist, playingMusic, audio, setPlaylist, setPlaying, setPlayingMusic }} />
        <PlayMode {...{ playMode, setPlayMode }} />
        <Volume audio={audio} />
    </div>
));

export default OtherButton;
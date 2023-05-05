import style from './index.module.scss';
import Playlist from './Playlist';
import PlayMode from './PlayMode';
import Volume from './Volume';

import type { State } from '@/containers';

interface Props {
    isPlaying: boolean;
    playingItem: State['playingItem'];
    playlist: State['playlist'];
    playMode: State['playMode'];
    currentTime: number;
}

function OtherButton({ isPlaying, playingItem, playlist, playMode, currentTime }: Props) {
    return (
        <div className={style['other-button']}>
            <Playlist
                isPlaying={isPlaying}
                playingItem={playingItem}
                playlist={playlist}
                currentTime={currentTime}
            />
            <PlayMode playMode={playMode} />
            <Volume />
        </div>
    );
}

export default OtherButton;
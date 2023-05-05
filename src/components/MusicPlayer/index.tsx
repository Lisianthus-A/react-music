import { memo, useContext, useState } from 'react';
import style from './index.module.scss';
import { StateContext } from '@/containers';
import { useInterval } from '@/utils/hooks';
import music from '@/utils/music';

import SongInformation from './SongInformation';
import ControlButton from './ControlButton';
import OtherButton from './OtherButton';
import ProgressBar from './ProgressBar';

function MusicPlayer() {

    const state = useContext(StateContext);
    const [currentTime, setCurrentTime] = useState(0);
    const { isPlaying, playMode, playlist, playingItem } = state;

    // 每 300 ms 更新一次当前播放时间
    useInterval(() => {
        const time = music().getCurrentTime();
        setCurrentTime(time);
    }, 300);

    return (
        <div className={style['music-player']}>
            <SongInformation
                playingItem={playingItem}
                currentTime={currentTime}
            />
            <ControlButton />
            <OtherButton
                isPlaying={isPlaying}
                playingItem={playingItem}
                playlist={playlist}
                playMode={playMode}
                currentTime={currentTime}
            />
            <ProgressBar
                playingItem={playingItem}
                currentTime={currentTime}
                setCurrentTime={setCurrentTime}
            />
        </div>
    );
}

export default memo(MusicPlayer);
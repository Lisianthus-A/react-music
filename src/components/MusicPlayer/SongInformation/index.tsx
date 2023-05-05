import { useMemo } from 'react';
import style from './index.module.scss';
import { Link } from 'react-router-dom';
import { convertTime } from '@/utils';

import type { State } from '@/containers';

interface Props {
    playingItem: State['playingItem'];
    currentTime: number;
}

function SongInformation({ playingItem, currentTime }: Props) {
    const { id, name, cover, singers, duration, } = playingItem;

    // 歌手
    const singer = useMemo(() =>
        singers.map(({ name }) => name).join('/'),
        [singers]
    );

    // 转换后的当前时间和总时长
    const time = `${convertTime(currentTime)} / ${convertTime(duration)}`;

    return (
        <div className={style.container}>
            <img src={`${cover}?param=50y50`} />
            <div className="information">
                <div className="song">
                    <Link to={`/Song?id=${id}`}>{name}</Link>
                    &nbsp;-&nbsp;
                    <span className="singer" title={singer}>{singer}</span>
                </div>
                <div className="time">
                    {time}
                </div>
            </div>
        </div>
    );
};

export default SongInformation;
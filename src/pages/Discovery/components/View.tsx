import style from './View.module.scss';
import { Loading } from '@/components';
import Carousel from './Carousel';
import RecommentPlaylist from './RecommentPlaylist';
import RecentSonglist from './RecentSonglist';

import type { PageState } from '../index';

interface Props {
    pageState: PageState | null;
    onPlayAll: (id: number) => Promise<void>;
}

function View({ pageState, onPlayAll }: Props) {
    if (!pageState) {
        return <Loading />;
    }

    const { banner, recommendPlaylist, recentSong } = pageState;

    return (
        <div className={style.discovery}>
            <div className="banner">
                <Carousel data={banner} />
            </div>
            <div>
                <div className="title">推荐歌单</div>
                <RecommentPlaylist data={recommendPlaylist} onPlayAll={onPlayAll} />
            </div>
            <div>
                <div className="title">最新音乐</div>
                <RecentSonglist data={recentSong} />
            </div>
        </div>
    );
}

export default View;
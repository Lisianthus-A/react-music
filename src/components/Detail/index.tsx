
import style from './index.module.scss';
import PlaylistDetail from './PlaylistDetail';
import AlbumDetail from './AlbumDetail';
import SongDetail from './SongDetail';

import type { SongItem } from '@/containers';

interface Props {
    data: {
        detail: any;
        songIds?: number[];
        songList?: SongItem[];
        lyric?: any;
    }
}

function Detail({ data }: Props) {
    const { detail, songList, songIds, lyric } = data;
    const { isPlaylist, isAlbum, isSong } = detail;

    return (
        <div className={style.detail}>
            {isPlaylist &&
                <PlaylistDetail detailData={detail} songList={songList} songIds={songIds} />
            }
            {isAlbum &&
                // @ts-ignore
                <AlbumDetail detailData={detail} songList={songList} />
            }
            {isSong &&
                // @ts-ignore
                <SongDetail detailData={detail} songData={songList[0]} lyric={lyric} />
            }
        </div >
    )
}

export default Detail;
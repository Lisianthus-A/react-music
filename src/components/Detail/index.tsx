import React from 'react';
import style from './index.module.scss';
import PlaylistDetail from './PlaylistDetail';
import AlbumDetail from './AlbumDetail';
import SongDetail from './SongDetail';

import type { SongItem } from 'AppContainer/index';

interface Props {
    data: {
        detail: any;
        songList?: SongItem[];
        lyric?: any;
    }
}

function Detail({ data }: Props) {
    const { detail, songList, lyric } = data;
    const { isPlaylist, isAlbum, isSong } = detail;

    return (
        <div className={style.detail}>
            {isPlaylist &&
                <PlaylistDetail detailData={detail} songList={songList} />
            }
            {isAlbum &&
                <AlbumDetail detailData={detail} />
            }
            {isSong &&
                <SongDetail detailData={detail} songData={songList[0]} lyric={lyric} />
            }
        </div >
    )
}

export default Detail;
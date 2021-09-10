import React from 'react';
import style from './index.module.scss';
import PlaylistDetail from './PlaylistDetail';
import AlbumDetail from './AlbumDetail';
import SongDetail from './SongDetail';

interface Props {
    data: {
        detail: any;
        songList?: any[];
        lyric?: any;
    }
}

function Detail({ data }: Props) {
    const { detail, songList, lyric } = data;
    const { isPlaylist, isAlbum, isSong } = detail;
    // 分类
    // const category = isSonglist ? '歌单' : isAlbum ? '专辑' : '单曲';S
    // const { isFree, name, id } = songs[0];  //单曲是否免费 单曲名称 id

    /* 专辑和歌单调用的方法 */
    //播放所有歌曲
    // const handlePlayAll = () => {
    //     const list = songs.filter(({ isFree }) => isFree);  //过滤VIP歌曲
    //     setPlaylist(list);
    // }

    /* 单曲调用的方法 */
    //播放歌曲
    // const handlePlay = () => {
    //     setPlaylist(songs);
    // }

    //收藏到歌单
    // const handleCollectSong = () => {
    //     collectSong(id);
    // }

    //下载
    // const handleDownload = () => {
    //     downloadMusic(name, id);
    // }

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
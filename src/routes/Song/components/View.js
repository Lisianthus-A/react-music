import React, { useEffect, useState, memo } from 'react';
import './View.scss';
import { searchItem, convertLyric } from 'Utils';
import { useLocation } from 'react-router-dom';
import SongInfo from './SongInfo';
import CommentList from './CommentList';
import { songDetail, lyric, commentMusic } from 'Apis/apiSong.js';
import Loading from 'Components/Loading';

const Song = memo(({ setPlaylist }) => {
    const { search } = useLocation();
    const id = searchItem(search, 'id');

    if (!id) {
        return <div>歌曲id错误</div>;
    }

    const [state, setState] = useState(null);

    useEffect(() => {
        const getData = async () => {

            const lyricData = await lyric(id);  //歌词
            const commentData = await commentMusic(id);  //评论
            const song = await songDetail([id]).then(result =>   //歌曲详情
                result.songs.map(({ id, name, ar, fee, dt, al: { picUrl, id: albumId, name: album } }) => ({
                    id,
                    albumId,
                    album,
                    title: name,
                    singer: ar.map(({ name }) => name).join('/'),
                    duration: dt / 1000,
                    cover: picUrl,
                    singerId: ar[0].id,
                    fee: fee === 1
                }))
            );

            let lrc = null;
            if (!lyricData.uncollected && !lyricData.nolyric) {
                lrc = convertLyric(lyricData);
            }

            console.log('Song State', { lyric: lrc, comment: commentData, song });
            setState({ lyric: lrc, comment: commentData, song });
        }

        getData();
    },
        []
    );

    if (!state) {
        return <Loading />;
    }

    return (
        <div className='song-view'>
            <SongInfo song={state.song[0]} lyric={state.lyric} setPlaylist={setPlaylist} />
            <CommentList data={state.comment} />
        </div>
    );
});

export default Song;
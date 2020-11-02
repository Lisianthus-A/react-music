import React, { useEffect, memo, useState } from 'react';
import './View.scss';
import { useLocation } from 'react-router-dom';
import { playlistDetail, commentPlaylist, songDetail } from 'Apis/apiSongList';
import { searchItem } from 'Utils';
import ListInfo from './ListInfo';
import Songs from './Songs';
import CommentList from './CommentList';
import Loading from 'Components/Loading';

const SongList = memo(({ playlist, setPlaylist }) => {
    const { search } = useLocation();
    const id = searchItem(search, 'id');
    if (!id) {
        return (
            <div>id错误</div>
        );
    }

    const [state, setState] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const detail = await playlistDetail(id);  //歌单详情
            const comment = await commentPlaylist(id);  //评论
            const ids = detail.playlist.trackIds.map(({ id }) => id);  //歌单所有歌曲id
            const songs = await songDetail(ids).then(result =>   //所有歌曲详情
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
            setState({ detail, comment, songs });
            console.log('SongList State', { detail, comment, songs });
        }
        getData();
    },
        []
    );
    if (!state) {
        return <Loading />;
    }

    return (
        <div className='songlist'>
            <ListInfo data={state.detail} songs={state.songs} setPlaylist={setPlaylist} />
            <Songs data={state.songs} playlist={playlist} setPlaylist={setPlaylist} />
            <CommentList data={state.comment} />
        </div>
    );
});

export default SongList;
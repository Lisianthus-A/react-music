import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchItem } from 'Utils';
import { resolveSongs, resolveDetail } from 'Utils/resolve';
import { playlistDetail, commentPlaylist, songDetail } from 'Apis/apiSongList';
import SongListView from './components/View';

export default () => {
    const { search } = useLocation();
    const id = searchItem(search, 'id');
    if (!id) {
        return <div>id错误</div>;
    }

    const [state, setState] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const detailRes = await playlistDetail(id);
            const ids = detailRes.playlist.trackIds.map(({ id }) => id);  //歌单所有歌曲id

            const detail = resolveDetail(detailRes);  //歌单详情
            const songs = await songDetail(ids).then(res => resolveSongs(res.songs));  //歌曲列表
            const comment = await commentPlaylist(id);  //评论

            setState({ detail, songs, comment });
        }

        setState(null);
        getData();
    }, [id]);

    return (
        <SongListView state={state} />
    );
}
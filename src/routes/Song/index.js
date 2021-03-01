import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { songComment, songDetail, getLyric } from 'Apis/song';
import { searchItem } from 'Utils';
import { resolveLyric, resolveDetail, resolveSongs } from 'Utils/resolve';
import SongView from './components/View';

export default () => {
    const { search } = useLocation();
    const id = searchItem(search, 'id');

    if (!id) {
        return <div>歌曲id错误</div>;
    }

    const [state, setState] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const detailRes = await songDetail([id]);

            const songs = resolveSongs(detailRes.songs);  //歌曲
            const detail = resolveDetail(detailRes);  //歌曲详情
            const lyric = await getLyric(id).then(resolveLyric);  //歌词
            const comment = await songComment(id);  //评论

            setState({ detail, songs, lyric, comment });
        }

        setState(null);
        getData();
    }, [id]);

    return (
        <SongView state={state} />
    );
}
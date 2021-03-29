import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { album, commentAlbum } from 'Apis/album';
import { searchItem } from 'Utils';
import { resolveSongs, resolveDetail } from 'Utils/resolve';
import AlbumView from './components/View';

export default () => {
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
            const detailRes = await album(id);
            const songs = resolveSongs(detailRes.songs);  //歌曲列表
            const detail = resolveDetail(detailRes);  //专辑详情
            const comment = await commentAlbum(id);  //评论

            //改变标题
            document.title = detail.title;

            setState({ detail, comment, songs });
        }

        setState(null);
        getData();
    }, [id]);

    return (
        <AlbumView state={state} />
    );
}
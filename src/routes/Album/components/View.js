import React, { useEffect, memo, useState } from 'react';
import './View.scss';
import { useLocation } from 'react-router-dom';
import { album, commentAlbum } from 'Apis/apiAlbum';
import { searchItem } from 'Utils';
import AlbumInfo from './AlbumInfo';
import Songs from './Songs';
import CommentList from './CommentList';
import Loading from 'Components/Loading';

const Album = memo(({ playlist, setPlaylist }) => {
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
            const detail = await album(id);  //专辑详情
            const comment = await commentAlbum(id);  //评论
            const songs = detail.songs.map(({ id, name, ar, fee, dt, al: { picUrl, id: albumId, name: album } }) => ({  //歌曲详情
                id,
                albumId,
                album,
                title: name,
                singer: ar.map(({ name }) => name).join('/'),
                duration: dt / 1000,
                cover: picUrl,
                singerId: ar[0].id,
                fee: fee === 1
            }));
            setState({ detail, comment, songs });
            console.log('Album State', { detail, comment, songs });
        }
        getData();
    },
        []
    );

    if (!state) {
        return <Loading />;
    }

    return (
        <div className='album-list'>
            <AlbumInfo
                data={state.detail}
                songs={state.songs}
                setPlaylist={setPlaylist}
            />
            <Songs
                data={state.songs}
                playlist={playlist}
                setPlaylist={setPlaylist}
            />
            <CommentList
                data={state.comment}
            />
        </div>
    );
});

export default Album;
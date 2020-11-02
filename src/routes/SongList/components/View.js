import React, { useEffect, memo } from 'react';
import './View.scss';
import { useLocation } from 'react-router-dom';
import { playlistDetail, commentPlaylist } from 'Apis/apiSongList';
import { searchItem } from 'Utils';
import ListInfo from './ListInfo';
import Songs from './Songs';
import CommentList from './CommentList';

const SongList = memo(() => {
    // useEffect(() => {
    //     const getData = async () => {
    //         console.log(await playlistDetail(3024706955));
    //         console.log(await commentPlaylist(3136952023));
    //     }
    //     getData();
    // },
    //     []
    // );
    const { search } = useLocation();
    const id = searchItem(search, 'id');

    return (
        <div className='songlist'>
            <ListInfo />
            <Songs />
            <CommentList />
        </div>
    );
});

export default SongList;
import React, { useEffect, memo } from 'react';
import './View.scss';
import { useLocation } from 'react-router-dom';
import { playlistDetail } from 'Apis/apiSongList';
import { searchItem } from 'Utils';
import ListInfo from './ListInfo';
import List from './List';
import Comment from './Comment';

const SongList = memo(() => {
    // useEffect(() => {
    //     const getData = async () => {
    //         console.log(await playlistDetail(3024706955));
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
            <List />
            <Comment />
        </div>
    );
});

export default SongList;
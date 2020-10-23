import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { playlistDetail } from 'Apis/apiSongList';
import { searchItem } from 'Utils';

const SongList = () => {
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
            SongList Id={id}
        </div>
    );
}

export default SongList;
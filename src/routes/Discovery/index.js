import React, { useState, useEffect } from 'react';
import { globalMethods } from 'AppContainer';
import { banner, recommendSonglist, topSong } from 'Apis/discovery';
import { songDetail } from 'Apis/song';
import { songlistDetail } from 'Apis/songlist';
import { resolveSongs } from 'Utils/resolve';
import DiscoveryView from './components/View';

export default () => {
    const { setPlaylist } = globalMethods;
    const [state, setState] = useState(null);

    //播放歌曲
    const handleSongPlay = async (id) => {
        const songsRes = await songDetail([id]);
        setPlaylist(resolveSongs(songsRes.songs));
    }

    //播放歌单内所有歌曲
    const handleSonglistPlay = async (id) => {
        //获取歌单内所有歌曲的 id
        const songlistRes = await songlistDetail(id);

        const ids = songlistRes.playlist.trackIds.map(({ id }) => id);

        const songsRes = await songDetail(ids);
        setPlaylist(resolveSongs(songsRes.songs));
    }

    useEffect(() => {
        const getData = async () => {
            const bannerData = await banner();  //轮播图
            const recommendData = await recommendSonglist();  //推荐歌单
            const topSongData = await topSong();  //新歌速递

            setState({ bannerData, recommendData, topSongData: resolveSongs(topSongData.data.slice(0, 10), 2) });
        }

        getData();
    }, []);

    return (
        <DiscoveryView state={state} onSongPlay={handleSongPlay} onSonglistPlay={handleSonglistPlay} />
    );
}
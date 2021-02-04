import React, { useState, useEffect } from 'react';
import { globalMethods } from 'AppContainer';
import { banner, personalized, topSong, songDetail, playlistDetail } from 'Apis/apiDiscovery';
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
        //获取歌单内所有歌曲的id
        const playlistRes = await playlistDetail(id);

        const ids = playlistRes.playlist.trackIds.map(({ id }) => id);

        const songsRes = await songDetail(ids);
        setPlaylist(resolveSongs(songsRes.songs));
    }

    useEffect(() => {
        const getData = async () => {
            const bannerData = await banner();
            const recommendData = await personalized();
            const topSongData = await topSong();
            setState({ bannerData, recommendData, topSongData: resolveSongs(topSongData.data.slice(0, 10), 2) });
        }
        getData();
    }, []);

    return (
        <DiscoveryView state={state} onSongPlay={handleSongPlay} onSonglistPlay={handleSonglistPlay} />
    );
}
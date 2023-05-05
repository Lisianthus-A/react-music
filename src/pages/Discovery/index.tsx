import { useState, useEffect, useContext } from 'react';
import View from './components/View';
import { FuncContext } from '@/containers';
import { resolveSongs } from '@/utils/resolve';
import { banner, recommendPlaylist, topSong } from '@/apis/discovery';
import { songDetail } from '@/apis/song';
import { playlistDetail } from '@/apis/playlist';

import type { BannerRes, RecommendPlaylistRes } from '@/apis/discovery';
import type { SongItem } from '@/containers';

export interface PageState {
    // 轮播图
    banner: BannerRes['banners'];
    // 推荐歌单
    recommendPlaylist: RecommendPlaylistRes['result'];
    // 最新音乐
    recentSong: SongItem[];
}

function Discovery() {
    const [pageState, setPageState] = useState<PageState | null>(null);
    const { setPlaylist, playSong } = useContext(FuncContext);

    // 播放歌单内所有歌曲
    const handlePlayAll = async (id: number) => {
        const detailRes = await playlistDetail(id);
        // 歌单中所有歌曲的 id
        const songIds = detailRes.playlist.trackIds.map(item => item.id);
        const songRes = await songDetail(songIds);
        // 解析后的歌曲列表
        const songList = resolveSongs(songRes.songs, 'detail');
        // 过滤 VIP 歌曲
        const freeSongList = songList.filter(item => item.isFree);

        // 播放第一首歌曲
        setPlaylist(freeSongList);
        playSong(songList[0]);
    }

    // 改变标题
    useEffect(() => {
        document.title = "发现音乐";
    }, []);

    useEffect(() => {
        const getData = async () => {
            // 轮播图
            const bannerRes = await banner();
            // 推荐歌单
            const playlistRes = await recommendPlaylist();
            // 最新音乐
            const recentSongRes = await topSong();

            setPageState({
                banner: bannerRes.banners,
                recommendPlaylist: playlistRes.result,
                recentSong: resolveSongs(recentSongRes.data, 'topSong')
            });
        }

        getData();
    }, []);

    return (
        <View pageState={pageState} onPlayAll={handlePlayAll} />
    );
}


export default Discovery;
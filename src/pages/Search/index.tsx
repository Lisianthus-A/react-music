import { useEffect } from 'react';
import View from './components/View';
import { search } from '@/apis/search';
import { replaceHttpToHttps as rp } from '@/utils';
import { resolveSongs } from '@/utils/resolve';
import { useQuery, useSetState } from '@/utils/hooks';

import type {
    SearchSongRes,
    SearchAlbumRes,
    SearchSingerRes,
    SearchPlaylistRes
} from '@/apis/search';

type Type = 'song' | 'album' | 'singer' | 'playlist';

export interface PageState {
    currentPage: number;
    total: number;
    type: Type;
    loading: boolean;
    data: any[];
}

const initState: PageState = {
    currentPage: 1,
    total: 0,
    type: 'song',
    loading: true,
    data: []
};

// 类别对应的数字
const typeMap = {
    song: '1',
    album: '10',
    singer: '100',
    playlist: '1000'
}

function Search() {
    const keyword = useQuery('keyword');
    const [pageState, setPageState] = useSetState<PageState>(initState);

    // 获取搜索内容
    useEffect(() => {
        if (!keyword) {
            return;
        }

        const { currentPage, type } = pageState;
        setPageState({ loading: true });

        const getData = async () => {
            const offset = (currentPage - 1) * 30;
            const res = await search(keyword, typeMap[type], offset);
            let data: any[] = [];
            let total: number = 0;
            if (type === 'song') {
                data = resolveSongs((res as SearchSongRes).result.songs, 'search');
                total = (res as SearchSongRes).result.songCount;
            } else if (type === 'album') {
                data = (res as SearchAlbumRes).result.albums.map(item => {
                    const { id, name, artists } = item;
                    const picUrl = rp(item.picUrl);
                    const singer = artists.map(({ id, name }) => ({ id, name }));
                    return { id, name, picUrl, singer };
                });
                total = (res as SearchAlbumRes).result.albumCount;
            } else if (type === 'singer') {
                data = (res as SearchSingerRes).result.artists.map(item => {
                    const { id, name } = item;
                    const picUrl = rp(item.picUrl);
                    return { id, name, picUrl };
                });
                total = (res as SearchSingerRes).result.artistCount;
            } else if (type === 'playlist') {
                data = (res as SearchPlaylistRes).result.playlists.map(item => {
                    const { id, name, description } = item;
                    const picUrl = rp(item.coverImgUrl);
                    return { id, name, picUrl, description };
                });
                total = (res as SearchPlaylistRes).result.playlistCount;
            }

            setPageState({
                loading: false,
                total,
                data
            });
        }

        getData();
    }, [keyword, pageState.currentPage, pageState.type]);

    if (!keyword) {
        return <div>请输入搜索内容</div>;
    }

    return (
        <View pageState={pageState} setPageState={setPageState} />
    );
}

export default Search;
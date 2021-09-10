import React, { useEffect, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router';
import { useSetState } from 'Utils/hooks';
import music from 'Utils/music';
import routes from '../routes';
import Layout from 'Components/Layout';
// 全局引入 antd css
import 'antd/dist/antd.min.css';

import type { MusicItem } from 'Utils/music';

export type SongItem = Omit<MusicItem['info'], 'lyric'>;

interface PlayingItem extends SongItem {
    lyric: null | [string, string, number][];
}

export interface State {
    // 是否正在播放
    isPlaying: boolean;
    // 播放列表
    playlist: SongItem[];
    // 播放模式
    playMode: 'list-loop' | 'random' | 'single-cycle';
    // 正在播放的歌曲
    playingItem: PlayingItem;
}

export type SetState = (patch: Partial<State> | ((prevState: State) => Partial<State>)) => void;

// 初始歌曲
const initSong = {
    id: 776039,
    name: 'ONE\'s hope',
    singers: [{ id: 18303, name: 'やなぎなぎ' }],
    duration: 369.72,
    cover: 'https://p1.music.126.net/l22TRH7bs4VG6HMT2Iy56w==/2511284557902801.jpg',
    isFree: true,
    albumId: 76484,
    albumName: 'Colorful Parade'
};

const initialState: State = {
    isPlaying: false,
    playlist: [initSong],
    playMode: 'list-loop',
    playingItem: {
        ...initSong,
        lyric: null
    }
}

interface StateCtx {
    state: State;
    setState: SetState;
}

interface FuncCtx {
    getSong: (type: 'prev' | 'next', state: State) => SongItem | PlayingItem;
    playSong: (item: SongItem | PlayingItem, offset?: number) => void;
    pauseSong: () => void;
    setPlaylist: (list: SongItem[]) => void;
    setPlayMode: (mode: State['playMode']) => void;
}

// 是否播放中、播放列表、播放模式、当前播放音乐
export const StateContext = React.createContext<StateCtx>(null);
// 封装好的一些用于改变 state 的函数
export const FuncContext = React.createContext<FuncCtx>(null);

function AppContainer() {
    const { pathname } = useLocation();
    const history = useHistory();
    const [state, setState] = useSetState<State>(initialState);

    // 访问路径不在路由列表中，跳转到发现页面
    if (!routes.includes(pathname)) {
        history.replace('/Discovery');
    }

    // 目标路由的组件
    const TargetComponent = useMemo(() =>
        React.lazy(() => import(`../routes${pathname}`)),
        [pathname]
    );

    const globalFunc = useMemo(() => {
        // 根据播放模式获取上一首 / 下一首歌曲
        const getSong = (type: 'prev' | 'next', state: State): SongItem => {
            const { playlist, playingItem, playMode } = state;
            const len = playlist.length;
            // 列表只有一首歌 || 播放模式为单曲循环
            // 返回当前歌曲
            if (len <= 1 || playMode === 'single-cycle') {
                // @ts-ignore
                return playingItem;
            }

            // 当前播放歌曲的下标
            const currentIndex = playlist.findIndex(({ id }) => id === playingItem.id);

            // 根据播放模式决定下一首歌曲
            let nextIndex: number;
            switch (playMode) {
                // 列表循环
                case 'list-loop':
                    nextIndex = type === 'next'
                        // 下一首
                        ? (currentIndex + 1) % len
                        // 上一首
                        : (len + currentIndex - 1) % len;
                    break;
                // 随机
                case 'random':
                    nextIndex = Math.random() * len >> 0;
                    // 随机的歌曲与当前歌曲相同，则选取下一首歌曲
                    if (nextIndex === currentIndex) {
                        nextIndex = (currentIndex + 1) % len;
                    }
            }
            return playlist[nextIndex];
        };

        // 播放歌曲
        const playSong = (item: SongItem | PlayingItem, offset: number = 0) => {
            const { id } = item;
            setState({
                isPlaying: true,
                playingItem: {
                    ...item,
                    lyric: null
                }
            });
            music().play(id, offset).then(isDone => {
                isDone && setState({
                    playingItem: music().getPlayingItem()
                });
            });
        }

        // 暂停歌曲
        const pauseSong = () => {
            music().pause();
            setState({ isPlaying: false });
        }

        // 设置歌单列表
        const setPlaylist = (list: SongItem[]) => {
            setState({ playlist: list });
        }

        // 设置播放模式
        const setPlayMode = (mode: State['playMode']) => {
            setState({ playMode: mode });
        }

        return {
            getSong,
            playSong,
            pauseSong,
            setPlaylist,
            setPlayMode
        };
    }, []);

    // mediaSession MediaMetadata
    // useEffect(() => {
    //     if (!navigator.mediaSession || !MediaMetadata) {
    //         return;
    //     }

    //     if (!state.playingItem) {
    //         return;
    //     }

    //     const { name, singers, cover, albumName } = state.playingItem;
    //     navigator.mediaSession.metadata = new MediaMetadata({
    //         title: name,
    //         artist: singers.map(item => item.name).join('/'),
    //         album: albumName,
    //         artwork: [
    //             { src: `${cover}?param=96y96`, sizes: '96x96', type: 'image/jpeg' },
    //             { src: `${cover}?param=128y128`, sizes: '128x128', type: 'image/jpeg' },
    //             { src: `${cover}?param=192y192`, sizes: '192x192', type: 'image/jpeg' },
    //             { src: `${cover}?param=256y256`, sizes: '256x256', type: 'image/jpeg' },
    //             { src: `${cover}?param=384y384`, sizes: '384x384', type: 'image/jpeg' },
    //             { src: `${cover}?param=512y512`, sizes: '512x512', type: 'image/jpeg' },
    //         ]
    //     });

    // }, [state]);

    // mediaSession ActionHandler
    // useEffect(() => {
    //     if (!navigator.mediaSession || !MediaMetadata) {
    //         return;
    //     }
    //     navigator.mediaSession.setActionHandler('play', () => setPlaying(true));
    //     navigator.mediaSession.setActionHandler('pause', () => setPlaying(false));
    //     navigator.mediaSession.setActionHandler('stop', () => setPlaying(false));
    //     const handleChangeMusic = (type) => {
    //         const { playlist, playMode, playingItem } = state;
    //         const len = playlist.length;
    //         if (len <= 1 || playMode === 'single-cycle') {  //列表只有一首歌 || 单曲循环，设置播放位置为 0

    //             return;
    //         }

    //         //当前播放音乐对应的下标
    //         const currentIndex = playlist.findIndex(({ id }) => id === playingItem.id);

    //         //根据播放模式决定下一首歌曲
    //         let nextIndex;
    //         switch (playMode) {
    //             case 'list-loop': //列表循环
    //                 nextIndex = type === 'next'
    //                     ? (currentIndex + 1) % len  //下一首
    //                     : (len + currentIndex - 1) % len; //上一首
    //                 break;
    //             case 'random':  //随机
    //                 nextIndex = Math.random() * len >> 0;
    //                 if (nextIndex === currentIndex) {  //随机的歌曲与当前歌曲相同，则选取下一首歌曲
    //                     nextIndex = (currentIndex + 1) % len;
    //                 }
    //                 break;
    //         }

    //     }
    //     navigator.mediaSession.setActionHandler('previoustrack', () => handleChangeMusic('prev'));
    //     navigator.mediaSession.setActionHandler('nexttrack', () => handleChangeMusic('next'));
    // }, [state]);

    // 设置播放结束触发的回调函数
    useEffect(() => {
        music().setOnEnded(() => {
            const { getSong, playSong } = globalFunc;
            // 播放下一首歌曲
            const nextSong = getSong('next', state);
            playSong(nextSong);
        });
    }, [state]);

    return (
        <FuncContext.Provider value={globalFunc}>
            <StateContext.Provider value={{ state, setState }}>
                <Layout TargetComponent={TargetComponent} />
            </StateContext.Provider>
        </FuncContext.Provider>
    );
}

export default AppContainer;
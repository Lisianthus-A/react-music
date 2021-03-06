import React, { useCallback, useRef, useMemo, useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router';
import { replaceHttpToHttps as rp } from 'Utils/index';
import { useSetState } from 'Utils/hooks';
import routes from '../routes';
import Layout from 'Components/Layout';
import 'antd/dist/antd.min.css';  //全局引入antd css

const initialState = {
    isPlaying: false,  //是否正在播放
    playlist: [  //播放列表
        {
            id: 479764527,
            name: 'The Ray of Light',  //音乐名
            singers: [{ name: 'Vivienne', id: 191056 }],  //歌手
            duration: 222.98,  //总时长
            cover: 'https://p2.music.126.net/izNmlpS7ZO5-tQu6H-jHuw==/18950082904839814.jpg', //封面图片
            isFree: true,  //是否免费
            albumName: 'Increase Beat',  //专辑名
            albumId: 35498685  //专辑id
        }
    ],
    playMode: 'list-loop',  //播放模式  list-loop  random  single-cycle
    playingMusic: {
        id: 479764527,
        name: 'The Ray of Light',  //音乐名
        singers: [{ name: 'Vivienne', id: 191056 }],  //歌手
        duration: 222.98,  //总时长
        cover: 'https://p2.music.126.net/izNmlpS7ZO5-tQu6H-jHuw==/18950082904839814.jpg', //封面图片
        isFree: true,  //是否免费
        albumName: 'Increase Beat',  //专辑名
        albumId: 35498685  //专辑id
    }
};

export const DataContext = React.createContext();  //是否播放中、播放列表、播放模式、当前播放音乐等数据
export const TimeContext = React.createContext();  //音乐的播放时长经常更新，单独拿出来做 Context
export const globalMethods = {};  //改变 state 的方法和 audioRef

const AppContainer = () => {

    const { pathname } = useLocation();
    const history = useHistory();
    const [state, setState] = useSetState(initialState);
    const [time, setTime] = useState(0);

    const audioRef = useRef(null);
    globalMethods.audioRef = audioRef;

    if (!routes.includes(pathname)) {  //访问路径不在路由列表中
        history.replace('/Discovery');
    }

    //设置播放状态
    const setPlaying = useCallback((isPlaying) => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setState({ isPlaying });
    }, [audioRef]);
    globalMethods.setPlaying = setPlaying;

    //设置当前播放位置
    globalMethods.setTime = setTime;

    //设置播放列表  setMusic -> 是否改变当前播放歌曲
    const setPlaylist = useCallback((playlist, setMusic = true) => {
        const list = playlist.filter(item => item.isFree);  //过滤掉 VIP 音乐
        if (list[0] && setMusic) {  //改变当前播放歌曲
            setPlayingMusic(list[0]);
            setPlaying(true);
        }
        setState({ playlist: list });
    }, []);
    globalMethods.setPlaylist = setPlaylist;

    //设置当前播放的音乐
    const setPlayingMusic = useCallback((playingMusic) => {
        setState({ playingMusic });
    }, []);
    globalMethods.setPlayingMusic = setPlayingMusic;

    //设置播放模式
    const setPlayMode = useCallback((playMode) => {
        setState({ playMode });
    }, []);
    globalMethods.setPlayMode = setPlayMode;

    //播放位置更新触发事件
    const handleTimeUpdate = useCallback((e) => {
        setTime(e.target.currentTime);
    }, []);

    //播放结束触发事件
    const handleEnded = useCallback((e) => {
        const len = state.playlist.length;
        if (len <= 1 || state.playMode === 'single-cycle') {  //列表只有一首歌 || 播放模式为单曲循环
            e.target.play();
            return;
        }

        //当前播放歌曲的下标
        const currentIndex = state.playlist.findIndex(({ id }) => id === state.playingMusic.id);

        //根据播放模式决定下一首歌曲
        let nextIndex;
        switch (state.playMode) {
            case 'list-loop': //列表循环
                nextIndex = (currentIndex + 1) % len;
                break;
            case 'random':  //随机
                nextIndex = Math.random() * len >> 0;
                if (nextIndex === currentIndex) {  //随机的歌曲与当前歌曲相同，则选取下一首歌曲
                    nextIndex = (currentIndex + 1) % len;
                }
                break;
        }

        setPlayingMusic(state.playlist[nextIndex]);
    }, [state.playlist, state.playingMusic, state.playMode]);

    //音频可以播放时触发事件
    const handleCanPlay = useCallback((e) => {
        state.isPlaying && e.target.play();
    }, [state.isPlaying]);

    const TargetComponent = useMemo(() => React.lazy(() => import(`../routes${pathname}`)), [pathname]);

    // mediaSession MediaMetadata
    useEffect(() => {
        if (!navigator.mediaSession || !MediaMetadata) {
            return;
        }

        const { name, singers, cover, albumName } = state.playingMusic;
        navigator.mediaSession.metadata = new MediaMetadata({
            title: name,
            artist: singers.map(item => item.name).join('/'),
            album: albumName,
            artwork: [
                { src: `${rp(cover)}?param=96y96`, sizes: '96x96', type: 'image/jpeg' },
                { src: `${rp(cover)}?param=128y128`, sizes: '128x128', type: 'image/jpeg' },
                { src: `${rp(cover)}?param=192y192`, sizes: '192x192', type: 'image/jpeg' },
                { src: `${rp(cover)}?param=256y256`, sizes: '256x256', type: 'image/jpeg' },
                { src: `${rp(cover)}?param=384y384`, sizes: '384x384', type: 'image/jpeg' },
                { src: `${rp(cover)}?param=512y512`, sizes: '512x512', type: 'image/jpeg' },
            ]
        });

    }, [state.playingMusic.id]);

    // mediaSession ActionHandler
    useEffect(() => {
        if (!navigator.mediaSession || !MediaMetadata) {
            return;
        }
        navigator.mediaSession.setActionHandler('play', () => setPlaying(true));
        navigator.mediaSession.setActionHandler('pause', () => setPlaying(false));
        navigator.mediaSession.setActionHandler('stop', () => setPlaying(false));
        const handleChangeMusic = (type) => {
            const audio = audioRef.current;
            if (!audio) {
                return;
            }
            const { playlist, playMode, playingMusic } = state;
            const len = playlist.length;
            if (len <= 1 || playMode === 'single-cycle') {  //列表只有一首歌 || 单曲循环，设置播放位置为 0
                audio.currentTime = 0;
                return;
            }

            //当前播放音乐对应的下标
            const currentIndex = playlist.findIndex(({ id }) => id === playingMusic.id);

            //根据播放模式决定下一首歌曲
            let nextIndex;
            switch (playMode) {
                case 'list-loop': //列表循环
                    nextIndex = type === 'next'
                        ? (currentIndex + 1) % len  //下一首
                        : (len + currentIndex - 1) % len; //上一首
                    break;
                case 'random':  //随机
                    nextIndex = Math.random() * len >> 0;
                    if (nextIndex === currentIndex) {  //随机的歌曲与当前歌曲相同，则选取下一首歌曲
                        nextIndex = (currentIndex + 1) % len;
                    }
                    break;
            }

            setPlayingMusic(playlist[nextIndex]);
        }
        navigator.mediaSession.setActionHandler('previoustrack', () => handleChangeMusic('prev'));
        navigator.mediaSession.setActionHandler('nexttrack', () => handleChangeMusic('next'));
    }, [state]);

    return (
        <DataContext.Provider value={state}>
            <TimeContext.Provider value={time}>
                <Layout TargetComponent={TargetComponent} />
                <audio
                    ref={audioRef}
                    src={`https://music.163.com/song/media/outer/url?id=${state.playingMusic.id}`}
                    onEnded={handleEnded}
                    onTimeUpdate={handleTimeUpdate}
                    onCanPlay={handleCanPlay}
                />
            </TimeContext.Provider>
        </DataContext.Provider>
    );
}

export default AppContainer;
import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router';
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

export const audio = new Audio();
export const DataContext = React.createContext();  //是否播放中、播放列表、播放模式、当前播放音乐等数据
export const TimeContext = React.createContext();  //音乐的播放时长经常更新，单独拿出来做 Context
export const globalMethods = {};  //改变 state 的方法

const AppContainer = () => {

    const { pathname } = useLocation();
    const history = useHistory();
    const [state, setState] = useSetState(initialState);

    const [time, setTime] = useState(0);
    //设置当前播放位置
    globalMethods.setTime = setTime;

    if (!routes.includes(pathname)) {  //访问路径不在路由列表中
        history.replace(routes[0]);
    }

    //设置播放状态
    const setPlaying = useCallback(async (isPlaying) => {
        setState({ isPlaying });
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, []);
    globalMethods.setPlaying = setPlaying;

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
    const handleTimeUpdate = useCallback(() => {
        setTime(audio.currentTime);
    }, []);

    //播放结束触发事件
    const handleEnded = useCallback(() => {
        const len = state.playlist.length;
        if (len <= 1 || state.playMode === 'single-cycle') {  //列表只有一首歌 || 播放模式为单曲循环
            audio.play();
            return;
        }

        //当前播放歌曲的下标
        const currentIndex = state.playlist.findIndex(({ id }) => id === state.playingMusic.id);

        //根据播放模式决定下一首歌曲
        let nextIndex;
        if (state.playMode === 'list-loop') {  //列表循环
            nextIndex = (currentIndex + 1) % len;
        } else if (state.playMode == 'random') {  //随机
            nextIndex = Math.random() * len >> 0;
            if (nextIndex === currentIndex) {  //随机的歌曲与当前歌曲相同，则选取下一首歌曲
                nextIndex = (currentIndex + 1) % len;
            }
        }

        setPlayingMusic(state.playlist[nextIndex]);
    }, [state.playlist, state.playingMusic, state.playMode]);

    //音频可以播放时触发事件
    const handleCanPlay = useCallback(() => {
        state.isPlaying && audio.play();
    }, [state.isPlaying]);

    const TargetComponent = useMemo(() => React.lazy(() => import(`../routes${pathname}`)), [pathname]);

    useEffect(() => {
        audio.src = `https://music.163.com/song/media/outer/url?id=${state.playingMusic.id}`;
    }, [state.playingMusic.id]);

    useEffect(() => {
        audio.onended = handleEnded;
        audio.ontimeupdate = handleTimeUpdate;
        audio.oncanplay = handleCanPlay;
    }, [handleEnded, handleCanPlay]);

    return (
        <DataContext.Provider value={state}>
            <TimeContext.Provider value={time}>
                <Layout TargetComponent={TargetComponent} />
            </TimeContext.Provider>
        </DataContext.Provider>
    );
}

export default AppContainer;
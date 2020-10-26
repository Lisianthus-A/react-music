import React, { Suspense, useRef, useCallback } from 'react';
import './index.scss';
import Loading from 'Components/Loading';
import Header from 'Components/Header';
import Sidebar from 'Components/Sidebar';
import MusicPlayer from 'Components/MusicPlayer';
import { useSetState } from 'Utils/hooks';

const initialState = {
    isPlaying: false,  //是否正在播放
    currentTime: 0,  //当前播放位置
    playlist: [  //播放列表
        {
            id: 776039,
            title: 'ONE\'s hope',  //音乐名
            singer: 'やなぎなぎ',  //歌手
            duration: 369.72,  //总时长
            cover: 'https://p1.music.126.net/l22TRH7bs4VG6HMT2Iy56w==/2511284557902801.jpg'  //封面图片
        }
    ],
    playMode: 'list-loop',  //播放模式  list-loop  random
    playingIndex: 0,  //当前播放的音乐下标
};

const Layout = ({ TargetComponent }) => {
    const audioRef = useRef(null);
    const [state, setState] = useSetState(initialState);

    //设置播放状态
    const setPlaying = useCallback((isPlaying) => {
        setState({ isPlaying });
    },
        []
    );

    //设置当前播放位置
    const setTime = useCallback((currentTime) => {
        setState({ currentTime });
    },
        []
    );

    //设置播放列表
    const setPlaylist = (playlist) => {
        setState({ playlist });
        setState({ playingIndex: 0 });
    }

    //设置当前播放的音乐下标
    const setPlayingIndex = useCallback((playingIndex) => {
        setState({ playingIndex });
    },
        []
    );

    //设置播放模式
    const setPlayMode = useCallback((playMode) => {
        setState({ playMode });
    },
        []
    );

    //播放时长改变触发事件
    const handleDurationChange = useCallback((e) => {
        console.log('duration change', e.target.duration);
    },
        []
    );

    //播放位置更新触发事件
    const handleTimeUpdate = useCallback((e) => {
        setTime(e.target.currentTime);
    },
        []
    );

    //播放结束触发事件
    const handleEnded = (e) => {
        if (state.playlist.length === 1) {  //列表只有一首歌，单曲循环
            e.target.play();
            return;
        }
        if (state.playMode === 'list-loop') {  //列表循环
            setPlayingIndex((state.playingIndex + 1) % state.playlist.length);
        } else {  //随机
            setPlayingIndex(parseInt(Math.random() * state.playlist.length));
        }
    }

    //音频可以播放时触发事件
    const handleCanPlay = (e) => {
        if (state.isPlaying) {
            e.target.play();
        }
    }

    return (
        <div className="layout">
            <div className="top">
                <Header />
            </div>

            <div className='middle'>
                <div className="left">
                    <Sidebar />
                </div>
                <div className="right">
                    <Suspense fallback={<Loading />}>
                        <TargetComponent setPlaylist={setPlaylist} />
                    </Suspense>
                </div>
            </div>

            <div className="bottom">
                <MusicPlayer
                    audioRef={audioRef}
                    current={state.currentTime}
                    isPlaying={state.isPlaying}
                    playingIndex={state.playingIndex}
                    playlist={state.playlist}
                    playMode={state.playMode}
                    setPlaying={setPlaying}
                    setTime={setTime}
                    setPlayMode={setPlayMode}
                    setPlayingIndex={setPlayingIndex}
                />
            </div>

            <audio
                ref={audioRef}
                src={`https://music.163.com/song/media/outer/url?id=${state.playlist[state.playingIndex].id}`}
                onEnded={handleEnded}
                onTimeUpdate={handleTimeUpdate}
                onDurationChange={handleDurationChange}
                onCanPlay={handleCanPlay}
            />
        </div>
    );
}

export default Layout;
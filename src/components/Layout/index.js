import React, { Suspense, useRef } from 'react';
import './index.scss';
import Loading from 'Components/Loading';
import Header from 'Components/Header';
import Sidebar from 'Components/Sidebar';
import MusicPlayer from 'Components/MusicPlayer';
import { useSetState } from 'Utils/hooks';

const initialState = {
    isPlaying: false,  //是否正在播放
    duration: 0,  //总时长
    currentTime: 0,  //当前播放位置
    playlist: [776039],  //播放列表
    title: 'ONE\'s hope',  //音乐名
    singer: 'やなぎなぎ',  //歌手
    playingIndex: 0,  //当前播放的音乐下标
    cover: 'https://p1.music.126.net/l22TRH7bs4VG6HMT2Iy56w==/2511284557902801.jpg'  //歌曲封面图片
};

const Layout = ({ TargetComponent }) => {
    const audioRef = useRef(null);
    const [state, setState] = useSetState(initialState);

    //设置播放状态
    const setPlaying = (isPlaying) => {
        setState({ isPlaying });
    }

    //设置总时长
    const setDuration = (duration) => {
        setState({ duration });
    }

    //设置当前播放位置
    const setTime = (currentTime) => {
        setState({ currentTime });
    }

    //设置播放列表
    const setPlaylist = (playlist) => {
        setState({ playlist });
    }

    //设置音乐名
    const setTitle = (title) => {
        setState({ title });
    }

    //设置歌手
    const setSinger = (singer) => {
        setState({ singer });
    }

    //设置当前播放的音乐下标
    const setPlayingIndex = (playingIndex) => {
        setState({ playingIndex });
    }

    //播放时长改变触发事件
    const handleDurationChange = (e) => {
        setDuration(e.target.duration);
    }

    //播放位置更新触发事件
    const handleTimeUpdate = (e) => {
        setTime(e.target.currentTime);
    }

    //播放结束触发事件
    const handleEnded = (e) => {
        // setPlaying(false);
        e.target.play();
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
                        <TargetComponent audioRef={audioRef} />
                    </Suspense>
                </div>
            </div>

            <div className="bottom">
                <MusicPlayer
                    audioRef={audioRef}
                    current={state.currentTime}
                    duration={state.duration}
                    isPlaying={state.isPlaying}
                    title={state.title}
                    singer={state.singer}
                    cover={state.cover}
                    setPlaying={setPlaying}
                    setTime={setTime}
                />
            </div>

            <audio
                ref={audioRef}
                src={`https://music.163.com/song/media/outer/url?id=${state.playlist[state.playingIndex]}`}
                onEnded={handleEnded}
                onTimeUpdate={handleTimeUpdate}
                onDurationChange={handleDurationChange}
            />
        </div>
    );
}

export default Layout;
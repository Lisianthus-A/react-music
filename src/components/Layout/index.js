import React, { Suspense, useRef } from 'react';
import './index.scss';
import Loading from 'Components/Loading';
import Header from 'Components/Header';
import Sidebar from 'Components/Sidebar';
import MusicPlayer from 'Components/MusicPlayer';
import { useSetState } from 'Utils/hooks';

const testSrc = 'https://music.163.com/song/media/outer/url?id=776039';

const initialState = {
    isPlaying: false,  //是否正在播放
    duration: 0,  //总时长
    currentTime: 0  //当前播放位置
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
        setState({ currentTime })
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
                    setPlaying={setPlaying}
                    setTime={setTime}
                />
            </div>

            <audio
                ref={audioRef}
                src={testSrc}
                onEnded={handleEnded}
                onTimeUpdate={handleTimeUpdate}
                onDurationChange={handleDurationChange}
                style={{ display: 'none' }}
            />
        </div>
    );
}

export default Layout;
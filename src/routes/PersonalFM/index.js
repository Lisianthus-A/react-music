import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import layoutStyle from 'Components/Layout/index.module.scss';
import { Link } from 'react-router-dom';
import { CaretRightOutlined, HeartOutlined, DeleteOutlined, StepForwardOutlined, HeartFilled, PauseOutlined } from '@ant-design/icons';
import Loading from 'Components/Loading';
import { globalMethods } from 'AppContainer';
import { getFMList, unlike } from 'Apis/personalFM';
import { hasToken, convertTime, replaceHttpToHttps as rp } from 'Utils/index';
import { collectSong } from 'Utils/methods';

export default () => {

    if (!hasToken()) {  //无 token，未登录
        return <div>私人FM需要登录使用</div>;
    }
    const { audioRef: externalAudioRef, setPlaying: externalSetPlaying } = globalMethods;

    //改变标题
    useEffect(() => {
        document.title = '私人FM';
    });

    useEffect(() => {
        //隐藏外部音乐播放器
        const middleEl = document.getElementsByClassName(layoutStyle.middle)[0];
        const bottomEl = document.getElementsByClassName(layoutStyle.bottom)[0];
        middleEl.style.height = 'calc(100% - 64px)';
        middleEl.style.transition = 'height 1s';
        bottomEl.style.display = 'none';
        const { src, currentTime } = externalAudioRef.current;

        //隐藏歌词面板
        toggleList.checked && toggleList.click();

        //暂停外部音乐播放器的歌曲
        externalSetPlaying(false);
        externalAudioRef.current.currentTime = 0;
        externalAudioRef.current.src = '#';

        let preMetaData = null;
        if (navigator.mediaSession) {
            preMetaData = navigator.mediaSession.metadata;
        }

        return () => {
            middleEl.style.height = 'calc(100% - 128px)';
            bottomEl.style.display = 'block';
            setTimeout(() => middleEl.style.transition = '', 1000);
            externalAudioRef.current.src = src;
            externalAudioRef.current.currentTime = currentTime;
            if (preMetaData) {
                navigator.mediaSession.metadata = preMetaData;
            }
        }
    }, []);

    const [like, setLike] = useState(false);  //喜欢
    const [playingMusic, setMusic] = useState(null);  //正在播放的音乐
    const [musicList, setList] = useState([]);  //音乐列表
    const [playing, setPlaying] = useState(false);  //是否正在播放
    const audioRef = useRef(null);
    const progressContainerRef = useRef(null);
    const progressRef = useRef(null);

    //获取FM列表
    useEffect(() => {
        if (musicList.length > 0) {
            return;
        }

        const getData = async () => {
            const fmRes = await getFMList();
            const list = fmRes.data.map(({ id, name, duration, artists, album: { picUrl, name: albumName } }) => ({
                id,
                albumName,
                title: name,
                singers: artists,
                duration: duration / 1000,
                cover: picUrl
            }));
            if (!playingMusic) {  //首次加载
                const music = list.pop();
                setMusic(music);
            }
            setList(list);
        }
        getData();
    }, [musicList]);

    //播放或暂停
    const handlePlayOrPause = () => {
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);
    }

    //喜欢
    const handleLike = () => {
        setLike(true);
        collectSong(playingMusic.id);
    }

    //不喜欢
    const handleUnlike = () => {
        unlike(playingMusic.id);
        handleNext();
    }

    //下一首
    const handleNext = () => {
        if (musicList.length === 0) {
            return;
        }
        const list = musicList.slice();
        const music = list.pop();
        setMusic(music);
        setList(list);
        setLike(false);
    }

    //设置进度
    const handleSetProgress = (e) => {
        const element = progressRef.current;
        const percent = (e.pageX - element.offsetLeft) / element.clientWidth;
        audioRef.current.currentTime = percent * playingMusic.duration;
    }

    //音频可以播放时触发
    const handleCanPlay = (e) => {
        if (playing) {
            e.target.play();
        }
    }

    //播放位置改变时触发
    const handleTimeUpdate = (e) => {
        const progress = e.target.currentTime / playingMusic.duration * 100 + '%';  //播放进度
        const time = '-' + convertTime(playingMusic.duration - e.target.currentTime);  //剩余时间
        progressContainerRef.current.style.setProperty('--time', `'${time}'`);
        progressRef.current.style.setProperty('--progress', progress);
    }

    // mediaSession MediaMetadata
    useEffect(() => {
        if (!playingMusic || !navigator.mediaSession || !MediaMetadata) {
            return;
        }

        const { name, singers, cover, albumName } = playingMusic;
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

    }, [playingMusic]);

    // mediaSession ActionHandler
    useEffect(() => {
        if (!playingMusic || !navigator.mediaSession || !MediaMetadata) {
            return;
        }
        navigator.mediaSession.setActionHandler('play', () => {
            audioRef.current.play();
            setPlaying(true);
        });
        navigator.mediaSession.setActionHandler('pause',  () => {
            audioRef.current.pause();
            setPlaying(false);
        });
        navigator.mediaSession.setActionHandler('stop', () => {
            audioRef.current.pause();
            setPlaying(false);
        });
        navigator.mediaSession.setActionHandler('previoustrack', null);
        navigator.mediaSession.setActionHandler('nexttrack', handleNext);
    }, [playingMusic, handleNext]);

    if (!playingMusic) {
        return <Loading />;
    }

    return (
        <div className={style['personal-fm']}>
            <div className={style.title}>私人FM</div>
            <div className={style['music-box']}>
                <div className={style.image}><img src={`${rp(playingMusic.cover)}?param=300y300`} /></div>
                <Link className={style.song} to={`/Song?id=${playingMusic.id}`} target="_blank" title={playingMusic.title}>{playingMusic.title}</Link>
                <div className={style['progress-container']} ref={progressContainerRef}>
                    <div className={style.progress} ref={progressRef} onClick={handleSetProgress}></div>
                </div>
                <div className={style['btn-container']}>
                    {playing ? <div className={style.icon} title='暂停' onClick={handlePlayOrPause}><PauseOutlined /></div>
                        : <div className={style.icon} title='播放' onClick={handlePlayOrPause}><CaretRightOutlined /></div>
                    }
                    {like ? <div className={style.icon} title='喜欢' onClick={handleLike}><HeartFilled style={{ color: '#C62F2F' }} /></div>
                        : <div className={style.icon} title='喜欢' onClick={handleLike}><HeartOutlined /></div>
                    }
                    <div className={style.icon} title='不喜欢' onClick={handleUnlike}><DeleteOutlined /></div>
                    <div className={style.icon} title='下一首' onClick={handleNext}><StepForwardOutlined /></div>
                </div>
            </div>
            <audio
                ref={audioRef}
                src={`https://music.163.com/song/media/outer/url?id=${playingMusic.id}`}
                onEnded={handleNext}
                onCanPlay={handleCanPlay}
                onTimeUpdate={handleTimeUpdate}
            />
        </div>
    );
}
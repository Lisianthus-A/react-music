import React, { useEffect, useState, memo, useRef } from 'react';
import './View.scss';
import { Modal } from 'antd';
import { CaretRightOutlined, HeartOutlined, DeleteOutlined, StepForwardOutlined, HeartFilled, PauseOutlined } from '@ant-design/icons';
import { getToken, convertTime } from 'Utils';
import { getFMList, unlike } from 'Apis/apiPersonalFM';
import Loading from 'Components/Loading';
import CollectSong from 'Components/CollectSong';

const PersonalFM = memo(({ audioRef: externalAudioRef, setPlaying: externalSetPlaying }) => {

    if (!getToken()) {  //无token，未登录
        return <div>私人FM需要登录使用</div>;
    }

    useEffect(() => {
        //隐藏音乐播放器
        const middle = document.getElementsByClassName('middle')[0];
        middle.style.height = '100%';

        //暂停外部音乐播放器的歌曲
        externalSetPlaying(false);
        externalAudioRef.current.pause();

        return () => {
            middle.style.height = 'calc(100% - 128px)';
        }
    },
        []
    );

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
            const list = fmRes.data.map(({ id, name, duration, album: { picUrl } }) => ({
                id,
                title: name,
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
    },
        [musicList]
    );

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
        Modal.info({
            title: '收藏歌曲',
            maskClosable: true,
            okButtonProps: { style: { display: 'none' } },
            width: 500,
            content: <CollectSong songId={playingMusic.id} />
        });
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
        const percent = (e.screenX - element.offsetLeft) / element.clientWidth;
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

    if (!playingMusic) {
        return <Loading />;
    }

    return (
        <div className='personal-fm'>
            <div className='title'>私人FM</div>
            <div className='music-box'>
                <div className='image'><img src={`${playingMusic.cover}?param=300y300`} /></div>
                <a className='song' href={`/#/Song?id=${playingMusic.id}`} target="_blank">{playingMusic.title}</a>
                <div className='progress-container' ref={progressContainerRef}>
                    <div className="progress" ref={progressRef} onClick={handleSetProgress}></div>
                </div>
                <div className='btn-container'>
                    {
                        playing ? <div className='icon' title='暂停' onClick={handlePlayOrPause}><PauseOutlined /></div> :
                            <div className='icon' title='播放' onClick={handlePlayOrPause}><CaretRightOutlined /></div>
                    }
                    {
                        like ? <div className='icon' title='喜欢' onClick={handleLike}><HeartFilled style={{ color: '#C62F2F' }} /></div>
                            : <div className='icon' title='喜欢' onClick={handleLike}><HeartOutlined /></div>
                    }
                    <div className='icon' title='不喜欢' onClick={handleUnlike}><DeleteOutlined /></div>
                    <div className='icon' title='下一首' onClick={handleNext}><StepForwardOutlined /></div>
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
});

export default PersonalFM;
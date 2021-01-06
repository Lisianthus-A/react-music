import React, { useState, useRef, useEffect } from 'react';
import './index.scss';
import {
    UnorderedListOutlined,
    CaretRightOutlined,
    DownloadOutlined,
    DeleteOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { convertLyric, convertTime } from 'Utils';
import { useInterval } from 'Utils/hooks';
import { lyric, downLoadMusic } from 'Apis/apiCommon';
import CollectSong from 'Components/CollectSong';
import { Modal } from 'antd';

const Playlist = ({ setPlaylist, setPlaying, setPlayingMusic, audioRef, id, playlist, playingMusic }) => {
    const [lyrics, setLyric] = useState(null);
    const contentRef = useRef(null);
    const activeRef = useRef(null);
    const [isDownloading, setIsDownloading] = useState(false);

    //清空播放列表
    const handleClean = () => {
        setPlaylist([], false);
    }

    //播放点击的歌曲
    const handlePlayMusic = (idx) => {
        setPlaying(true);
        setPlayingMusic(playlist[idx]);
        audioRef.current.play();
    }

    //下载
    const handleDownload = (e, name, id) => {
        e.stopPropagation();
        if (isDownloading) {
            return;
        }
        setIsDownloading(true);
        downLoadMusic(name, id).then(() => setIsDownloading(false));
    }

    //删除指定歌曲
    const handleDelete = (e, idx) => {
        e.stopPropagation();
        const list = JSON.parse(JSON.stringify(playlist));
        const playingIndex = list.findIndex(e => e.id === playingMusic.id);  //正在播放的歌曲的index
        list.splice(idx, 1);
        setPlaylist(list, false);
        if (playingIndex === idx) {  //删除的是正在播放的歌曲
            setPlayingMusic(list[idx] || list[list.length - 1]);
        }
    }

    //收藏歌单中的某首歌
    const handleCollectSong = (e, id) => {
        e.stopPropagation();
        Modal.info({
            title: '收藏歌曲',
            maskClosable: true,
            okButtonProps: { style: { display: 'none' } },
            width: 500,
            content: <CollectSong songId={id} />
        });
    }

    useEffect(() => {
        const getLyric = async () => {
            const result = await lyric(id);
            if (result.uncollected || result.nolyric) {  //没有歌词
                setLyric(false);
                return;
            }

            setLyric(convertLyric(result));

        }
        getLyric();
        activeRef.current && activeRef.current.classList.remove('active');
        contentRef.current.scrollTop = 0;
    },
        [id]
    );

    //不断读取当前播放进度，判断是否需要滚动歌词
    //使用上层state.current的话，会使memo无效
    useInterval(() => {
        if (contentRef.current.getBoundingClientRect().top === 0) {  //避免重复scroll
            return;
        }
        const currentTime = audioRef.current.currentTime;
        const elemList = contentRef.current.getElementsByClassName('lyric');
        for (let i = 0; i < elemList.length; i++) {
            if (currentTime > +elemList[i].dataset.time && currentTime < +elemList[i + 1]?.dataset?.time) {
                if (activeRef.current === elemList[i]) {  //避免重复scroll
                    return;
                }
                activeRef.current && activeRef.current.classList.remove('active');
                activeRef.current = elemList[i];
                elemList[i].classList.add('active');
                //歌词置中  195 = content高度 / 2 + title高度
                //activeRef的offsetTop会从title计算
                contentRef.current.scrollTop = activeRef.current.offsetTop + activeRef.current.scrollHeight / 2 - 195;
                return;
            }
        }
        const lastElem = elemList[elemList.length - 1];
        if (lastElem && currentTime >= lastElem.dataset.time && activeRef.current !== lastElem) {
            activeRef.current && activeRef.current.classList.remove('active');
            activeRef.current = lastElem;
            lastElem.classList.add('active');
            contentRef.current.scrollTop = activeRef.current.offsetTop + activeRef.current.scrollHeight / 2 - 195;
        }
    }, 400);

    return (
        <div className='playlist'>
            <div className='icon' title='播放列表'>
                <label htmlFor='toggle-list'><UnorderedListOutlined /><span>{playlist.length}</span></label>
            </div>
            <input type='checkbox' id='toggle-list' style={{ display: 'none' }} />
            <div className='list'>
                <div className='list-left'>
                    <div className='title'>
                        <span>播放列表({playlist.length})</span>
                        <span className='clean' onClick={handleClean}><DeleteOutlined />清空</span>
                    </div>
                    <div className='content'>
                        {
                            playlist.map(({ id, title, singer, duration }, idx) =>
                                <div className={id === playingMusic.id ? 'item playing' : 'item'} key={idx} onClick={() => handlePlayMusic(idx)}>
                                    {id === playingMusic.id && <CaretRightOutlined />}
                                    <div className='song-title' title={title}>{title}</div>
                                    <div className='icons'>
                                        <PlusOutlined title='添加到歌单' onClick={(e) => handleCollectSong(e, id)} />
                                        <DownloadOutlined title='下载' onClick={(e) => handleDownload(e, title, id)} />
                                        <DeleteOutlined title='删除' onClick={(e) => handleDelete(e, idx)} />
                                    </div>
                                    <div className='singer' title={singer}>{singer}</div>
                                    <div className='duration'>{convertTime(duration)}</div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='list-right'>
                    <div className='title'><span title={playingMusic.title}>{playingMusic.title}</span></div>
                    <div className='content' ref={contentRef}>
                        {
                            lyrics === null &&
                            <p>歌词加载中...</p>
                        }
                        {
                            lyrics === false &&
                            <p>暂无歌词</p>
                        }
                        {
                            lyrics &&
                            lyrics.map(([origin, trans, time], idx) =>   //原歌词，翻译歌词，时间
                                <p key={idx} data-time={time} className='lyric'>
                                    {origin}
                                    {
                                        trans &&
                                        <>
                                            <br />
                                            {trans}
                                        </>
                                    }
                                </p>
                            )
                        }
                    </div>
                </div>
                <label htmlFor='toggle-list'><div className='close'>X</div></label>
            </div>
        </div>
    );
}

export default Playlist;
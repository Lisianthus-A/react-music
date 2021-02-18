import React, { useState, useRef, useEffect, memo } from 'react';
import style from './index.module.scss';
import './reset.scss';
import {
    UnorderedListOutlined,
    CaretRightOutlined,
    DownloadOutlined,
    DeleteOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { convertTime } from 'Utils';
import { resolveLyric } from 'Utils/resolve';
import { useInterval } from 'Utils/hooks';
import { collectSong, downloadMusic } from 'Utils/methods';
import { lyric } from 'Apis/apiCommon';

const Playlist = memo(({ id, playlist, playingMusic, audioRef, setPlaylist, setPlaying, setPlayingMusic }) => {
    const [lyrics, setLyric] = useState(null);
    const contentRef = useRef(null);
    const activeRef = useRef(null);

    //清空播放列表
    const handleClean = () => {
        setPlaylist([], false);
    }

    //播放点击的歌曲
    const handlePlayMusic = (idx) => {
        setPlaying(true);
        setPlayingMusic(playlist[idx]);
    }

    //下载
    const handleDownload = (e, name, id) => {
        e.stopPropagation();
        downloadMusic(name, id);
    }

    //删除指定歌曲
    const handleDelete = (e, idx) => {
        e.stopPropagation();
        const list = [...playlist];
        const playingIndex = list.findIndex(e => e.id === playingMusic.id);  //正在播放的歌曲的index
        list.splice(idx, 1);
        setPlaylist(list, false);
        playingIndex === idx && setPlayingMusic(list[idx] || list[list.length - 1]);  //删除的是正在播放的歌曲
    }

    //收藏歌单中的某首歌
    const handleCollectSong = (e, id) => {
        e.stopPropagation();
        collectSong(id);
    }

    useEffect(() => {
        const getLyric = async () => {
            const result = await lyric(id);
            setLyric(resolveLyric(result));
        }
        getLyric();

        activeRef.current && activeRef.current.classList.remove(style.active);
        contentRef.current.scrollTop = 0;
    }, [id]);

    //不断读取当前播放进度，判断是否需要滚动歌词
    //使用上层state.current的话，会使memo无效
    useInterval(() => {
        if (contentRef.current.getBoundingClientRect().top === 0) {  //避免重复scroll
            return;
        }
        const currentTime = audioRef.current.currentTime;
        const elemList = contentRef.current.getElementsByClassName(style.lyric);
        for (let i = 0; i < elemList.length; i++) {
            if (currentTime > +elemList[i].dataset.time && currentTime < +elemList[i + 1]?.dataset?.time) {
                if (activeRef.current === elemList[i]) {  //避免重复scroll
                    return;
                }
                activeRef.current && activeRef.current.classList.remove(style.active);
                activeRef.current = elemList[i];
                elemList[i].classList.add(style.active);
                //歌词置中  195 = content高度 / 2 + title高度
                //activeRef的offsetTop会从title计算
                contentRef.current.scrollTop = activeRef.current.offsetTop + activeRef.current.scrollHeight / 2 - 195;
                return;
            }
        }
        const lastElem = elemList[elemList.length - 1];
        if (lastElem && currentTime >= lastElem.dataset.time && activeRef.current !== lastElem) {
            activeRef.current && activeRef.current.classList.remove(style.active);
            activeRef.current = lastElem;
            lastElem.classList.add(style.active);
            contentRef.current.scrollTop = activeRef.current.offsetTop + activeRef.current.scrollHeight / 2 - 195;
        }
    }, 400);

    return (
        <div className={style.playlist}>
            <div className={style.icon} title='播放列表'>
                <label htmlFor='toggleList'><UnorderedListOutlined /><span>{playlist.length}</span></label>
            </div>
            <input type='checkbox' id='toggleList' style={{ display: 'none' }} className={style.toggle} />
            <div className={style.list}>
                <div className={style['list-left']}>
                    <div className={style.title}>
                        <span>播放列表({playlist.length})</span>
                        <span className={style.clean} onClick={handleClean}><DeleteOutlined />清空</span>
                    </div>
                    <div className={style.content}>
                        {playlist.map(({ id, name, singers, duration }, idx) =>
                            <div
                                className={id === playingMusic.id ? `${style.item} playing` : style.item}
                                key={idx}
                                onClick={() => handlePlayMusic(idx)}
                            >
                                {id === playingMusic.id && <CaretRightOutlined />}
                                <div className={style['song-title']} title={name}>{name}</div>
                                <div className={style.icons}>
                                    <PlusOutlined title='添加到歌单' onClick={(e) => handleCollectSong(e, id)} />
                                    <DownloadOutlined title='下载' onClick={(e) => handleDownload(e, name, id)} />
                                    <DeleteOutlined title='删除' onClick={(e) => handleDelete(e, idx)} />
                                </div>
                                <div className={style.singer} title={singers.map(({ name }) => name).join('/')}>{singers.map(({ name }) => name).join('/')}</div>
                                <div className={style.duration}>{convertTime(duration)}</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={style['list-right']}>
                    <div className={style.title}><span title={playingMusic.name}>{playingMusic.name}</span></div>
                    <div className={style.content} ref={contentRef}>
                        {!lyrics &&
                            <p>歌词加载中...</p>
                        }
                        {lyrics && lyrics.length === 0 &&
                            <p>暂无歌词</p>
                        }
                        {lyrics && lyrics.map(([origin, trans, time], idx) =>   //原歌词，翻译歌词，时间
                            <p key={idx} data-time={time} className={style.lyric}>
                                {origin}
                                {trans &&
                                    <>
                                        <br />
                                        {trans}
                                    </>
                                }
                            </p>
                        )}
                    </div>
                </div>
                <label htmlFor='toggleList'><div className={style.close}>X</div></label>
            </div>
        </div>
    );
});

export default Playlist;
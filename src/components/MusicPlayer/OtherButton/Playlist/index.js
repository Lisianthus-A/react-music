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
import { getLyric } from 'Apis/song';

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
        const getData = async () => {
            const result = await getLyric(id);
            setLyric(resolveLyric(result));
        }
        getData();

        activeRef.current && activeRef.current.classList.remove(style.active);
        contentRef.current.scrollTop = 0;
    }, [id]);

    //不断读取当前播放进度，滚动歌词
    useInterval(() => {
        if (!toggleList.checked) {  //播放列表处于收起状态，无需滚动歌词
            return;
        }
        const currentTime = audioRef.current.currentTime;  //当前播放时间
        const elemList = contentRef.current.getElementsByClassName(style.lyric);  //所有歌词 DOM 元素列表

        //二分查找当前播放时间对应的元素的下标
        const find = () => {
            let left = 0, right = elemList.length - 1;
            while (left <= right) {
                const mid = left + right >> 1;

                if (currentTime < +elemList[mid].dataset.time) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }

            return left - 1;
        }

        //判断需要滚动置中的元素
        let elementToScroll;
        if (currentTime >= +elemList[elemList.length - 1].dataset.time) {  //当前播放时间比最后的歌词对应时间大
            elementToScroll = elemList[elemList.length - 1];
        } else if (currentTime <= +elemList[0].dataset.time) {  //当前播放时间比第一条歌词对应时间小
            return;
        } else {
            const index = find();
            elementToScroll = elemList[index];
        }

        if (activeRef.current === elementToScroll) {  //无需改变置中的元素
            return;
        }

        //移除旧元素的 CSS 类
        activeRef.current && activeRef.current.classList.remove(style.active);

        //新元素添加 CSS 类
        activeRef.current = elementToScroll;
        elementToScroll.classList.add(style.active);

        //歌词置中 195 = content 高度 / 2 + title 高度
        const scrollPosition = activeRef.current.offsetTop + activeRef.current.scrollHeight / 2 - 195;
        contentRef.current.scrollTop = scrollPosition < 0 ? 0 : scrollPosition;
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
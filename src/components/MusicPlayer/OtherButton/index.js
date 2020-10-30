import React, { memo, useEffect, useState, useRef } from 'react';
import './index.scss';
import CustomIcon from 'Components/CustomIcon';
import {
    UnorderedListOutlined,
    SoundOutlined,
    RetweetOutlined,
    CaretRightOutlined,
    DownloadOutlined,
    DeleteOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { Slider } from 'antd';
import { convertTime, convertTimeString } from 'Utils';
import { useInterval } from 'Utils/hooks';
import { lyric } from 'Apis/apiCommon';

const OtherButton = memo(({ audioRef, playlist, playingMusic, playMode, setPlayMode, setPlaylist, setPlayingMusic, id }) => {
    const [lyrics, setLyric] = useState(null);
    const contentRef = useRef(null);
    const activeRef = useRef(null);
    //设置音量
    const handleChange = (value) => {
        audioRef.current.volume = value / 100;
    }

    //设置播放模式
    const handleSetPlayMode = () => {
        if (playMode === 'list-loop') {
            setPlayMode('random');
        } else if (playMode === 'random') {
            setPlayMode('single-cycle');
        } else {
            setPlayMode('list-loop');
        }
    }

    //清空播放列表
    const handleClean = () => {
        setPlaylist([]);
    }

    //播放点击的歌曲
    const handlePlayMusic = (idx) => {
        setPlayingMusic(playlist[idx]);
    }

    //下载
    const handleDownload = (e, id) => {
        e.stopPropagation();
        window.open(`https://music.163.com/song/media/outer/url?id=${id}`);
    }

    //删除指定歌曲
    const handleDelete = (e, idx) => {
        e.stopPropagation();
        const list = JSON.parse(JSON.stringify(playlist));
        list.splice(idx, 1);
        setPlaylist(list, false);
    }

    useEffect(() => {
        const getLyric = async () => {
            const result = await lyric(id);
            if (result.uncollected || result.nolyric) {  //没有歌词
                setLyric(false);
                return;
            }

            //原歌词与翻译后的歌词，过滤空字符串和非歌词内容
            const lrc = result.lrc.lyric.split('\n').filter(e => e !== '' && /\[.+\].+/.test(e));
            const transLrc = result.tlyric.lyric ? result.tlyric.lyric.split('\n').filter(e => e !== '' && /\[.+\].+/.test(e)) : [];

            const len = transLrc.length;
            if (len !== 0) {  //合并歌词
                for (let i = 0; i < len; i++) {
                    const idx = transLrc[i].indexOf(']');
                    lrc[i] += '#br#' + transLrc[i].slice(idx + 1);
                }
            }
            setLyric(lrc);

        }
        getLyric();
        activeRef.current && activeRef.current.classList.remove('active');
    },
        [id]
    );

    //不断读取当前播放进度，判断是否需要滚动歌词
    //使用上层state.current的话，会使memo无效
    useInterval(() => {
        const currentTime = audioRef.current.currentTime;
        const elemList = contentRef.current.getElementsByClassName('lyric');
        for (let i = 0; i < elemList.length; i++) {
            if (currentTime > +elemList[i].dataset.time && currentTime < +elemList[i + 1]?.dataset?.time) {
                activeRef.current && activeRef.current.classList.remove('active');
                activeRef.current = elemList[i];
                elemList[i].classList.add('active');
                elemList[i].scrollIntoView();
                break;
            }
        }
        const lastElem = elemList[elemList.length - 1];
        if (lastElem && currentTime >= lastElem.dataset.time) {
            activeRef.current && activeRef.current.classList.remove('active');
            activeRef.current = lastElem;
            lastElem.classList.add('active');
            lastElem.scrollIntoView();
        }
    }, 400);

    return (
        <div className='other-button'>
            <div className='playlist'>
                <div className='icon' title='播放列表'>
                    <label htmlFor='toggle-list'><UnorderedListOutlined /></label>
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
                                    <div className='item' key={idx} onClick={() => handlePlayMusic(idx)}>
                                        {id === playingMusic.id && <CaretRightOutlined className='playing' />}
                                        <div className='song-title' title={title}>{title}</div>
                                        <div className='icons'>
                                            <PlusOutlined title='添加到歌单' />
                                            <DownloadOutlined title='下载' onClick={(e) => handleDownload(e, id)} />
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
                                lyrics.map((e, idx) => {
                                    const bracketIndex = e.indexOf(']');  //中括号的下标
                                    const brIndex = e.indexOf('#br#');  //br的下标
                                    const timeString = e.slice(1, bracketIndex);  //时间字符串
                                    const timeNumber = convertTimeString(timeString);  //将时间字符串转换成秒数

                                    const brString = brIndex !== -1 ? e.slice(brIndex + 4) : null;  //br标签后的歌词
                                    if (brString) {
                                        return (
                                            <p key={idx} data-time={timeNumber} className='lyric'>
                                                {e.slice(bracketIndex + 1, brIndex)}
                                                <br />
                                                {brString}
                                            </p>
                                        );
                                    } else {
                                        return (
                                            <p key={idx} data-time={timeNumber} className='lyric'>
                                                {e.slice(bracketIndex + 1)}
                                            </p>
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>
                    <label htmlFor='toggle-list'><div className='close'>X</div></label>
                </div>
            </div>
            <div className='play-mode'>
                <div className='icon' onClick={handleSetPlayMode}>
                    {
                        playMode === 'list-loop' ? <RetweetOutlined title='列表循环' /> :
                            playMode === 'random' ? <CustomIcon type='icon-random' title='随机' /> :
                                <CustomIcon type='icon-Singlecycle' title='单曲循环' />
                    }
                </div>
            </div>
            <div className='volume'>
                <div className='icon' title='音量'><SoundOutlined /></div>
                <div className='slider'>
                    <Slider defaultValue={100} onChange={handleChange} tipFormatter={(value) => `${value}%`} />
                </div>
            </div>
        </div>
    );
});

export default OtherButton;
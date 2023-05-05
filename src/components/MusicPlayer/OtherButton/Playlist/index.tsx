import { useRef, useEffect, useContext, useState } from "react";
import style from "./index.module.scss";
import { Icon } from "@/components";
import { convertTime } from "@/utils";
import { useInterval } from "@/utils/hooks";
import music from "@/utils/music";
import cache from "@/utils/cache";
import { FuncContext } from "@/containers";

import type { MouseEvent } from "react";
import type { State } from "@/containers";

interface Props {
    isPlaying: boolean;
    playlist: State["playlist"];
    playingItem: State["playingItem"];
    currentTime: number;
}

function Playlist({ isPlaying, playlist, playingItem, currentTime }: Props) {
    const { playSong, collectSong, setPlaylist } = useContext(FuncContext);
    const [lyric, setLyric] = useState<null | [string, string, number][]>(
        playingItem.lyric
    );

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const activeRef = useRef<HTMLDivElement>(null);
    const preIdRef = useRef<number>(playingItem.id);

    // 清空播放列表
    const handleClean = () => {
        cache().delAll();
        setPlaylist([]);
    };

    // 播放点击的歌曲
    const handlePlaySong = async (index: number) => {
        const clickSong = playlist[index];
        playSong(clickSong);
    };

    // 下载歌曲
    const handleDownload = (e: MouseEvent, id: number) => {
        e.stopPropagation();
        music().download(id);
    };

    // 删除指定歌曲
    const handleDelete = async (e: MouseEvent, index: number) => {
        e.stopPropagation();
        const newList = playlist.slice();

        // 正在播放的歌曲的 index
        const playingIndex = newList.findIndex((e) => e.id === playingItem.id);

        // 歌曲列表删除对应项
        const delItem = newList.splice(index, 1);
        // 缓存删除对应项
        cache().del(delItem[0].id);
        setPlaylist(newList);

        // 删除的是正在播放的歌曲
        if (playingIndex === index && isPlaying) {
            const nextSong = newList[index] || newList[newList.length - 1];
            nextSong && playSong(nextSong);
        }
    };

    // 收藏歌单中的某首歌
    const handleCollectSong = (e: MouseEvent, id: number) => {
        e.stopPropagation();
        collectSong(id);
    };

    // 不断读取当前播放进度，滚动歌词
    useInterval(() => {
        // @ts-ignore
        // 播放列表处于收起状态，无需滚动歌词
        if (!toggleList.checked) {
            return;
        }

        // 所有歌词 DOM 元素列表
        const elemList = contentRef.current!.getElementsByClassName("lyric");

        if (elemList.length === 0) {
            return;
        }

        // 二分查找当前播放时间对应的元素的下标
        const find = () => {
            let left = 0,
                right = elemList.length - 1;
            while (left <= right) {
                const mid = (left + right) >> 1;
                // @ts-ignore
                const elemTime = Number(elemList[mid].dataset.time);

                if (currentTime < elemTime) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }

            return left - 1;
        };

        let elementToScroll: Element;
        // @ts-ignore
        const firstElemTime = Number(elemList[0].dataset.time);
        // @ts-ignore
        const lastElemTime = Number(elemList[elemList.length - 1].dataset.time);
        // 判断需要滚动置中的元素
        if (currentTime >= lastElemTime) {
            // 当前播放时间比最后的歌词对应时间大
            elementToScroll = elemList[elemList.length - 1];
        } else if (currentTime <= firstElemTime) {
            // 当前播放时间比第一条歌词对应时间小
            return;
        } else {
            const index = find();
            elementToScroll = elemList[index];
        }

        // 无需改变置中的元素
        if (activeRef.current === elementToScroll) {
            return;
        }

        // 移除旧元素的 CSS 类
        activeRef.current && activeRef.current.classList.remove("active");

        // @ts-ignore 新元素添加 CSS 类
        activeRef.current = elementToScroll;
        elementToScroll.classList.add("active");

        // 歌词置中 195 = content 高度 / 2 + title 高度
        const scrollPosition =
            activeRef.current!.offsetTop +
            activeRef.current!.scrollHeight / 2 -
            195;
        contentRef.current!.scrollTop = scrollPosition < 0 ? 0 : scrollPosition;
    }, 400);

    useEffect(() => {
        if (playingItem.id !== preIdRef.current) {
            activeRef.current && activeRef.current.classList.remove("active");
            contentRef.current!.scrollTop = 0;
            preIdRef.current = playingItem.id;
            setLyric(playingItem.lyric);
        } else {
            playingItem.lyric && setLyric(playingItem.lyric);
        }
    }, [playingItem]);

    // 开始绘制音乐频谱图
    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            music().setCanvasContext(ctx as any);
            music().drawStart();
        }
    }, [canvasRef]);

    return (
        <div className={style.playlist}>
            <div className="icon" title="播放列表">
                <label htmlFor="toggleList">
                    <Icon type="icon-list" />
                    {playlist.length}
                </label>
            </div>
            <input type="checkbox" id="toggleList" className="toggle" />
            <div className="list">
                <canvas ref={canvasRef} height="310" width="900" />
                <div className="list-left">
                    <div className="title">
                        <span>播放列表 ({playlist.length})</span>
                        <span className="clean" onClick={handleClean}>
                            <Icon type="icon-delete" /> 清空
                        </span>
                    </div>
                    <div className="content">
                        {playlist.map(
                            ({ id, name, singers, duration }, idx) => (
                                <div
                                    className={
                                        id === playingItem.id
                                            ? "item playing"
                                            : "item"
                                    }
                                    key={id}
                                    onClick={() => handlePlaySong(idx)}
                                >
                                    {id === playingItem.id && (
                                        <Icon type="icon-play" />
                                    )}
                                    <div className="song-title" title={name}>
                                        {name}
                                    </div>
                                    <div className="icons">
                                        <Icon
                                            type="icon-heart"
                                            onClick={(e) =>
                                                handleCollectSong(e, id)
                                            }
                                        />
                                        <Icon
                                            type="icon-download"
                                            onClick={(e) =>
                                                handleDownload(e, id)
                                            }
                                        />
                                        <Icon
                                            type="icon-delete"
                                            onClick={(e) =>
                                                handleDelete(e, idx)
                                            }
                                        />
                                    </div>
                                    <div
                                        className="singer"
                                        title={singers
                                            .map(({ name }) => name)
                                            .join("/")}
                                    >
                                        {singers
                                            .map(({ name }) => name)
                                            .join("/")}
                                    </div>
                                    <div className="duration">
                                        {convertTime(duration)}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="list-right">
                    <div className="title">
                        <span title={playingItem.name}>{playingItem.name}</span>
                    </div>
                    <div className="content" ref={contentRef}>
                        {lyric === null && <p>歌词加载中...</p>}
                        {lyric && lyric.length === 0 && <p>暂无歌词</p>}
                        {lyric &&
                            lyric.map(
                                (
                                    [origin, trans, time],
                                    idx //原歌词，翻译歌词，时间
                                ) => (
                                    <p
                                        key={idx}
                                        data-time={time}
                                        className="lyric"
                                    >
                                        {origin}
                                        {trans && (
                                            <>
                                                <br />
                                                {trans}
                                            </>
                                        )}
                                    </p>
                                )
                            )}
                    </div>
                </div>
                <label htmlFor="toggleList">
                    <div className="close">X</div>
                </label>
            </div>
        </div>
    );
}

export default Playlist;

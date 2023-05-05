import { useState, useEffect, useRef, useContext } from "react";
import style from "./index.module.scss";
import layoutStyle from "@/components/Layout/index.module.scss";
import { Link } from "react-router-dom";
import { Loading, Icon } from "@/components";
import { FuncContext } from "@/containers";
import { getFMList, unlike } from "@/apis/personalFM";
import { hasToken, convertTime } from "@/utils";
import { resolveSongs } from "@/utils/resolve";

import type { SongItem } from "@/containers";
import type { MouseEvent } from "react";

function PersonalFM() {
    // 无 token，未登录
    if (!hasToken()) {
        return <div>私人 FM 需要登录使用</div>;
    }

    const { pauseSong, collectSong } = useContext(FuncContext);

    // 改变标题
    useEffect(() => {
        document.title = "私人FM";
    }, []);

    useEffect(() => {
        // 隐藏外部音乐播放器
        // @ts-ignore
        const middleEl: HTMLDivElement = document.getElementsByClassName(
            layoutStyle.middle
        )[0];
        // @ts-ignore
        const bottomEl: HTMLDivElement = document.getElementsByClassName(
            layoutStyle.bottom
        )[0];
        middleEl.style.height = "calc(100% - 64px)";
        middleEl.style.transition = "height 1s";
        bottomEl.style.display = "none";

        // 如果歌词面板打开了，则关闭面板
        const toggleList = document.getElementById("toggleList");
        // @ts-ignore
        toggleList.checked && toggleList.click();

        // 暂停外部音乐播放器的歌曲
        pauseSong();

        // 暂存 mediaSession metadata
        let preMetaData: any = null;
        if (navigator.mediaSession) {
            preMetaData = navigator.mediaSession.metadata;
        }

        return () => {
            // 外部音乐播放器恢复显示
            middleEl.style.height = "calc(100% - 128px)";
            bottomEl.style.display = "block";
            setTimeout(() => {
                middleEl.style.transition = "";
            }, 1000);

            // 恢复 mediaSession metadata
            if (preMetaData) {
                navigator.mediaSession.metadata = preMetaData;
            }
        };
    }, []);

    const [like, setLike] = useState<boolean>(false); // 喜欢
    const [playingSong, setPlayingSong] = useState<SongItem | null>(null); // 正在播放的歌曲
    const [songList, setSongList] = useState<SongItem[]>([]); // 歌曲列表
    const [playing, setPlaying] = useState<boolean>(false); // 是否正在播放
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressContainerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    // 获取最新 FM 列表
    useEffect(() => {
        if (songList.length > 0) {
            return;
        }

        const getData = async () => {
            const fmRes = await getFMList();
            const list = resolveSongs(fmRes.data, "fm");
            if (!playingSong) {
                //首次加载
                const song = list.pop();
                setPlayingSong(song as any);
            }
            setSongList(list);
        };
        getData();
    }, [songList]);

    // 播放或暂停
    const handlePlayOrPause = () => {
        if (playing) {
            audioRef.current!.pause();
        } else {
            audioRef.current!.play();
        }
        setPlaying(!playing);
    };

    // 喜欢
    const handleLike = () => {
        setLike(true);
        collectSong(playingSong!.id);
    };

    // 不喜欢
    const handleUnlike = () => {
        unlike(playingSong!.id);
        handleNext();
    };

    // 下一首
    const handleNext = () => {
        if (songList.length === 0) {
            return;
        }
        const list = songList.slice();
        const music = list.pop();
        setPlayingSong(music as any);
        setSongList(list);
        setLike(false);
    };

    // 设置进度
    const handleSetProgress = (e: MouseEvent) => {
        const element = progressRef.current;
        const percent = (e.pageX - element!.offsetLeft) / element!.clientWidth;
        audioRef.current!.currentTime = percent * playingSong!.duration;
    };

    // 音频可以播放时触发
    const handleCanPlay = () => {
        if (playing) {
            audioRef.current!.play();
        }
    };

    //播放位置改变时触发
    const handleTimeUpdate = (e: any) => {
        const progress =
            (e.target.currentTime / playingSong!.duration) * 100 + "%"; //播放进度
        const time =
            "-" + convertTime(playingSong!.duration - e.target.currentTime); //剩余时间
        progressContainerRef.current!.style.setProperty("--time", `'${time}'`);
        progressRef.current!.style.setProperty("--progress", progress);
    };

    // mediaSession MediaMetadata
    useEffect(() => {
        if (!playingSong || !navigator.mediaSession || !MediaMetadata) {
            return;
        }

        const { name, singers, cover, albumName } = playingSong;
        navigator.mediaSession.metadata = new MediaMetadata({
            title: name,
            artist: singers.map((item) => item.name).join("/"),
            album: albumName,
            artwork: [
                {
                    src: `${cover}?param=96y96`,
                    sizes: "96x96",
                    type: "image/jpeg",
                },
                {
                    src: `${cover}?param=128y128`,
                    sizes: "128x128",
                    type: "image/jpeg",
                },
                {
                    src: `${cover}?param=192y192`,
                    sizes: "192x192",
                    type: "image/jpeg",
                },
                {
                    src: `${cover}?param=256y256`,
                    sizes: "256x256",
                    type: "image/jpeg",
                },
                {
                    src: `${cover}?param=384y384`,
                    sizes: "384x384",
                    type: "image/jpeg",
                },
                {
                    src: `${cover}?param=512y512`,
                    sizes: "512x512",
                    type: "image/jpeg",
                },
            ],
        });
    }, [playingSong]);

    // mediaSession ActionHandler
    useEffect(() => {
        if (!playingSong || !navigator.mediaSession || !MediaMetadata) {
            return;
        }
        navigator.mediaSession.setActionHandler("play", () => {
            audioRef.current!.play();
            setPlaying(true);
        });
        navigator.mediaSession.setActionHandler("pause", () => {
            audioRef.current!.pause();
            setPlaying(false);
        });
        navigator.mediaSession.setActionHandler("stop", () => {
            audioRef.current!.pause();
            setPlaying(false);
        });
        navigator.mediaSession.setActionHandler("previoustrack", null);
        navigator.mediaSession.setActionHandler("nexttrack", handleNext);
    }, [playingSong, handleNext]);

    if (!playingSong) {
        return <Loading />;
    }

    const { id, name, cover } = playingSong;

    return (
        <div className={style["personal-fm"]}>
            <div className="title">私人FM</div>
            <div className="music-box">
                <div className="image">
                    <img src={`${cover}?param=300y300`} />
                </div>
                <Link
                    className="song"
                    to={`/Song?id=${id}`}
                    target="_blank"
                    title={name}
                >
                    {name}
                </Link>
                <div className="progress-container" ref={progressContainerRef}>
                    <div
                        className="progress"
                        ref={progressRef}
                        onClick={handleSetProgress}
                    />
                </div>
                <div className="btn-container">
                    <div
                        className="icon"
                        title={playing ? "暂停" : "播放"}
                        onClick={handlePlayOrPause}
                    >
                        {playing ? (
                            <Icon type="icon-pause" />
                        ) : (
                            <Icon type="icon-play" />
                        )}
                    </div>
                    <div className="icon" title="喜欢" onClick={handleLike}>
                        {like ? (
                            <Icon
                                type="icon-heart-fill"
                                style={{ color: "#c62f2f" }}
                            />
                        ) : (
                            <Icon type="icon-heart" />
                        )}
                    </div>
                    <div className="icon" title="不喜欢" onClick={handleUnlike}>
                        <Icon type="icon-delete" />
                    </div>
                    <div className="icon" title="下一首" onClick={handleNext}>
                        <Icon type="icon-next" />
                    </div>
                </div>
            </div>
            <audio
                ref={audioRef}
                src={`https://music.163.com/song/media/outer/url?id=${id}`}
                onEnded={handleNext}
                onCanPlay={handleCanPlay}
                onTimeUpdate={handleTimeUpdate}
            />
        </div>
    );
}

export default PersonalFM;

import { Fragment, useContext } from "react";
import { FuncContext, StateContext } from "@/containers";
import { Link } from "react-router-dom";
import { Button, Icon } from "@/components";
import music from "@/utils/music";

import type { SongItem } from "@/containers";

interface Props {
    detailData: {
        title: string;
        cover: string;
        singers: { id: number; name: string }[];
        albumId: number;
        albumName: string;
    };
    songData: SongItem;
    lyric: [string, string, number][];
}

function SongDetail({ detailData, songData, lyric }: Props) {
    const { title, cover, singers, albumId, albumName } = detailData;
    const { id, isFree } = songData;

    const { playSong, collectSong, setPlaylist } = useContext(FuncContext);
    const { playingItem, playlist } = useContext(StateContext);

    // 播放歌曲
    const handlePlay = () => {
        // 正在播放该歌曲
        if (playingItem.id === songData.id) {
            return;
        }

        // 在播放列表中不包含该歌曲
        // 追加到当前播放列表
        if (!playlist.find((item) => item.id === songData.id)) {
            const newList = playlist.slice();
            newList.push(songData);
            setPlaylist(newList);
        }

        playSong(songData);
    };

    // 收藏歌曲
    const handleCollectSong = () => {
        collectSong(id);
    };

    // 下载歌曲
    const handleDownload = () => {
        music().download(id);
    };

    return (
        <>
            <div className="list-left">
                <div className="image">
                    <img src={`${cover}?param=240y240`} />
                </div>
            </div>
            <div className="list-right">
                <div className="title-song">{title}</div>
                <div className="singer">
                    歌手：
                    {singers.map(({ id, name }, idx) => (
                        <Fragment key={idx}>
                            <Link to={`/Singer?id=${id}`}>{name}</Link>
                            <span> / </span>
                        </Fragment>
                    ))}
                </div>
                <div>
                    所属专辑：
                    <Link to={`/Album?id=${albumId}`}>{albumName}</Link>
                </div>
                <div className="btns">
                    <Button
                        icon={<Icon type="icon-play" />}
                        onClick={handlePlay}
                        disabled={!isFree}
                        type="primary"
                    >
                        播放
                    </Button>
                    <Button
                        icon={<Icon type="icon-heart" />}
                        onClick={handleCollectSong}
                        disabled={!isFree}
                    >
                        添加到歌单
                    </Button>
                    <Button
                        icon={<Icon type="icon-download" />}
                        onClick={handleDownload}
                        disabled={!isFree}
                    >
                        下载
                    </Button>
                </div>
                <input
                    type="checkbox"
                    id="toggle-lyric"
                    className="toggle"
                    style={{ display: "none" }}
                />
                {lyric.length === 0 && <div>暂无歌词</div>}
                <div className="lyric">
                    {lyric.map(([origin, trans], idx) => (
                        <p key={idx}>
                            {origin}
                            {trans && (
                                <>
                                    <br />
                                    {trans}
                                </>
                            )}
                        </p>
                    ))}
                </div>
                <label htmlFor="toggle-lyric" />
            </div>
        </>
    );
}

export default SongDetail;

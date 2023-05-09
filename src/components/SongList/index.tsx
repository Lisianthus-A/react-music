import { Fragment, useState, useContext, useEffect, memo } from "react";
import style from "./index.module.scss";
import { Loading, Pagination, Icon, Toast, Modal } from "@/components";
import { Link } from "react-router-dom";
import { FuncContext, StateContext } from "@/containers";
import { songlistTracks } from "@/apis/playlist";
import { convertTime } from "@/utils";
import { useQuery } from "@/utils/hooks";
import { songDetail } from "@/apis/song";
import { resolveSongs } from "@/utils/resolve";
import music from "@/utils/music";

import type { SongItem } from "@/containers";

interface Props {
    songList?: SongItem[];
    isCreator?: boolean;
    songIds?: number[];
}

function SongList({ songList, songIds, isCreator }: Props) {
    const state = useContext(StateContext);
    const { playSong, collectSong, setPlaylist } = useContext(FuncContext);
    const playlistId = useQuery("id");
    const { playingItem, playlist } = state;

    const [currentList, setCurrentList] = useState<SongItem[]>(songList || []);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [visible, setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<SongItem | null>(null);

    //添加到播放列表
    const handleAddToPlaylist = (songItem: SongItem) => {
        // 播放列表中已有该歌曲
        if (playlist.find((item) => item.id === songItem.id)) {
            return;
        }

        // 追加到当前播放列表
        const newList = playlist.slice();
        newList.push(songItem);
        setPlaylist(newList);
    };

    //下载
    const handleDownload = (songItem: SongItem) => {
        const { id } = songItem;
        music().download(id);
    };

    // 播放指定歌曲
    const handlePlay = (songItem: SongItem) => {
        // 播放
        playSong(songItem);

        // 播放列表中已有该歌曲
        if (playlist.find((item) => item.id === songItem.id)) {
            return;
        }

        // 追加到当前播放列表
        const newList = playlist.slice();
        newList.push(songItem);
        setPlaylist(newList);
    };

    //收藏歌单中的某首歌
    const handleCollectSong = (id: number) => {
        collectSong(id);
    };

    //删除歌单中的某首歌
    const handleDelete = async () => {
        if (!selectedItem) {
            return;
        }

        await songlistTracks("del", playlistId as string, selectedItem.id);
        Toast.show("已删除");

        // 在 currentList 中删除
        const newList = currentList.filter(
            (item) => item.id !== selectedItem.id
        );
        setCurrentList(newList);
        setVisible(false);
    };

    useEffect(() => {
        // 根据分页加载数据
        const getData = async () => {
            setCurrentList([]);
            const start = (currentPage - 1) * 50;
            const ids = songIds!.slice(start, start + 50);
            const songRes = await songDetail(ids);
            setCurrentList(resolveSongs(songRes.songs, "detail"));
        };

        if (songIds) {
            getData();
        }
    }, [songIds, currentPage]);

    if (currentList.length === 0) {
        return <Loading />;
    }

    return (
        <div className={style.songlist}>
            <div className="title">
                歌曲列表
                {/* @ts-ignore */}
                <span>{(songList || songIds).length}首歌</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">歌曲标题</th>
                        <th scope="col">时长</th>
                        <th scope="col">歌手</th>
                        <th scope="col">专辑</th>
                    </tr>
                </thead>
                <tbody>
                    {currentList.map((item, index) => {
                        const {
                            id,
                            name,
                            singers,
                            duration,
                            isFree,
                            albumId,
                            albumName,
                        } = item;

                        return (
                            <tr key={id} className={isFree ? undefined : "fee"}>
                                <td>
                                    <span>
                                        {(currentPage - 1) * 50 + index + 1}
                                    </span>
                                    <Icon
                                        type="icon-play"
                                        className={
                                            playingItem.id === id
                                                ? "play-btn-playing"
                                                : "play-btn"
                                        }
                                        onClick={() => handlePlay(item)}
                                    />
                                </td>
                                <td>
                                    <Link to={`/Song?id=${id}`} title={name}>
                                        {name}
                                    </Link>
                                    <div className="icons">
                                        {isFree && (
                                            <>
                                                <Icon
                                                    type="icon-plus"
                                                    onClick={() =>
                                                        handleAddToPlaylist(
                                                            item
                                                        )
                                                    }
                                                />

                                                <Icon
                                                    type="icon-heart"
                                                    onClick={() =>
                                                        handleCollectSong(id)
                                                    }
                                                />
                                                <Icon
                                                    type="icon-download"
                                                    onClick={() =>
                                                        handleDownload(item)
                                                    }
                                                />
                                            </>
                                        )}
                                        {isCreator && (
                                            <Icon
                                                type="icon-delete"
                                                onClick={() => {
                                                    setVisible(true);
                                                    setSelectedItem(item);
                                                }}
                                            />
                                        )}
                                    </div>
                                </td>
                                <td>{convertTime(duration)}</td>
                                <td>
                                    {singers.map(({ id, name }, idx) => (
                                        <Fragment key={idx}>
                                            <Link
                                                to={`/Singer?id=${id}`}
                                                title={name}
                                                className={style.singer}
                                            >
                                                {name}
                                            </Link>
                                            {idx !== singers.length - 1 && (
                                                <span> / </span>
                                            )}
                                        </Fragment>
                                    ))}
                                </td>
                                <td>
                                    <Link
                                        to={`/Album?id=${albumId}`}
                                        title={albumName}
                                    >
                                        {albumName}
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                total={songIds?.length || 0}
                pageSize={50}
                onChange={setCurrentPage}
            />
            <Modal
                visible={visible}
                title="删除歌曲"
                onCancel={() => setVisible(false)}
                onOk={handleDelete}
            >
                是否要删除歌曲 {selectedItem?.name} ？
            </Modal>
        </div>
    );
}

export default memo(SongList);

import { useContext } from "react";
import { FuncContext } from "@/containers";
import { Link } from "react-router-dom";
import { Icon, Button } from "@/components";
import { songDetail } from "@/apis/song";

import type { SongItem } from "@/containers";
import { resolveSongs } from "@/utils/resolve";
import cache from "@/utils/cache";

interface Props {
    detailData: {
        title: string;
        cover: string;
        creator: {
            id: number;
            name: string;
            avatar: string;
            createTime: number;
        };
        tags: string[];
        isCreator: boolean;
        description: string;
    };
    songList?: SongItem[];
    songIds?: number[];
}

function PlaylistDetail({ detailData, songList, songIds }: Props) {
    const { setPlaylist, playSong } = useContext(FuncContext);

    const { title, cover, creator, tags, description } = detailData;

    const handlePlayAll = async () => {
        // 免费歌曲列表
        let freeSongList: SongItem[] = [];
        // 已有歌曲数据
        if (songList) {
            freeSongList = songList.filter((item) => item.isFree);
        } else if (songIds) {
            // 没有歌曲数据
            const count = Math.ceil(songIds.length * 0.02);
            // 分割 id， 每 50 个 id 请求一次
            for (let i = 0; i < count; ++i) {
                const startIndex = i * 50;
                const sliceIds = songIds.slice(startIndex, startIndex + 50);
                const res = await songDetail(sliceIds);
                const freeList = resolveSongs(res.songs, "detail").filter(
                    (item) => item.isFree
                );
                freeSongList = [...freeSongList, ...freeList];
            }
        }
        cache().delAll();
        setPlaylist(freeSongList);
        playSong(freeSongList[0]);
    };

    return (
        <>
            <div className="list-left">
                <div className="image">
                    <img src={`${cover}?param=240y240`} />
                </div>
            </div>
            <div className="list-right">
                <div className="title-playlist">{title}</div>
                <div className="creator">
                    <Link to={`/User?id=${creator.id}`}>
                        <img src={`${creator.avatar}?param=40y40`} />
                        {creator.name}
                    </Link>
                    {new Date(creator.createTime)
                        .toLocaleDateString()
                        .replace(/\//g, "-")}
                    创建
                </div>
                <div className="btns">
                    <Button
                        icon={<Icon type="icon-play" />}
                        onClick={handlePlayAll}
                    >
                        播放全部
                    </Button>
                </div>
                <div className="tags">
                    标签：
                    {tags.map((item, idx) => (
                        <span key={idx}>{item}</span>
                    ))}
                </div>
                <div className="description">{description}</div>
            </div>
        </>
    );
}

export default PlaylistDetail;

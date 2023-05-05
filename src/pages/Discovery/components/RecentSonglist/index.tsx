import { useContext } from "react";
import style from "./index.module.scss";
import { FuncContext, StateContext } from "@/containers";
import { Link } from "react-router-dom";
import { Icon } from "@/components";

import type { MouseEvent } from "react";
import type { PageState } from "../../index";

interface Props {
    data: PageState["recentSong"];
}

function RecentSonglist({ data }: Props) {
    const { playSong, setPlaylist } = useContext(FuncContext);
    const { playlist } = useContext(StateContext);

    // 播放点击的歌曲
    const handlePlay = (e: MouseEvent, index: number) => {
        e.preventDefault();
        const clickSong = data[index];
        const newPlaylist = playlist.slice();
        newPlaylist.push(clickSong);
        setPlaylist(newPlaylist);
        playSong(clickSong);
    };

    const renderList = (list: Props["data"], offset: number) =>
        list.map(({ id, name, cover, singers }, idx) => (
            <div className="item" key={id}>
                <div className="order">
                    {(idx + 1 + offset).toString().padStart(2, "0")}
                </div>
                <Link className="image" to={`/Song?id=${id}`}>
                    <img src={`${cover}?param=50y50`} loading="lazy" />
                    <div
                        className="play-button"
                        onClick={(e) => handlePlay(e, idx + offset)}
                    >
                        <Icon type="icon-play" />
                    </div>
                </Link>
                <div className="information">
                    <Link className="song-title" to={`/Song?id=${id}`}>
                        {name}
                    </Link>
                    <div className="singer">
                        {singers.map(({ name }) => name).join("/")}
                    </div>
                </div>
            </div>
        ));

    return (
        <div className={style["recent-songlist"]}>
            <div className={style.left}>{renderList(data.slice(0, 5), 0)}</div>
            <div className={style.right}>
                {renderList(data.slice(5, 10), 5)}
            </div>
        </div>
    );
}

export default RecentSonglist;

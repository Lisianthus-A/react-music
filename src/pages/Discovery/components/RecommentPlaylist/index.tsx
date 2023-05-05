import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { Icon } from "@/components";
import { replaceHttpToHttps as rp } from "@/utils";

import type { MouseEvent } from "react";
import type { PageState } from "../../index";

interface Props {
    data: PageState["recommendPlaylist"];
    onPlayAll: (id: number) => Promise<void>;
}

// 将播放次数转换成形如 x 万 的字符串
// 不满 1 万则原样返回
const convertCount = (count: number) => {
    if (count >= 10000) {
        return `${(count * 0.0001) >> 0} 万`;
    }
    return count;
};

function RecommentPlaylist({ data, onPlayAll }: Props) {
    // 点击播放按钮，直接播放歌单内所有歌曲
    const handlePlay = (e: MouseEvent, id: number) => {
        e.preventDefault();
        onPlayAll(id);
    };

    const renderList = (list: Props["data"]) => (
        <div className="playlist">
            {list.map(({ id, name, picUrl, playCount }) => (
                <div className="listitem" key={id}>
                    <Link className="image" to={`/Playlist?id=${id}`}>
                        <img
                            src={`${rp(picUrl)}?param=240y240`}
                            loading="lazy"
                        />
                        <div className="play-count">
                            <Icon type="icon-sound" />
                            {convertCount(playCount)}
                        </div>
                        <div
                            className="play-button"
                            onClick={(e) => handlePlay(e, id)}
                        >
                            <Icon type="icon-play" />
                        </div>
                    </Link>
                    <Link className="description" to={`/Playlist?id=${id}`}>
                        {name}
                    </Link>
                </div>
            ))}
        </div>
    );

    return (
        <div className={style["recommend-playlist"]}>
            {renderList(data.slice(0, 5))}
            {renderList(data.slice(5, 10))}
        </div>
    );
}

export default RecommentPlaylist;

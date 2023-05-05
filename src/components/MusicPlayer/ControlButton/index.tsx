import { memo, useContext } from "react";
import style from "./index.module.scss";
import { Icon } from "@/components";
import { StateContext, FuncContext } from "@/containers";

function ControlButton() {
    const { getSong, playSong, pauseSong } = useContext(FuncContext);
    const state = useContext(StateContext);
    const { isPlaying, playingItem } = state;

    // 切换歌曲
    const handleChangeMusic = (type: "next" | "prev") => {
        const song = getSong(type, state);
        playSong(song);
    };

    // 暂停或恢复播放
    const handlePlayOrPause = () => {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong(playingItem);
        }
    };

    return (
        <div className={style.container}>
            <div
                className="prev"
                title="上一首"
                onClick={() => handleChangeMusic("prev")}
            >
                <Icon type="icon-prev" />
            </div>
            <div
                className="play-or-pause"
                onClick={handlePlayOrPause}
                title="播放/暂停"
            >
                {isPlaying ? (
                    <Icon type="icon-pause" />
                ) : (
                    <Icon type="icon-play" />
                )}
            </div>
            <div
                className="next"
                title="下一首"
                onClick={() => handleChangeMusic("next")}
            >
                <Icon type="icon-next" />
            </div>
        </div>
    );
}

export default memo(ControlButton);

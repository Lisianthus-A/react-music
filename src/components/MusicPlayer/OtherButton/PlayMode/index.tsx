import { memo, useContext } from "react";
import style from "./index.module.scss";
import { FuncContext } from "@/containers";
import { Icon } from "@/components";

import type { State } from "@/containers";

interface Props {
    playMode: State["playMode"];
}

function PlayMode({ playMode }: Props) {
    const { setPlayMode } = useContext(FuncContext);

    // 设置播放模式
    const handleSetPlayMode = () => {
        let nextPlayMode: State["playMode"];
        if (playMode === "list-loop") {
            nextPlayMode = "random";
        } else if (playMode === "random") {
            nextPlayMode = "single-cycle";
        } else {
            nextPlayMode = "list-loop";
        }

        setPlayMode(nextPlayMode);
    };

    return (
        <div className={style["play-mode"]}>
            <div className="icon" onClick={handleSetPlayMode}>
                {playMode === "list-loop" && <Icon type="icon-cycle" />}
                {playMode === "random" && <Icon type="icon-random" />}
                {playMode === "single-cycle" && <Icon type="icon-single" />}
            </div>
        </div>
    );
}

export default memo(PlayMode);

import { useState, useRef, useContext, useMemo, memo } from "react";
import style from "./index.module.scss";
import { ProgressBar as CProgressBar } from "@/components";
import { convertTime } from "@/utils";
import { FuncContext } from "@/containers";

import type { State } from "@/containers";

interface Props {
    playingItem: State["playingItem"];
    currentTime: number;
    setCurrentTime: (value: number) => void;
}

function ProgressBar({ playingItem, currentTime, setCurrentTime }: Props) {
    const { duration } = playingItem;

    const railRef = useRef<HTMLDivElement>(null);
    const tipRef = useRef<HTMLDivElement>(null);
    const { playSong } = useContext(FuncContext);

    // 鼠标抬起
    const handleMouseUp = (e: any) => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);

        const width = window.innerWidth < 1000 ? 1000 : window.innerWidth;
        const percent = e.clientX / width;

        let offset = percent * duration;
        // 越界处理
        if (offset < 0) {
            offset = 0;
        } else if (offset > duration) {
            offset = duration;
        }
        setCurrentTime(offset);
        playSong(playingItem, offset);
    };

    // 鼠标移动
    const handleMouseMove = (e: any) => {
        const width = window.innerWidth < 1000 ? 1000 : window.innerWidth;
        let percent = e.clientX / width;
        // 越界处理
        if (percent > 1) {
            percent = 1;
        } else if (percent < 0) {
            percent = 0;
        }
        railRef.current!.style.width = `${percent * 100}%`;
        tipRef.current!.textContent = convertTime(percent * duration);
    };

    return (
        <CProgressBar
            className={style.progressbar}
            onChangeEnd={(value) => playSong(playingItem, value)}
            tipFormatter={convertTime}
            max={duration}
            value={currentTime}
        />
        // <div className={style.progressbar}>
        //     <div className="track" onMouseDown={handleMouseDown} />
        //     <div
        //         className="rail"
        //         onMouseDown={handleMouseDown}
        //         ref={railRef}
        //         style={railStyle}
        //     >
        //         <div className="handle" />
        //         <div
        //             className="tooltip"
        //             ref={tipRef}
        //             style={{ display: visible ? "block" : "none" }}
        //         />
        //     </div>
        // </div>
    );
}

export default memo(ProgressBar);

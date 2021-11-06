import React, { useState, useRef, useContext, useMemo, memo } from 'react';
import style from './index.module.scss';
import { convertTime } from 'Utils/index';
import { FuncContext } from 'AppContainer/index';

import type { State } from 'AppContainer/index';

interface Props {
    playingItem: State['playingItem'];
    currentTime: number;
    setCurrentTime: (value: number) => void;
}

function ProgressBar({ playingItem, currentTime, setCurrentTime }: Props) {
    const { duration } = playingItem;

    // 文本框是否可见
    const [visible, setVisible] = useState(false);

    const railRef = useRef(null);
    const tipRef = useRef(null);
    const { playSong } = useContext(FuncContext);

    // 鼠标按下
    const handleMouseDown = (e: any) => {
        // 按下的不是鼠标左键
        if (e.button !== 0) {
            return;
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        setVisible(true);
        const width = window.innerWidth < 1000 ? 1000 : window.innerWidth;
        const percent = e.clientX / width;
        railRef.current.style.width = `${percent * 100}%`;
        tipRef.current.textContent = convertTime(percent * duration);
    }

    // 鼠标抬起
    const handleMouseUp = (e: any) => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);

        setVisible(false);
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
    }

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
        railRef.current.style.width = `${percent * 100}%`;
        tipRef.current.textContent = convertTime(percent * duration);
    }

    const railStyle = useMemo(() => {
        // 文本框可见，说明正在拖动
        if (visible) {
            return { width: railRef.current.style.width };
        }

        return { width: `${currentTime / duration * 100}%` };
    }, [currentTime, duration]);

    return (
        <div className={style.progressbar}>
            <div className="track" onMouseDown={handleMouseDown} />
            <div className="rail" onMouseDown={handleMouseDown} ref={railRef} style={railStyle}>
                <div className="handle" />
                <div className="tooltip" ref={tipRef} style={{ display: visible ? 'block' : 'none' }} />
            </div>
        </div>
    );
}

export default memo(ProgressBar);
import React, { useState, useCallback, useRef } from 'react';
import style from './index.module.scss';
import { convertTime } from 'Utils';

const ProgressBar = ({ currentTime, duration, audioRef }) => {

    const [visible, setVisible] = useState(false);  //文本框是否可见
    const railRef = useRef(null);
    const tipRef = useRef(null);

    //鼠标按下
    const handleMouseDown = useCallback((e) => {
        if (e.button !== 0) {  //按下的不是鼠标左键
            return;
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        setVisible(true);
        const width = window.innerWidth < 1000 ? 1000 : window.innerWidth;
        const percent = e.clientX / width;
        railRef.current.style.width = `${percent * 100}%`;
        tipRef.current.textContent = convertTime(percent * duration);
    },
        [duration]
    );

    //鼠标抬起
    const handleMouseUp = useCallback((e) => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);

        setVisible(false);
        const width = window.innerWidth < 1000 ? 1000 : window.innerWidth;
        const percent = e.clientX / width;
        audioRef.current.currentTime = percent * duration;
    },
        [duration]
    );

    //鼠标移动
    const handleMouseMove = useCallback((e) => {
        const width = window.innerWidth < 1000 ? 1000 : window.innerWidth;
        const percent = e.clientX / width;
        railRef.current.style.width = `${percent * 100}%`;
        tipRef.current.textContent = convertTime(percent * duration);
    },
        [duration]
    );

    const getStyle = useCallback(() => {
        if (visible) {  //文本框可见，说明正在拖动
            return { width: railRef.current.style.width };
        } else {
            return { width: `${currentTime / duration * 100}%` };
        }
    },
        [currentTime, duration]
    );

    return (
        <div className={style.progressbar}>
            <div className={style.track} onMouseDown={handleMouseDown}></div>
            <div className={style.rail} onMouseDown={handleMouseDown} ref={railRef} style={getStyle()}>
                <div className={style.handle}></div>
                <div className={style.tooltip} ref={tipRef} style={{ display: visible ? 'block' : 'none' }}>00:00</div>
            </div>
        </div>
    );
}

export default ProgressBar;
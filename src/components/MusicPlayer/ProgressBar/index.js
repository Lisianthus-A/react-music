import React, { useState, useCallback, useRef } from 'react';
import './index.scss';
import { convertTime } from 'Utils';

const ProgressBar = ({ audioRef, current, duration }) => {
    const [visible, setVisible] = useState(false);  //文本框是否可见
    const railRef = useRef(null);
    const tipRef = useRef(null);

    //鼠标按下
    const handleMouseDown = useCallback((e) => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        setVisible(true);
        const percent = e.clientX / window.innerWidth;
        railRef.current.style.width = `${percent * 100}%`;
        tipRef.current.innerText = convertTime(percent * duration);
    },
        [duration]
    );

    //鼠标抬起
    const handleMouseUp = useCallback((e) => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);

        setVisible(false);
        const percent = e.clientX / window.innerWidth;
        audioRef.current.currentTime = percent * duration;
    },
        [duration]
    );

    //鼠标移动
    const handleMouseMove = useCallback((e) => {
        const percent = e.clientX / window.innerWidth;
        railRef.current.style.width = `${percent * 100}%`;
        tipRef.current.innerText = convertTime(percent * duration);
    },
        [duration]
    );

    const getStyle = useCallback(() => {
        if (visible) {  //文本框可见，说明正在拖动
            return { width: railRef.current.style.width };
        } else {
            return { width: `${current / duration * 100}%` };
        }
    },
        [current, duration]
    );

    return (
        <div className='progressbar'>
            <div className='track' onMouseDown={handleMouseDown}></div>
            <div className='rail' onMouseDown={handleMouseDown} ref={railRef} style={getStyle()}>
                <div className='handle'></div>
                <div className='tooltip' ref={tipRef} style={{ display: visible ? 'block' : 'none' }}>00:00</div>
            </div>
        </div>
    );
}

export default ProgressBar;
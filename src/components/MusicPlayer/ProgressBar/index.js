import React, { useState } from 'react';
import './index.scss';
import { Slider } from 'antd';
import { convertTime } from '../../../utils/';

const ProgressBar = ({ audioRef, progress, setTime, duration }) => {
    const [value, setValue] = useState(null);
    const [visible, setVisible] = useState(false);  //文本框是否可见

    const handleChange = (value) => {
        setValue(value);  //使Slider展示value的值，而不是props传入的progress
        setVisible(true);
    }
    
    const handleAfterChange = (value) => {
        const percent = value / 10000;
        audioRef.current.currentTime = percent * duration;
        setTime(percent * duration);
        setVisible(false);
        setValue(null);
    }

    //文本框显示的文本
    const tipFormatter = (value) => {
        const percent = value / 10000;
        return convertTime(percent * duration);
    }

    return (
        <div className='progressbar'>
            <Slider
                value={value || progress}
                max={10000}
                onChange={handleChange}
                onAfterChange={handleAfterChange}
                tipFormatter={tipFormatter}
                tooltipVisible={visible}
            />
        </div>
    );
}

export default ProgressBar;
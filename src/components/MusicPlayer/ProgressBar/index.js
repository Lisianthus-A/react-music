import React, { useState, useCallback } from 'react';
import './index.scss';
import { Slider } from 'antd';
import { convertTime } from 'Utils';

const ProgressBar = ({ audioRef, current, setTime, duration }) => {
    /*
        ant Slider有问题，以后重构
     
    const [value, setValue] = useState(null);
    const [visible, setVisible] = useState(false);  //文本框是否可见

    const handleChange = useCallback((value) => {
        setValue(value);  //使Slider展示value的值
        setVisible(true);
        console.log('change', value);
    },
        []
    );

    const handleAfterChange = (value) => {
        console.log('after');
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
    */

    return (
        <div className='progressbar'>
            <Slider
                value={current / duration * 10000}
                max={10000}
                // onChange={handleChange}
                // onAfterChange={handleAfterChange}
                // tipFormatter={tipFormatter}
                tooltipVisible={false}
            />
        </div>
    );
}

export default ProgressBar;
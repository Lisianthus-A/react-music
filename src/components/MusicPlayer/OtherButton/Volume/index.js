import React from 'react';
import './index.scss';
import { Slider } from 'antd';
import { SoundOutlined } from '@ant-design/icons';

const Volume = ({ audioRef }) => {
    //设置音量
    const handleChange = (value) => {
        audioRef.current.volume = value / 100;
    }

    return (
        <div className='volume'>
            <div className='icon' title='音量'><SoundOutlined /></div>
            <div className='slider'>
                <Slider defaultValue={100} onChange={handleChange} tipFormatter={(value) => `${value}%`} />
            </div>
        </div>
    );
}

export default Volume;
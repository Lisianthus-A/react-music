import React from 'react';
import './index.scss';
import { UnorderedListOutlined, SoundOutlined, RetweetOutlined } from '@ant-design/icons';
import { Slider } from 'antd';

const OtherButton = ({ audioRef }) => {

    //设置音量
    const handleChange = (value) => {
        audioRef.current.volume = value / 100;
    }

    return (
        <div className='other-button'>
            <div className='playlist'><UnorderedListOutlined /></div>
            <div className='play-mode'><RetweetOutlined /></div>
            <div className='volume'>
                <div className='icon'><SoundOutlined /></div>
                <div className='slider'>
                    <Slider defaultValue={100} onChange={handleChange} tipFormatter={(value) => `${value}%`} />
                </div>
            </div>
        </div>
    );
}

export default OtherButton;
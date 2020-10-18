import React from 'react';
import './index.scss';
import { UnorderedListOutlined, SoundOutlined, RetweetOutlined } from '@ant-design/icons';

const OtherButton = (props) => {
    //audio volume设置或返回音量   default 1
    return (
        <div className='other-button'>
            <div className='playlist'><UnorderedListOutlined /></div>
            <div className='play-mode'><RetweetOutlined /></div>
            <div className='volume'><SoundOutlined /></div>
        </div>
    );
}

export default OtherButton;
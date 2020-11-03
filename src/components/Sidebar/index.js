import React, { useState, useEffect, memo } from 'react';
import './index.scss';
import { useHistory, useLocation } from 'react-router-dom';
import {
    HeartOutlined,
    SearchOutlined,
    VideoCameraOutlined,
    CustomerServiceOutlined,
    GithubOutlined,
    FileTextOutlined
} from '@ant-design/icons';

const Sidebar = memo(() => {
    const [currentKey, setKey] = useState(0);
    const history = useHistory();
    const { pathname } = useLocation();

    const handleClick = (key) => {
        setKey(key);
        history.replace(key);
    }

    useEffect(() => {
        setKey(pathname);
    },
        [pathname]
    );

    return (
        <>
            <input type='checkbox' id='toggle' style={{ display: 'none' }} />
            <div className='sidebar'>
                <div className='category'>推荐</div>
                {
                    [
                        { text: '发现音乐', Icon: SearchOutlined, key: '/Discovery' },
                        { text: '私人FM', Icon: CustomerServiceOutlined, key: '/PersonalFM' },
                        { text: '视频', Icon: VideoCameraOutlined, key: '/Video' }
                    ].map(
                        ({ key, text, Icon }) =>
                            <div
                                className={currentKey === key ? 'item active' : 'item'}
                                key={key}
                                onClick={() => handleClick(key)}
                            >
                                <Icon /> {text}
                            </div>
                    )
                }
                <div className='category'>我的音乐</div>
                {
                    [
                        { text: '我的歌单', Icon: HeartOutlined, key: '/MySongList' }
                    ].map(
                        ({ key, text, Icon }) =>
                            <div
                                className={currentKey === key ? 'item active' : 'item'}
                                key={key}
                                onClick={() => handleClick(key)}
                            >
                                <Icon /> {text}
                            </div>
                    )
                }
                <div className='category'>GitHub</div>
                <div className='item' onClick={() => window.open('https://github.com/lisianthus-a/react-music')}>
                    <GithubOutlined /> 项目地址
                </div>
                <div className='item' onClick={() => window.open('https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi')}>
                    <FileTextOutlined /> API文档
                </div>
            </div>
            <label htmlFor="toggle">
                <div className='toggle-button'>
                    <span className='arrow' ></span>
                </div>
            </label>
        </>
    );
});

export default Sidebar;
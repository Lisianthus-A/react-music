import React, { useState, useEffect, memo } from 'react';
import './index.scss';
import { useLocation } from 'react-router-dom';
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
    const { pathname } = useLocation();

    useEffect(() => {
        setKey(pathname.slice(1));
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
                        { text: '发现音乐', Icon: SearchOutlined, key: 'Discovery' },
                        { text: '私人FM', Icon: CustomerServiceOutlined, key: 'PersonalFM' },
                        { text: '视频', Icon: VideoCameraOutlined, key: 'Video' }
                    ].map(
                        ({ key, text, Icon }) =>
                            <a
                                className={currentKey === key ? 'item active' : 'item'}
                                key={key}
                                href={`/#/${key}`}
                            >
                                <Icon /> {text}
                            </a>
                    )
                }
                <div className='category'>我的音乐</div>
                {
                    [
                        { text: '我的歌单', Icon: HeartOutlined, key: 'MySongList' }
                    ].map(
                        ({ key, text, Icon }) =>
                            <a
                                className={currentKey === key ? 'item active' : 'item'}
                                key={key}
                                href={`/#/${key}`}
                            >
                                <Icon /> {text}
                            </a>
                    )
                }
                <div className='category'>GitHub</div>
                <a className='item' href="https://github.com/lisianthus-a/react-music" target="_blank">
                    <GithubOutlined /> 项目地址
                </a>
                <a className='item' href="https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi" target="_blank">
                    <FileTextOutlined /> API文档
                </a>
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
import React, { useState, useEffect, memo } from 'react';
import style from './index.module.scss';
import { useLocation, Link } from 'react-router-dom';
import {
    HeartOutlined,
    SearchOutlined,
    // VideoCameraOutlined,
    CustomerServiceOutlined,
    GithubOutlined,
    FileTextOutlined
} from '@ant-design/icons';

function Sidebar() {
    const [currentKey, setKey] = useState('Discovery');
    const { pathname } = useLocation();

    useEffect(() => {
        setKey(pathname.slice(1));
    }, [pathname]);

    return (
        <div className={style.container}>
            <input type='checkbox' id='toggle' className="input-toggle" />
            <div className="sidebar">
                <div className="category">推荐</div>
                {[
                    { text: '发现音乐', Icon: SearchOutlined, key: 'Discovery' },
                    // { text: '私人FM', Icon: CustomerServiceOutlined, key: 'PersonalFM' },
                    // { text: '视频', Icon: VideoCameraOutlined, key: 'Video' }
                ].map(({ key, text, Icon }) =>
                    <Link
                        className={currentKey === key ? 'item active' : 'item'}
                        key={key}
                        to={`/${key}`}
                    >
                        <Icon /> {text}
                    </Link>
                )}
                <div className="category">我的音乐</div>
                {[
                    { text: '我的歌单', Icon: HeartOutlined, key: 'MySongList' }
                ].map(({ key, text, Icon }) =>
                    <Link
                        className={currentKey === key ? 'item active' : 'item'}
                        key={key}
                        to={`/${key}`}
                    >
                        <Icon /> {text}
                    </Link>
                )}
                <div className="category">GitHub</div>
                <a className="item" href="https://github.com/lisianthus-a/react-music" target="_blank">
                    <GithubOutlined /> 项目地址
                </a>
                <a className="item" href="https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi" target="_blank">
                    <FileTextOutlined /> API文档
                </a>
            </div>
            <label htmlFor="toggle">
                <div className="toggle" />
            </label>
        </div>
    );
}

export default memo(Sidebar);
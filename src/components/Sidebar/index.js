import React, { useState, forwardRef } from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';
import { HeartOutlined, SearchOutlined, VideoCameraOutlined, CustomerServiceOutlined } from '@ant-design/icons';

const Sidebar = forwardRef((props, ref) => {
    const [currentKey, setKey] = useState(0);
    const history = useHistory();

    const handleClick = (key, route) => {
        setKey(key);
        history.replace(route);
    }

    return (
        <div className='sidebar' ref={ref}>
            <div className='category'>推荐</div>
            {
                [
                    { text: '发现音乐', route: '/Discovery', Icon: SearchOutlined, key: 0 },
                    { text: '私人FM', route: '/Discovery', Icon: CustomerServiceOutlined, key: 1 },
                    { text: '视频', route: '/Discovery', Icon: VideoCameraOutlined, key: 2 }
                ].map(
                    e =>
                        <div
                            className={currentKey === e.key ? 'item active' : 'item'}
                            key={e.key}
                            onClick={() => handleClick(e.key, e.route)}
                        >
                            <e.Icon /> {e.text}
                        </div>
                )
            }
            <div className='category'>我的音乐</div>
            {
                [
                    { text: '我的歌单', route: '/Discovery', Icon: HeartOutlined, key: 3 }
                ].map(
                    e =>
                        <div
                            className={currentKey === e.key ? 'item active' : 'item'}
                            key={e.key}
                            onClick={() => handleClick(e.key, e.route)}
                        >
                            <e.Icon /> {e.text}
                        </div>
                )
            }
        </div>
    );
});

export default Sidebar;
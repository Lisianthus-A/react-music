import React, { useState } from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';
import { QuestionOutlined, HeartOutlined, SearchOutlined } from '@ant-design/icons';

const Sidebar = () => {
    const [currentKey, setKey] = useState(0);
    const history = useHistory();

    const handleClick = (key, route) => {
        setKey(key);
        history.replace(route);
    }

    return (
        <div className='sidebar'>
            {
                [
                    { text: '发现音乐', route: '/Discovery', Icon: SearchOutlined, key: 0 },
                    { text: '我的收藏', route: '/Discovery', Icon: HeartOutlined, key: 1 },
                    { text: 'text', route: '/Discovery', Icon: QuestionOutlined, key: 2 },
                    { text: 'text', route: '/Discovery', Icon: QuestionOutlined, key: 3 }
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
}

export default Sidebar;
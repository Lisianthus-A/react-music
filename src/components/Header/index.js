import React, { useState } from 'react';
import './index.scss';
import { Avatar, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import LoginView from './LoginView';

const Header = () => {
    const [name, setName] = useState(null);
    const [visible, setVisible] = useState(false);
    const [avatarImg, setImg] = useState(null);

    const toggleVisible = () => {
        if (name !== null) {  //已登录
            return;
        }
        setVisible(!visible);
    }

    return (
        <div className='header'>
            <LoginView visible={visible} onClose={toggleVisible} onSetName={setName} onSetImg={setImg} />
            {
                avatarImg ?
                    <img src={avatarImg} alt='' />
                    : <Avatar size={40} icon={<UserOutlined />} onClick={toggleVisible} />
            }
            <div className='username'>{name ? name : '未登录'}</div>
            <Input.Search
                className='search'
                placeholder="搜索音乐"
                onSearch={value => console.log(value)}
            />
        </div>
    );
}

export default Header;
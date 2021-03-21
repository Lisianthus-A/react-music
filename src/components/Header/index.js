import React, { useState, useEffect, memo } from 'react';
import style from './index.module.scss';
import './reset.scss';
import { Avatar, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import LoginView from './LoginView';
import { hasToken } from 'Utils';
import { logout } from 'Apis/login';

const Header = memo(() => {
    const [name, setName] = useState(null);
    const [visible, setVisible] = useState(false);
    const [avatarImg, setImg] = useState(null);

    useEffect(() => {
        if (hasToken()) {  //token 未过期
            const name = window.localStorage.getItem('username');
            const img = window.localStorage.getItem('avatar');
            if (name && img) {
                setName(window.localStorage.getItem('username'));
                setImg(window.localStorage.getItem('avatar'));
            }
        }
    }, []);

    const toggleVisible = () => {
        if (name !== null) {  //已登录
            return;
        }
        setVisible(!visible);
    }

    //退出登录
    const handleLogout = async () => {
        const result = await logout();
        if (result.code === 200) {
            window.localStorage.clear();
            setName(null);
            setImg(null);
        }
    }

    return (
        <div className={style.header + ' header'}>
            <LoginView visible={visible} onClose={toggleVisible} onSetName={setName} onSetImg={setImg} />
            <Avatar size={40} icon={<UserOutlined />} onClick={toggleVisible} src={avatarImg ? `${avatarImg}?param=80y80` : ''} />
            <div className={style.username}>{name || '未登录'}</div>
            {name && <div className={style.logout} onClick={handleLogout}>退出登录</div>}
            <Input.Search
                className={style.search}
                placeholder="搜索音乐"
                onSearch={value => console.log(value)}
            />
        </div>
    );
});

export default Header;
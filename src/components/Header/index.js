import React, { useState } from 'react';
import './index.scss';
import { Avatar, Input, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ModalView from './ModalView';

const Header = () => {
    const [name, setName] = useState('未登录');

    const handleClick = () => {
        Modal.info({
            title: '用户登录',
            maskClosable: true,
            okButtonProps: { style: { display: 'none' } },
            content: <ModalView />
        });
    }

    return (
        <div className='header'>
            <Avatar size={40} icon={<UserOutlined />} onClick={handleClick} />
            <div className='username'>{name}</div>
            <Input.Search
                className='search'
                placeholder="搜索音乐"
                onSearch={value => console.log(value)}
            />
        </div>
    );
}

export default Header;
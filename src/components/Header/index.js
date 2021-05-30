import React, { useState, useEffect, memo } from 'react';
import { useHistory } from 'react-router';
import style from './index.module.scss';
import './reset.scss';
import { Avatar, Select } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import LoginView from './LoginView';
import { hasToken, replaceHttpToHttps as rp, debounce } from 'Utils/index';
import { logout } from 'Apis/login';
import { searchSuggest } from 'Apis/search';

const Header = memo(() => {
    const [name, setName] = useState(null);
    const [visible, setVisible] = useState(false);
    const [avatarImg, setImg] = useState(null);
    const history = useHistory();
    const [focus, setFocus] = useState(false);  // 搜索框是否 focus
    const [dropdownItem, setDropdownItem] = useState({});

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

    //搜索
    const handleSearch = debounce(async (value) => {
        if (value === '') {
            return;
        }
        const { result } = await searchSuggest(value);
        //单曲
        if (Array.isArray(result.songs)) {
            result.songs = result.songs.map(item => ({
                text: `${item.name} - ${item.artists.map(ar => ar.name).join('/')}`,
                value: `/Song?id=${item.id}`
            }));
        }
        //专辑
        if (Array.isArray(result.albums)) {
            result.albums = result.albums.map(item => ({
                text: `${item.name} - ${item.artist.name}`,
                value: `/Album?id=${item.id}`
            }));
        }
        //歌手
        if (Array.isArray(result.artists)) {
            result.artists = result.artists.map(item => ({
                text: item.name,
                value: `/Singer?id=${item.id}`
            }));
        }
        //歌单
        if (Array.isArray(result.playlist)) {
            result.playlist = result.playlist.map(item => ({
                text: item.name,
                value: `/SongList?id=${item.id}`
            }));
        }
        setDropdownItem(result);
    }, 500);

    const handleSelectChange = (value) => {
        setDropdownItem({});
        history.push(value);
    }

    return (
        <div className={style.header + ' header'}>
            <LoginView visible={visible} onClose={toggleVisible} onSetName={setName} onSetImg={setImg} />
            <Avatar size={40} icon={<UserOutlined />} onClick={toggleVisible} src={avatarImg ? `${rp(avatarImg)}?param=80y80` : ''} />
            <div className={style.username}>{name || '未登录'}</div>
            {name && <div className={style.logout} onClick={handleLogout}>退出登录</div>}
            <Select
                showSearch
                className={style.search}
                style={{ width: focus ? 320 : 160 }}
                dropdownMatchSelectWidth={320}
                notFoundContent={null}
                placeholder="搜索音乐"
                value={null}
                suffixIcon={<SearchOutlined />}
                onChange={handleSelectChange}
                onSearch={handleSearch}
                filterOption={false}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            >
                {dropdownItem.songs &&
                    <Select.OptGroup label="单曲">
                        {dropdownItem.songs.map(({ value, text }) =>
                            <Select.Option key={value} value={value}>{text}</Select.Option>
                        )}
                    </Select.OptGroup>
                }
                {dropdownItem.albums &&
                    <Select.OptGroup label="专辑">
                        {dropdownItem.albums.map(({ value, text }) =>
                            <Select.Option key={value} value={value}>{text}</Select.Option>
                        )}
                    </Select.OptGroup>
                }
                {dropdownItem.artists &&
                    <Select.OptGroup label="歌手">
                        {dropdownItem.artists.map(({ value, text }) =>
                            <Select.Option key={value} value={value}>{text}</Select.Option>
                        )}
                    </Select.OptGroup>
                }
                {dropdownItem.playlist &&
                    <Select.OptGroup label="歌单">
                        {dropdownItem.playlist.map(({ value, text }) =>
                            <Select.Option key={value} value={value}>{text}</Select.Option>
                        )}
                    </Select.OptGroup>
                }
            </Select>
        </div>
    );
});

export default Header;
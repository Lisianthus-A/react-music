import React, { useState, useEffect, memo } from 'react';
import { useHistory } from 'react-router-dom';
import style from './index.module.scss';
import { Avatar, Select } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import LoginView from './LoginView';
import { hasToken, replaceHttpToHttps as rp, debounce } from 'Utils/index';
import { logout } from 'Apis/login';
import { searchSuggest } from 'Apis/search';

function Header() {
    const [name, setName] = useState(null);
    const [visible, setVisible] = useState(false);
    const [avatarImg, setImg] = useState(null);
    const history = useHistory();
    const [focus, setFocus] = useState(false);  // 搜索框是否 focus
    const [dropdownItem, setDropdownItem] = useState<Record<string, any>>({});

    useEffect(() => {
        // token 未过期
        if (hasToken()) {
            const name = window.localStorage.getItem('username');
            const img = window.localStorage.getItem('avatar');
            if (name && img) {
                setName(window.localStorage.getItem('username'));
                setImg(window.localStorage.getItem('avatar'));
            }
        }
    }, []);

    const toggleVisible = () => {
        // 已登录
        if (name !== null) {
            return;
        }
        setVisible(!visible);
    }

    // 退出登录
    const handleLogout = async () => {
        const result = await logout();
        if (result.code === 200) {
            window.localStorage.clear();
            setName(null);
            setImg(null);
        }
    }

    // 搜索
    const handleSearch = debounce(async (value: string) => {
        if (value === '') {
            return;
        }
        const { result } = await searchSuggest(value);
        // 单曲
        if (Array.isArray(result.songs)) {
            result.songs = result.songs.map(item => ({
                text: `${item.name} - ${item.artists.map(ar => ar.name).join('/')}`,
                value: `/Song?id=${item.id}`
            }));
        }
        // 专辑
        if (Array.isArray(result.albums)) {
            result.albums = result.albums.map(item => ({
                text: `${item.name} - ${item.artist.name}`,
                value: `/Album?id=${item.id}`
            }));
        }
        // 歌手
        if (Array.isArray(result.artists)) {
            result.artists = result.artists.map(item => ({
                text: item.name,
                value: `/Singer?id=${item.id}`
            }));
        }
        // 歌单
        if (Array.isArray(result.playlists)) {
            result.playlists = result.playlists.map(item => ({
                text: item.name,
                value: `/Playlist?id=${item.id}`
            }));
        }
        setDropdownItem(result);
    }, 800);

    const handleSelectChange = (value: string) => {
        setDropdownItem({});
        history.push(value);
    }

    return (
        <div className={style.header}>
            <LoginView visible={visible} onClose={toggleVisible} onSetName={setName} onSetImg={setImg} />
            <Avatar
                // @ts-ignore
                onClick={toggleVisible}
                size={40}
                icon={<UserOutlined />}
                src={avatarImg ? `${rp(avatarImg)}?param=80y80` : ''}
            />
            <div className="username">{name || '未登录'}</div>
            {name &&
                <div className="logout" onClick={handleLogout}>退出登录</div>
            }
            <Select
                showSearch
                className="search"
                style={{ width: focus ? 320 : 160 }}
                dropdownMatchSelectWidth={320}
                placeholder="搜索音乐"
                value={null}
                suffixIcon={<SearchOutlined />}
                onChange={handleSelectChange}
                onSearch={handleSearch}
                filterOption={false}
                onFocus={() => setFocus(true)}
                onBlur={() => {
                    setFocus(false);
                    setDropdownItem({});
                }}
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
                {dropdownItem.playlists &&
                    <Select.OptGroup label="歌单">
                        {dropdownItem.playlists.map(({ value, text }) =>
                            <Select.Option key={value} value={value}>{text}</Select.Option>
                        )}
                    </Select.OptGroup>
                }
            </Select>
        </div>
    );
}

export default memo(Header);
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { debounce } from 'Utils/index';
import { searchSuggest } from 'Apis/search';

type DropdownItemsMap = Record<string, {
    path: string;
    text: string;
}[]>;

function Search() {
    const history = useHistory();
    // 当前搜索内容
    const [searchValue, setSearchValue] = useState<string>('');
    // 搜索框是否 focus
    const [focus, setFocus] = useState(false);
    const inputRef = useRef(null);
    // 下拉列表
    const [dropdownItemsMap, setDropdownItemsMap] = useState<DropdownItemsMap>({});

    // 获取搜索建议
    const getSuggest = useCallback(debounce(async (value: string) => {
        const { result } = await searchSuggest(value);
        const map: DropdownItemsMap = {};
        // 单曲
        if (Array.isArray(result.songs)) {
            map.songs = result.songs.map(item => ({
                path: `/Song?id=${item.id}`,
                text: `${item.name} - ${item.artists.map(ar => ar.name).join('/')}`
            }));
        }
        // 专辑
        if (Array.isArray(result.albums)) {
            map.albums = result.albums.map(item => ({
                path: `/Album?id=${item.id}`,
                text: `${item.name} - ${item.artist.name}`
            }));
        }
        // 歌手
        if (Array.isArray(result.artists)) {
            map.singers = result.artists.map(item => ({
                path: `/Singer?id=${item.id}`,
                text: item.name
            }));
        }
        // 歌单
        if (Array.isArray(result.playlists)) {
            map.playlists = result.playlists.map(item => ({
                path: `/Playlist?id=${item.id}`,
                text: item.name,
            }));
        }
        setDropdownItemsMap(map);
    }, 800), []);

    // 搜索内容变化，获取搜索建议
    useEffect(() => {
        if (searchValue) {
            getSuggest(searchValue);
        }
    }, [searchValue]);

    return (
        <div className="search-container">
            <Input
                className="search-input"
                placeholder="搜索音乐"
                suffix={<SearchOutlined />}
                ref={inputRef}
                onFocus={() => setFocus(true)}
                onBlur={() => setTimeout(setFocus, 100, false)}
                value={searchValue}
                onChange={(evt) => setSearchValue(evt.target.value)}
                onPressEnter={() => {
                    // 按下回车键，跳转到搜索结果页
                    inputRef.current && inputRef.current.blur();
                    history.push(`/Search?keyword=${searchValue}`);
                    setSearchValue('');
                    setDropdownItemsMap({});
                }}
                style={{ width: focus ? 320 : 160 }}
            />
            {focus &&
                <div className="search-suggest">
                    {dropdownItemsMap.songs &&
                        <div>
                            <div className="search-suggest-title">单曲</div>
                            <div className="search-suggest-list">
                                {dropdownItemsMap.songs.map(item => (
                                    <Link
                                        className="search-suggest-item"
                                        to={item.path}
                                        key={item.path}
                                    >
                                        {item.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    }
                    {dropdownItemsMap.albums &&
                        <div>
                            <div className="search-suggest-title">专辑</div>
                            <div className="search-suggest-list">
                                {dropdownItemsMap.albums.map(item => (
                                    <Link
                                        className="search-suggest-item"
                                        to={item.path}
                                        key={item.path}
                                    >
                                        {item.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    }
                    {dropdownItemsMap.singers &&
                        <div>
                            <div className="search-suggest-title">歌手</div>
                            <div className="search-suggest-list">
                                {dropdownItemsMap.singers.map(item => (
                                    <Link
                                        className="search-suggest-item"
                                        to={item.path}
                                        key={item.path}
                                    >
                                        {item.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    }
                    {dropdownItemsMap.playlists &&
                        <div>
                            <div className="search-suggest-title">歌单</div>
                            <div className="search-suggest-list">
                                {dropdownItemsMap.playlists.map(item => (
                                    <Link
                                        className="search-suggest-item"
                                        to={item.path}
                                        key={item.path}
                                    >
                                        {item.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export default Search;
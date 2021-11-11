import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { debounce } from 'Utils/index';
import { searchSuggest } from 'Apis/search';

type DropdownItems = Record<string, {
    path: string;
    text: string;
}[]>;

function Search() {
    const history = useHistory();
    // 搜索框是否 focus
    const [focus, setFocus] = useState(false);
    // 下拉列表
    const [dropdownItems, setDropdownItems] = useState<DropdownItems>({});

    // 搜索
    const handleSearch = debounce(async (value: string) => {
        console.info('handleSearch', value);
        if (value === '' || value === undefined) {
            return;
        }
        const { result } = await searchSuggest(value);
        const items: DropdownItems = {};
        // 单曲
        if (Array.isArray(result.songs)) {
            items.songs = result.songs.map(item => ({
                path: `/Song?id=${item.id}`,
                text: `${item.name} - ${item.artists.map(ar => ar.name).join('/')}`
            }));
        }
        // 专辑
        if (Array.isArray(result.albums)) {
            items.albums = result.albums.map(item => ({
                path: `/Album?id=${item.id}`,
                text: `${item.name} - ${item.artist.name}`
            }));
        }
        // 歌手
        if (Array.isArray(result.artists)) {
            items.singers = result.artists.map(item => ({
                path: `/Singer?id=${item.id}`,
                text: item.name
            }));
        }
        // 歌单
        if (Array.isArray(result.playlists)) {
            items.playlists = result.playlists.map(item => ({
                path: `/Playlist?id=${item.id}`,
                text: item.name,
            }));
        }
        setDropdownItems(items);
    }, 800);

    const handleSelectChange = (value: string) => {
        setDropdownItems({});
        history.push(value);
    }

    return (
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
            onKeyDown={(evt) => {
                if (evt.key === 'Enter') {

                }
                console.info('onKeyDown', evt.key);
            }}
            filterOption={false}
            onFocus={() => setFocus(true)}
            onBlur={() => {
                setFocus(false);
                setDropdownItems({});
            }}
        >
            {dropdownItems.songs &&
                <Select.OptGroup label="单曲">
                    {dropdownItems.songs.map(({ path, text }) =>
                        <Select.Option key={path} value={path}>{text}</Select.Option>
                    )}
                </Select.OptGroup>
            }
            {dropdownItems.albums &&
                <Select.OptGroup label="专辑">
                    {dropdownItems.albums.map(({ path, text }) =>
                        <Select.Option key={path} value={path}>{text}</Select.Option>
                    )}
                </Select.OptGroup>
            }
            {dropdownItems.singers &&
                <Select.OptGroup label="歌手">
                    {dropdownItems.singers.map(({ path, text }) =>
                        <Select.Option key={path} value={path}>{text}</Select.Option>
                    )}
                </Select.OptGroup>
            }
            {dropdownItems.playlists &&
                <Select.OptGroup label="歌单">
                    {dropdownItems.playlists.map(({ path, text }) =>
                        <Select.Option key={path} value={path}>{text}</Select.Option>
                    )}
                </Select.OptGroup>
            }
        </Select>
    );
}

export default Search;
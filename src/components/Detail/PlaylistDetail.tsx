import React, { useContext } from 'react';
import { FuncContext } from 'AppContainer/index';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import type { SongItem } from 'AppContainer/index';

interface Props {
    detailData: {
        title: string;
        cover: string;
        creator: {
            id: number;
            name: string;
            avatar: string;
            createTime: number;
        };
        tags: string[];
        isCreator: boolean;
        description: string;
    };
    songList: SongItem[];
}

function PlaylistDetail({ detailData, songList }: Props) {
    const { setPlaylist, playSong } = useContext(FuncContext);

    const { title, cover, creator, tags, description } = detailData;

    const handlePlayAll = () => {
        // 过滤所有 VIP 歌曲
        const freeSongList = songList.filter(item => item.isFree);
        setPlaylist(freeSongList);
        playSong(freeSongList[0]);
    }

    return (
        <>
            <div className="list-left">
                <div className="image">
                    <img src={`${cover}?param=240y240`} />
                </div>
            </div>
            <div className="list-right">
                <div className="title-playlist">{title}</div>
                <div className="creator">
                    <Link to={`/User?id=${creator.id}`}>
                        <img src={`${creator.avatar}?param=40y40`} />
                        {creator.name}
                    </Link>
                    {new Date(creator.createTime).toLocaleDateString().replace(/\//g, '-')}创建
                </div>
                <div className="btns">
                    <Button icon={<CaretRightOutlined />} onClick={handlePlayAll}>播放全部</Button>
                </div>
                <div className="tags">
                    标签：
                    {tags.map((item, idx) =>
                        <span key={idx}>{item}</span>
                    )}
                </div>
                <div className="description">{description}</div>
            </div>
        </>
    );
}

export default PlaylistDetail;
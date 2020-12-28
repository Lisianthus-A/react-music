import React, { useCallback } from 'react';
import './index.scss';
import { Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const AlbumInfo = ({ data, setPlaylist, songs }) => {
    const { album } = data;

    //播放所有歌曲
    const handlePlayAll = useCallback(() => {
        const list = songs.filter(({ fee }) => !fee);  //过滤收费歌曲
        setPlaylist(list);
    },
        [songs, setPlaylist]
    );

    return (
        <div className='album-info'>
            <div className='list-left'>
                <div className='image'><img src={`${album.picUrl}?param=240y240`} /></div>
            </div>
            <div className='list-right'>
                <div className='title'>{album.name}</div>
                <div className='singer'>歌手：<a href={`#/Singer?id=${album.artists[0].id}`}>{album.artists.map(({ name }) => name).join('/')}</a></div>
                <div>发行时间：{new Date(album.publishTime).toLocaleDateString().replace(/\//g, '-')}</div>
                <div className='btns'>
                    <Button icon={<CaretRightOutlined />} onClick={handlePlayAll}>播放全部</Button>
                </div>
                <div className='description'>{album.description}</div>
            </div>
        </div>
    )
}

export default AlbumInfo;
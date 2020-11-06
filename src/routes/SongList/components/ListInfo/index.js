import React, { useCallback } from 'react';
import './index.scss';
import { Button, message } from 'antd';
import { CaretRightOutlined, HeartOutlined } from '@ant-design/icons';
import { playlistSubscribe } from 'Apis/apiSongList';

const ListInfo = ({ data, setPlaylist, songs, isCreator, playlistId }) => {
    const { playlist } = data;

    //播放所有歌曲
    const handlePlayAll = useCallback(() => {
        const list = songs.filter(({ fee }) => !fee);  //过滤收费歌曲
        setPlaylist(list);
    },
        [songs, setPlaylist]
    );

    //收藏歌单
    const handleCollectPlaylist = useCallback(() => {
        playlistSubscribe(playlistId).then(() => message.success('已收藏'));
    },
        [playlistId]
    );

    return (
        <div className='listinfo'>
            <div className='list-left'>
                <div className='image'><img src={`${playlist.coverImgUrl}?param=240y240`} /></div>
            </div>
            <div className='list-right'>
                <div className='title'>{playlist.name}</div>
                <div className='creator'>
                    <a href={`#/User?id=${playlist.creator.userId}`}><img src={`${playlist.creator.avatarUrl}?param=40y40`} />{playlist.creator.nickname}</a>
                    {new Date(playlist.createTime).toLocaleString().replace(/[ ].+/, '').replace(/\//g, '-')}创建
                </div>
                <div className='btns'>
                    <Button icon={<CaretRightOutlined />} onClick={handlePlayAll}>播放全部</Button>
                    {!isCreator && <Button icon={<HeartOutlined />} onClick={handleCollectPlaylist}>收藏歌单</Button>}
                </div>
                <div className='label'>
                    标签：{playlist.tags.map((e, idx) => <span key={idx}>{e}</span>)}
                </div>
                <div className='description'>{playlist.description}</div>
            </div>
        </div>
    )
}

export default ListInfo;
import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';
import { CaretRightOutlined } from '@ant-design/icons';
import { songDetail } from 'Apis/apiDiscovery';

const RecentMusicList = ({ data, setPlaylist }) => {
    const history = useHistory();
    //点击播放按钮，直接播放歌曲
    const handlePlay = (e, id) => {
        e.stopPropagation();
        songDetail([id]).then(result => {
            const list = result.songs.map(({ id, name, ar, dt, al: { picUrl } }) => ({
                id,
                title: name,
                singer: ar.map(({ name }) => name).join('/'),
                duration: dt / 1000,
                cover: picUrl
            }));
            setPlaylist(list);
        });
    }

    //跳转到相应id的歌曲页面
    const handleClick = (id) => {
        history.push(`/Song?id=${id}`);
    }

    return (
        <div className='recent-music-list'>
            <div className='left'>
                {
                    data.slice(0, 5).map(({ album, artists, name, id }, idx) => //id是歌曲id
                        <div className='music-item' key={id}>
                            <div className='order'>{(idx + 1).toString().padStart(2, 0)}</div>
                            <div className='image' onClick={() => handleClick(id)}>
                                <img src={album.picUrl} />
                                <div className='play-button' onClick={(e) => handlePlay(e, id)}><CaretRightOutlined /></div>
                            </div>
                            <div className='information'>
                                <div className='song-title'>{name}</div>
                                <div className='singer'>{artists.map(({ name }) => name).join('/')}</div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='right'>
                {
                    data.slice(5, 10).map(({ album, artists, name, id }, idx) => //id是歌曲id
                        <div className='music-item' key={id}>
                            <div className='order'>{(idx + 5).toString().padStart(2, 0)}</div>
                            <div className='image' onClick={() => handleClick(id)}>
                                <img src={album.picUrl} />
                                <div className='play-button' onClick={(e) => handlePlay(e, id)}><CaretRightOutlined /></div>
                            </div>
                            <div className='information'>
                                <div className='song-title'>{name}</div>
                                <div className='singer'>{artists.map(({ name }) => name).join('/')}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default RecentMusicList;
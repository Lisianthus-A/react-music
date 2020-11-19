import React from 'react';
import './index.scss';
import { CaretRightOutlined } from '@ant-design/icons';
import { songDetail } from 'Apis/apiDiscovery';
import Loading from 'Components/Loading';

const RecentMusicList = ({ data, setPlaylist }) => {
    if (data.length === 0) {
        return <Loading />;
    }
    
    //点击播放按钮，直接播放歌曲
    const handlePlay = (e, id) => {
        e.preventDefault();
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

    return (
        <div className='recent-music-list'>
            <div className='left'>
                {
                    data.slice(0, 5).map(({ album, artists, name, id }, idx) => //id是歌曲id
                        <div className='music-item' key={id}>
                            <div className='order'>{(idx + 1).toString().padStart(2, 0)}</div>
                            <a className='image' href={`/#/Song?id=${id}`}>
                                <img src={`${album.picUrl}?param=50y50`} loading='lazy' />
                                <div className='play-button' onClick={(e) => handlePlay(e, id)}><CaretRightOutlined /></div>
                            </a>
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
                            <a className='image' href={`/#/Song?id=${id}`}>
                                <img src={`${album.picUrl}?param=50y50`} loading='lazy' />
                                <div className='play-button' onClick={(e) => handlePlay(e, id)}><CaretRightOutlined /></div>
                            </a>
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
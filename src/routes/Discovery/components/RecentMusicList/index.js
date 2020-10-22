import React from 'react';
import './index.scss';
import { CaretRightOutlined } from '@ant-design/icons';

const RecommentSongList = ({ data }) => {
    return (
        <div className='recent-music-list'>
            <div className='left'>
                {
                    data.slice(0, 5).map(({ album, artists, name, id }, idx) => //id是歌曲id
                        <div className='music-item' key={id}>
                            <div className='order'>{(idx + 1).toString().padStart(2, 0)}</div>
                            <div className='image'>
                                <img src={album.picUrl} />
                                <div className='play-button'><CaretRightOutlined /></div>
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
                            <div className='order'>{(idx + 6).toString().padStart(2, 0)}</div>
                            <div className='image'>
                                <img src={album.picUrl} />
                                <div className='play-button'><CaretRightOutlined /></div>
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

export default RecommentSongList;
import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';
import { CaretRightOutlined } from '@ant-design/icons';

const RecommentSongList = ({ data }) => {
    const history = useHistory();
    const handlePlay = (e, id) => {
        //点击播放按钮，直接播放歌曲
        e.stopPropagation();
        console.log('id', id);
    }

    //跳转到相应id的歌曲页面
    const handleClick = (id) => {
        history.push(`/SongList?id=${id}`);
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
                                <div className='play-button' onclick={(e) => handlePlay(e, id)}><CaretRightOutlined /></div>
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
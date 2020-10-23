import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';
import { CustomerServiceOutlined, CaretRightOutlined } from '@ant-design/icons';
import { convertCount } from 'Utils';

const RecommentSongList = ({ data }) => {
    const history = useHistory();
    const handlePlay = (e, id) => {
        //点击播放按钮，直接播放歌单内所有歌曲
        e.stopPropagation();
        console.log('id', id);
    }

    //跳转到相应id的歌单页面
    const handleClick = (id) => {
        history.push(`/SongList?id=${id}`);
    }

    return (
        <div className='recommend-song-list'>
            <div className='songlist'>
                {
                    data.slice(0, 5).map(({ picUrl, name, copywriter, playCount, id }, idx) =>
                        <div className='listitem' key={'item' + idx}>
                            <div className='image' onClick={() => handleClick(id)}>
                                <img src={picUrl} />
                                <div className='copywriter'>{copywriter}</div>
                                <div className='play-count'><CustomerServiceOutlined />{convertCount(playCount)}</div>
                                <div className='play-button' onClick={(e) => handlePlay(e, id)}><CaretRightOutlined /></div>
                            </div>
                            <a className='description' onClick={() => handleClick(id)}>{name}</a>
                        </div>
                    )
                }
            </div>
            <div className='songlist'>
                {
                    data.slice(5, 10).map(({ picUrl, name, copywriter, playCount, id }, idx) =>
                        <div className='listitem' key={'item' + idx + 5}>
                            <div className='image' onClick={(e) => handleClick(e, id)}>
                                <img src={picUrl} />
                                <div className='copywriter'>{copywriter}</div>
                                <div className='play-count'><CustomerServiceOutlined />{convertCount(playCount)}</div>
                                <div className='play-button' onClick={() => handlePlay(id)}><CaretRightOutlined /></div>
                            </div>
                            <a className='description' onClick={(e) => handleClick(e, id)}>{name}</a>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default RecommentSongList;
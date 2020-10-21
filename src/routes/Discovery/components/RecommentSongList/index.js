import React from 'react';
import './index.scss';
import { CustomerServiceOutlined, CaretRightOutlined } from '@ant-design/icons';
import { convertCount } from 'Utils';

const RecommentSongList = ({ data }) => {
    return (
        <div className='recommend-song-list'>
            <div className='songlist'>
                {
                    data.slice(0, 5).map(({ picUrl, name, copywriter, playCount }, idx) =>
                        <div className='listitem' key={'item' + idx}>
                            <div className='image'>
                                <img src={picUrl} />
                                <div className='copywriter'>{copywriter}</div>
                                <div className='play-count'><CustomerServiceOutlined />{convertCount(playCount)}</div>
                                <div className='play-button'><CaretRightOutlined /></div>
                            </div>
                            <a className='description'>{name}</a>
                        </div>
                    )
                }
            </div>
            <div className='songlist'>
                {
                    data.slice(5, 10).map(({ picUrl, name, copywriter, playCount }, idx) =>
                        <div className='listitem' key={'item' + idx}>
                            <div className='image'>
                                <img src={picUrl} />
                                <div className='copywriter'>{copywriter}</div>
                                <div className='play-count'><CustomerServiceOutlined />{convertCount(playCount)}</div>
                                <div className='play-button'><CaretRightOutlined /></div>
                            </div>
                            <a className='description'>{name}</a>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default RecommentSongList;
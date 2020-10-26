import React, { memo } from 'react';
import './index.scss';
import CustomIcon from 'Components/CustomIcon';
import {
    UnorderedListOutlined,
    SoundOutlined,
    RetweetOutlined,
    CaretRightOutlined,
    DownloadOutlined,
    DeleteOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { Slider } from 'antd';
import { convertTime } from 'Utils';

const OtherButton = memo(({ audioRef, playlist, playingIndex, playMode, setPlayMode }) => {
    //设置音量
    const handleChange = (value) => {
        audioRef.current.volume = value / 100;
    }

    //设置播放模式
    const handleSetPlayMode = () => {
        if (playMode === 'list-loop') {
            setPlayMode('random');
        } else {
            setPlayMode('list-loop');
        }
    }

    return (
        <div className='other-button'>
            <div className='playlist'>
                <div className='icon' title='播放列表'>
                    <label htmlFor='toggle-list'><UnorderedListOutlined /></label>
                </div>
                <input type='checkbox' id='toggle-list' style={{ display: 'none' }} />
                <div className='list'>
                    <div className='list-left'>
                        <div className='title'>播放列表({playlist.length})</div>
                        <div className='content'>
                            {
                                playlist.map(({ title, singer, duration }, idx) =>
                                    <div className='item' key={idx}>
                                        {idx === playingIndex && <CaretRightOutlined className='playing' />}
                                        <div className='song-title'>{title}</div>
                                        <div className='icons'>
                                            <PlusOutlined title='添加到歌单' />
                                            <DownloadOutlined title='下载' />
                                            <DeleteOutlined title='删除' />
                                        </div>
                                        <div className='singer'>{singer}</div>
                                        <div className='duration'>{convertTime(duration)}</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='list-right'>
                        <div className='title'>{playlist[playingIndex].title}</div>
                        <div className='content'>
                            {
                                new Array(15).fill(0).map((e, idx) =>
                                    <p key={idx}>歌词</p>
                                )
                            }
                        </div>
                    </div>
                    <label htmlFor='toggle-list'><div className='close'>X</div></label>
                </div>
            </div>
            <div className='play-mode'>
                <div className='icon' onClick={handleSetPlayMode}>
                    {playMode === 'list-loop' ? <RetweetOutlined title='列表循环' /> : <CustomIcon type='icon-random' title='随机' />}
                </div>
            </div>
            <div className='volume'>
                <div className='icon' title='音量'><SoundOutlined /></div>
                <div className='slider'>
                    <Slider defaultValue={100} onChange={handleChange} tipFormatter={(value) => `${value}%`} />
                </div>
            </div>
        </div>
    );
});

export default OtherButton;
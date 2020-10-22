import React from 'react';
import './index.scss';
import { UnorderedListOutlined, SoundOutlined, RetweetOutlined } from '@ant-design/icons';
import { Slider } from 'antd';

const OtherButton = ({ audioRef }) => {

    //设置音量
    const handleChange = (value) => {
        audioRef.current.volume = value / 100;
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
                        <div className='title'>播放列表(15)</div>
                        <div className='content'>
                            {
                                new Array(15).fill(0).map((e, idx) =>
                                    <div className='item' key={idx}>
                                        <div className='song-title'>歌曲名</div>
                                        <div className='icons'>显示各种按钮</div>
                                        <div className='singer'>歌手</div>
                                        <div className='duration'>12:34</div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                    <div className='list-right'>
                        <div className='title'>这里显示歌曲名</div>
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
                <div className='icon' title='循环'><RetweetOutlined /></div>
            </div>
            <div className='volume'>
                <div className='icon' title='音量'><SoundOutlined /></div>
                <div className='slider'>
                    <Slider defaultValue={100} onChange={handleChange} tipFormatter={(value) => `${value}%`} />
                </div>
            </div>
        </div>
    );
}

export default OtherButton;
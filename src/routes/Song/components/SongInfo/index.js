import React, { useCallback } from 'react';
import './index.scss';
import { Button } from 'antd';
import { CaretRightOutlined, HeartOutlined, DownloadOutlined } from '@ant-design/icons';

const SongInfo = ({ song, lyric, setPlaylist }) => {
    const { cover, singer, album, title, fee, singerId, albumId, id } = song;

    //播放歌曲
    const handlePlay = useCallback(() => {
        setPlaylist([song]);
    },
        [song, setPlaylist]
    );

    const handleDownload = useCallback(() => {
        window.open(`https://music.163.com/song/media/outer/url?id=${id}`);
    },
        [song]
    );

    return (
        <div className='songinfo'>
            <div className='list-left'>
                <div className='image'><img src={`${cover}?param=240y240`} /></div>
            </div>
            <div className='list-right'>
                <div className='title'>{title}</div>
                <div className='singer'>歌手：<a href={`#/Singer?id=${singerId}`}>{singer}</a></div>
                <div className='album'>所属专辑：<a href={`#/Album?id=${albumId}`}>{album}</a></div>
                <div className='btns'>
                    <Button icon={<CaretRightOutlined />} onClick={handlePlay} disabled={fee}>播放</Button>
                    <Button icon={<HeartOutlined />}>添加到歌单</Button>
                    <Button icon={<DownloadOutlined />} onClick={handleDownload}>下载</Button>
                </div>
                <input type='checkbox' id='toggle-lyric' style={{ display: 'none' }} />
                <div className='lyric'>
                    {
                        !lyric &&
                        <p>暂无歌词</p>
                    }
                    {
                        lyric &&
                        lyric.map(([origin, trans], idx) =>
                            <p key={idx}>
                                {origin}
                                {
                                    trans &&
                                    <>
                                        <br />
                                        {trans}
                                    </>
                                }
                            </p>
                        )
                    }
                </div>
                <label htmlFor='toggle-lyric'></label>
            </div>
        </div>
    )
}

export default SongInfo;
import React, { useCallback } from 'react';
import './index.scss';
import {
    CaretRightOutlined,
    PlusOutlined, HeartOutlined,
    DownloadOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import { convertTime } from 'Utils';

const Songs = ({ data, playlist, setPlaylist }) => {
    //添加到播放列表
    const handleAddToPlaylist = useCallback((id) => {
        const target = data.find(e => e.id === id);  //需要添加的歌曲
        const newList = [...playlist, target];
        setPlaylist(newList, false);
    },
        [data, setPlaylist, playlist]
    );

    //下载
    const handleDownload = (id) => {
        window.open(`https://music.163.com/song/media/outer/url?id=${id}`);
    }

    //播放指定歌曲
    const handlePlay = useCallback((id) => {
        const target = data.find(e => e.id === id);  //需要播放的歌曲
        setPlaylist([target]);
    },
        [data, setPlaylist]
    )



    return (
        <div className='songs'>
            <div className='title'>歌曲列表<span>{data.length}首歌</span></div>
            <table>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">歌曲标题</th>
                        <th scope="col">时长</th>
                        <th scope="col">歌手</th>
                        <th scope="col">专辑</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(({ id, title, singer, duration, fee, singerId, albumId, album }, idx) =>
                            <tr key={idx} className={fee ? 'fee' : ''}>
                                <td><span>{idx + 1}</span><CaretRightOutlined className='play-button' onClick={() => handlePlay(id)} /></td>
                                <td>
                                    <a href={`#/Song?id=${id}`}>{title}</a>
                                    <div className='icons'>
                                        {
                                            !fee &&
                                            <>
                                                <PlusOutlined title="添加到播放列表" onClick={() => handleAddToPlaylist(id)} />
                                                <HeartOutlined title="收藏到歌单" />
                                                <DownloadOutlined title="下载" onClick={() => handleDownload(id)} />
                                            </>
                                        }
                                    </div>
                                </td>
                                <td>{convertTime(duration)}</td>
                                <td><a href={`#/Singer?id=${singerId}`}>{singer}</a></td>
                                <td><a href={`#/Album?id=${albumId}`}>{album}</a></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Songs;
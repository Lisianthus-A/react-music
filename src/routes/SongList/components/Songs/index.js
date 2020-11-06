import React, { useCallback, useState } from 'react';
import './index.scss';
import { Modal } from 'antd';
import {
    CaretRightOutlined,
    PlusOutlined, HeartOutlined,
    DownloadOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import { convertTime } from 'Utils';
import { playlistTracks } from 'Apis/apiSongList';
import CollectSong from 'Components/CollectSong';

const Songs = ({ data, playlist, setPlaylist, playlistId, isCreator }) => {
    const [songsData, setData] = useState(data);

    //添加到播放列表
    const handleAddToPlaylist = useCallback((id) => {
        if (playlist.find(e => e.id === id)) {  //播放列表中已有该歌曲
            return;
        }
        const target = songsData.find(e => e.id === id);  //需要添加的歌曲
        const newList = [...playlist, target];
        setPlaylist(newList, false);
    },
        [songsData, setPlaylist, playlist]
    );

    //下载
    const handleDownload = (id) => {
        window.open(`https://music.163.com/song/media/outer/url?id=${id}`);
    }

    //播放指定歌曲
    const handlePlay = useCallback((id) => {
        const target = songsData.find(e => e.id === id);  //需要播放的歌曲
        setPlaylist([target]);
    },
        [songsData, setPlaylist]
    )

    //删除歌单中的某首歌
    const handleDelete = useCallback((id) => {
        const targetIndex = songsData.findIndex(e => e.id === id);  //需要删除的歌曲下标
        const newData = songsData.slice();
        newData.splice(targetIndex, 1);
        setData(newData);
        playlistTracks('del', playlistId, [id]);
    },
        [songsData, playlistId]
    );

    //收藏歌单中的某首歌
    const handleCollectSong = useCallback((id) => {
        Modal.info({
            title: '收藏歌曲',
            maskClosable: true,
            okButtonProps: { style: { display: 'none' } },
            width: 500,
            content: <CollectSong songId={id} />
        });
    },
        [songsData]
    );

    return (
        <div className='songs'>
            <div className='title'>歌曲列表<span>{songsData.length}首歌</span></div>
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
                        songsData.map(({ id, title, singer, duration, fee, singerId, albumId, album }, idx) =>
                            <tr key={idx} className={fee ? 'fee' : ''}>
                                <td><span>{idx + 1}</span><CaretRightOutlined className='play-button' onClick={() => handlePlay(id)} /></td>
                                <td>
                                    <a href={`#/Song?id=${id}`}>{title}</a>
                                    <div className='icons'>
                                        {
                                            !fee &&
                                            <>
                                                <PlusOutlined title="添加到播放列表" onClick={() => handleAddToPlaylist(id)} />
                                                <HeartOutlined title="收藏到歌单" onClick={() => handleCollectSong(id)} />
                                                <DownloadOutlined title="下载" onClick={() => handleDownload(id)} />
                                            </>
                                        }
                                        {isCreator && <DeleteOutlined title="删除" onClick={() => handleDelete(id)} />}
                                    </div>
                                </td>
                                <td>{convertTime(duration)}</td>
                                <td><a href={`#/Singer?id=${singerId}`} title={singer}>{singer}</a></td>
                                <td><a href={`#/Album?id=${albumId}`} title={album}>{album}</a></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Songs;
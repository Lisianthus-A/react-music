import React, { useState, useContext } from 'react';
import style from './index.module.scss';
import { DataContext, globalMethods } from 'AppContainer';
import { message, Modal } from 'antd';
import {
    CaretRightOutlined,
    PlusOutlined,
    HeartOutlined,
    DownloadOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import { playlistTracks } from 'Apis/apiCommon';
import { convertTime, searchItem } from 'Utils';
import { downloadMusic, collectSong } from 'Utils/methods';

const Songs = ({ data, isCreator }) => {
    const { playlist } = useContext(DataContext);
    const { setPlaylist } = globalMethods;
    const [isDownloading, setIsDownloading] = useState(false);
    const [songlist, setList] = useState(data);

    //添加到播放列表
    const handleAddToPlaylist = (id) => {
        if (playlist.find(e => e.id === id)) {  //播放列表中已有该歌曲
            return;
        }
        const target = songlist.find(e => e.id === id);  //需要添加的歌曲
        const newList = [...playlist, target];
        setPlaylist(newList, false);
    }

    //下载
    const handleDownload = (name, id) => {
        if (isDownloading) {
            message.loading("下载中");
            return;
        }
        setIsDownloading(true);
        downloadMusic(name, id).then(() => setIsDownloading(false));
    }

    //播放指定歌曲
    const handlePlay = (id) => {
        const target = songlist.find(e => e.id === id);  //需要播放的歌曲
        setPlaylist([target]);
    }

    //收藏歌单中的某首歌
    const handleCollectSong = (id) => {
        collectSong(id);
    }

    //删除歌单中的某首歌
    const handleDelete = (id) => {
        const playlistId = +searchItem(window.location.hash, 'id');  //歌单 id
        const targetIndex = songlist.findIndex(e => e.id === id);  //需要删除的歌曲下标
        Modal.confirm({
            title: '删除歌曲',
            content: `是否要删除歌曲 ${songlist[targetIndex].name} ？`,
            okText: '是',
            cancelText: '否',
            onOk() {
                return playlistTracks('del', playlistId, [id]).then(() => {
                    message.info('已删除');
                    const newList = songlist.slice();
                    newList.splice(targetIndex, 1);
                    setList(newList);
                });
            }
        })
    }

    return (
        <div className={style.songs}>
            <div className={style.title}>歌曲列表<span>{songlist.length}首歌</span></div>
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
                    {songlist.map(({ id, name, singers, duration, isFree, albumId, albumName }, idx) =>
                        <tr key={idx} className={isFree ? '' : style.fee}>
                            <td><span>{idx + 1}</span><CaretRightOutlined className={style.playButton} onClick={() => handlePlay(id)} /></td>
                            <td>
                                <a href={`#/Song?id=${id}`}>{name}</a>
                                <div className={style.icons}>
                                    {isFree &&
                                        <>
                                            <PlusOutlined title="添加到播放列表" onClick={() => handleAddToPlaylist(id)} />
                                            <HeartOutlined title="收藏到歌单" onClick={() => handleCollectSong(id)} />
                                            <DownloadOutlined title="下载" onClick={() => handleDownload(name, id)} />
                                        </>
                                    }
                                    {isCreator && <DeleteOutlined title="删除" onClick={() => handleDelete(id)} />}
                                </div>
                            </td>
                            <td>{convertTime(duration)}</td>
                            <td>
                                {singers.map(({ id, name }, idx) =>
                                    <React.Fragment key={idx}>
                                        <a href={`#/Singer?id=${id}`} title={name} className={style.singer}>{name}</a>
                                        <span> / </span>
                                    </React.Fragment>
                                )}
                            </td>
                            <td><a href={`#/Album?id=${albumId}`} title={albumName}>{albumName}</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Songs;
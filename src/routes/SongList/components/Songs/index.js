import React from 'react';
import './index.scss';
import { CaretRightOutlined, PlusOutlined, HeartOutlined, DownloadOutlined, DeleteOutlined } from '@ant-design/icons';

const Songs = () => {
    return (
        <div className='songs'>
            <div className='title'>歌曲列表<span>123首歌</span></div>
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
                    <tr>
                        <td>1 <CaretRightOutlined className='play-button' /></td>
                        <td>
                            <a href="#">歌曲标题11</a>
                            <div className='icons'>
                                <PlusOutlined title="添加到播放列表" />
                                <HeartOutlined title="收藏到歌单" />
                                <DownloadOutlined title="下载" />
                                {/* <DeleteOutlined title="删除" /> */}
                            </div>
                        </td>
                        <td>12:34</td>
                        <td><a href="#">歌手11</a></td>
                        <td><a href="#">专辑11</a></td>
                    </tr>
                    <tr>
                        <td>1 <CaretRightOutlined className='play-button' /></td>
                        <td>
                            <a href="#">歌曲标题11</a>
                            <div className='icons'>
                                <PlusOutlined title="添加到播放列表" />
                                <HeartOutlined title="收藏到歌单" />
                                <DownloadOutlined title="下载" />
                                {/* <DeleteOutlined title="删除" /> */}
                            </div>
                        </td>
                        <td>12:34</td>
                        <td><a href="#">歌手11</a></td>
                        <td><a href="#">专辑11</a></td>
                    </tr>
                    <tr className='fee'>
                        <td>1 <CaretRightOutlined className='play-button' /></td>
                        <td>
                            <a href="#">收费歌曲</a>
                            <div className='icons'>
                                {/* <DeleteOutlined title="删除" /> */}
                            </div>
                        </td>
                        <td>12:34</td>
                        <td><a href="#">歌手11</a></td>
                        <td><a href="#">专辑11</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Songs;
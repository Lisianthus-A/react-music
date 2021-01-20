import React from 'react';
import ajax from 'Apis/apiBase';
import { Modal } from 'antd';
import CollectSong from 'Components/CollectSong';

//将歌曲收藏到歌单
export const collectSong = (id) => {
    Modal.info({
        title: '收藏歌曲',
        maskClosable: true,
        okButtonProps: { style: { display: 'none' } },
        width: 500,
        content: <CollectSong songId={id} />
    });
}

//下载歌曲，保存为mp3
export const downloadMusic = async (fileName, id) => {
    //获取歌曲地址
    const response = await ajax(`/song/url?id=${id}`);
    const url = response.data[0].url;

    //开始下载
    await fetch(url)
        .then(Function.call.bind(Response.prototype.blob))  //下载完成，数据转 blob
        .then(blob => {  //blob 保存到到本地
            const link = document.createElement('a');
            const blobUrl = window.URL.createObjectURL(blob);
            link.href = blobUrl;
            link.download = `${fileName}.mp3`;
            link.click();
            window.URL.revokeObjectURL(blobUrl);
        });

    return true;
}
import React from 'react';
import ajax from 'Apis/apiBase';
import { Modal, message } from 'antd';
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

//下载歌曲，保存为 {fileName}.mp3
let isDownloading = false;  //是否正在下载中
export const downloadMusic = async (fileName, id) => {

    if (isDownloading) {
        message.error('下载中');
        return;
    }

    //当前下载任务完成前，限制下载新的歌曲
    isDownloading = true;

    //获取歌曲地址
    const response = await ajax(`/song/url?id=${id}`);
    const url = response.data[0].url;

    //开始下载
    message.loading('开始下载');
    await fetch(url)
        .then(Function.call.bind(Response.prototype.blob))  //下载完成，数据转 blob
        .then(blob => {
            //blob 保存到到本地
            const link = document.createElement('a');
            const blobUrl = window.URL.createObjectURL(blob);
            link.href = blobUrl;
            link.download = `${fileName}.mp3`;
            link.click();
            window.URL.revokeObjectURL(blobUrl);

            //取消下载限制
            isDownloading = false;
        });
    message.success('下载完成');

    return true;
}
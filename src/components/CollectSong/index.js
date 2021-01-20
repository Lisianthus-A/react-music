import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { TreeSelect, Button, Modal, message } from 'antd';
import Loading from 'Components/Loading';
import { userPlaylist, playlistTracks } from 'Apis/apiCommon';

const CollectSong = ({ songId }) => {
    const [tree, setTree] = useState(null);
    const [selectId, setId] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const userid = window.localStorage.getItem('userid');

    if (!userid) {
        return <div>未找到userid，请重新登录</div>;
    }

    //确认
    const handleClick = () => {
        if (!selectId) {
            return;
        }

        setLoading(true);
        playlistTracks('add', selectId, [songId]).then(() => {
            Modal.destroyAll();
            message.success('已收藏歌曲');
        });
    }

    useEffect(() => {
        const getData = async () => {
            const listData = await userPlaylist(userid);
            const create = listData.playlist.filter(({ subscribed }) => !subscribed);  //创建的歌单
            const subscribe = listData.playlist.filter(({ subscribed }) => subscribed);  //收藏的歌单
            const treeData = [
                {
                    title: `我创建的歌单(${create.length})`,
                    value: '0-0',
                    selectable: false,
                    children: create.map(({ name, id }) => ({ title: name, value: id })),
                },
                {
                    title: `我收藏的歌单(${subscribe.length})`,
                    value: '0-1',
                    selectable: false,
                    children: subscribe.map(({ name, id }) => ({ title: name, value: id }))
                },
            ];
            setTree(treeData);
        }
        getData();
    },
        []
    );

    if (!tree) {
        return <Loading />;
    }

    return (
        <div className={style['collect-song']}>
            <TreeSelect
                treeData={tree}
                style={{ width: '100%' }}
                onChange={(value) => setId(value)}
                treeDefaultExpandAll={true}
                placeholder="请选择歌单"
            />
            <Button
                onClick={handleClick}
                type="primary"
                loading={isLoading}
                style={{marginTop: '30px'}}
            >确认</Button>
        </div>
    );
}

export default CollectSong;
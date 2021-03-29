import React, { useState, useEffect } from 'react';
import { userSonglist, deleteSonglist } from 'Apis/songlist';
import { Modal } from 'antd';
import MySongListView from './components/View';
import { hasToken } from 'Utils';

export default () => {
    const userid = window.localStorage.getItem('userid');

    if (!userid || !hasToken()) {
        return <div>需要登录使用</div>;
    }

    const [state, setState] = useState(null);

    //改变标题
    useEffect(() => {
        document.title = '我的歌单';
    });

    useEffect(() => {
        const getData = async () => {
            const listData = await userSonglist(userid);
            const create = listData.playlist.filter(({ subscribed }) => !subscribed);  //创建的歌单
            const subscribe = listData.playlist.filter(({ subscribed }) => subscribed);  //收藏的歌单
            setState({ create, subscribe });
        }
        getData();
    }, []);

    //删除歌单
    const handleDelete = (id, type) => {
        Modal.confirm({
            maskClosable: true,
            title: '删除歌单',
            content: '是否要删除该歌单？',
            okText: '是',
            cancelText: '否',
            onOk: () => {
                let nextState;
                if (type === 1) {  //删除创建的歌单
                    const idx = state.create.findIndex(e => e.id === id);
                    const create = state.create.slice();
                    create.splice(idx, 1);
                    nextState = {
                        ...state,
                        create
                    };
                } else {  //删除收藏的歌单
                    const idx = state.subscribe.findIndex(e => e.id === id);
                    const subscribe = state.subscribe.slice();
                    subscribe.splice(idx, 1);
                    nextState = {
                        ...state,
                        subscribe
                    };
                }
                setState(nextState);
                return deleteSonglist(id);
            },
            onCancel: () => {
                Modal.destroyAll();
            }
        });
    }

    return (
        <MySongListView state={state} onDelete={handleDelete} />
    );
}
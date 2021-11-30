import React, { useState, useEffect } from 'react';
import { userPlaylist, deleteSonglist } from 'Apis/playlist';
import { Modal } from 'antd';
import View from './components/View';
import { hasToken } from 'Utils/index';

import type { UserSonglistRes } from 'Apis/playlist';

type Item = UserSonglistRes['playlist'][number];

export interface PageState {
    create: Item[],
    subscribe: Item[]
}

function MySongList() {
    const userid = window.localStorage.getItem('userid');

    if (!userid || !hasToken()) {
        return <div>需要登录使用</div>;
    }

    const [pageState, setPageState] = useState<PageState | null>(null);

    // 删除歌单
    const handleDelete = (id: number, type: number) => {
        Modal.confirm({
            maskClosable: true,
            title: '删除歌单',
            content: '是否要删除该歌单？',
            okText: '是',
            cancelText: '否',
            onOk: () => {
                let nextState;
                if (type === 1) {  // 删除创建的歌单
                    const idx = pageState.create.findIndex(e => e.id === id);
                    const create = pageState.create.slice();
                    create.splice(idx, 1);
                    nextState = {
                        ...pageState,
                        create
                    };
                } else {  // 删除收藏的歌单
                    const idx = pageState.subscribe.findIndex(e => e.id === id);
                    const subscribe = pageState.subscribe.slice();
                    subscribe.splice(idx, 1);
                    nextState = {
                        ...pageState,
                        subscribe
                    };
                }
                setPageState(nextState);
                return deleteSonglist(id);
            },
            onCancel: () => {
                Modal.destroyAll();
            }
        });
    }

    // 改变标题
    useEffect(() => {
        document.title = '我的歌单';
    }, []);

    useEffect(() => {
        const getData = async () => {
            const listData = await userPlaylist(userid);
            const state = {
                create: [],
                subscribe: []
            };
            listData.playlist.forEach(item => {
                if (item.subscribed) {  // 收藏的歌单
                    state.subscribe.push(item);
                } else {  // 创建的歌单
                    state.create.push(item);
                }
            });
            setPageState(state);
        }
        getData();
    }, []);

    return (
        <View pageState={pageState} onDelete={handleDelete} />
    );
}

export default MySongList;
import React, { memo, useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './View.scss';
import { userPlaylist, deletePlaylist } from 'Apis/apiMySongList';
import { DeleteOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import Loading from 'Components/Loading';

const MySongList = memo(() => {
    const userid = window.localStorage.getItem('userid');
    const history = useHistory();

    if (!userid) {
        return <div>没有找到userid，请重新登录</div>;
    }

    const [state, setState] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const listData = await userPlaylist(userid);
            const create = listData.playlist.filter(({ subscribed }) => !subscribed);  //创建的歌单
            const subscribe = listData.playlist.filter(({ subscribed }) => subscribed);  //收藏的歌单
            setState({ create, subscribe });
            console.log('MySongList State', { create, subscribe });
        }
        getData();
    },
        []
    );

    //点击歌单
    const handleClick = useCallback((id) => {
        history.push(`/SongList?id=${id}`);
    },
        []
    );

    //点击删除按钮
    const handleDelete = useCallback((e, id) => {
        e.stopPropagation();
        Modal.confirm({
            maskClosable: true,
            title: '删除歌单',
            content: '是否要删除该歌单？',
            okText: '是',
            cancelText: '否',
            onOk: () => {
                if (~state.create.findIndex(e => e.id === id)) {
                    const idx = state.create.findIndex(e => e.id === id);
                    const create = state.create.slice();
                    create.splice(idx, 1);
                    const nextState = {
                        ...state,
                        create
                    };
                    setState(nextState);
                } else {
                    const idx = state.subscribe.findIndex(e => e.id === id);
                    const subscribe = state.subscribe.slice();
                    subscribe.splice(idx, 1);
                    const nextState = {
                        ...state,
                        subscribe
                    };
                    setState(nextState);
                }
                return deletePlaylist(id);
            }
        });
    },
        [state]
    );

    if (!state) {
        return <Loading />;
    }

    return (
        <div className='my-song-list'>
            <div className='title'>我创建的歌单</div>
            {
                state.create.map(({ name, coverImgUrl, trackCount, id }, idx) =>
                    <div className='list-item' key={idx} onClick={() => handleClick(id)}>
                        <div className='image'>
                            <img src={`${coverImgUrl}?param=100y100`} loading='lazy' />
                        </div>
                        <div className='content'>
                            <span>{name}</span>
                            <span>{trackCount}首</span>
                        </div>
                        <DeleteOutlined className='delete' onClick={(e) => handleDelete(e, id)} />
                    </div>
                )
            }
            <div className='title'>我收藏的歌单</div>
            {
                state.subscribe.map(({ name, coverImgUrl, trackCount, id }, idx) =>
                    <div className='list-item' key={idx} onClick={() => handleClick(id)}>
                        <div className='image'>
                            <img src={`${coverImgUrl}?param=100y100`} loading='lazy' />
                        </div>
                        <div className='content'>
                            <span>{name}</span>
                            <span>{trackCount}首</span>
                        </div>
                        <DeleteOutlined className='delete' onClick={(e) => handleDelete(e, id)} />
                    </div>
                )
            }
        </div>
    );
})

export default MySongList;
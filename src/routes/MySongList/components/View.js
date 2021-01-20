import React from 'react';
import style from './View.module.scss';
import { DeleteOutlined } from '@ant-design/icons';
import Loading from 'Components/Loading';

const MySongList = ({ state, onDelete }) => {

    if (!state) {
        return <Loading />;
    }

    //删除歌单
    const handleDelete = (e, id, type = 1) => {
        e.preventDefault();
        onDelete(id, type);
    }

    return (
        <div className={style['my-songlist']}>
            <div className={style.title}>我创建的歌单</div>
            {state.create.map(({ name, coverImgUrl, trackCount, id }, idx) =>
                <a className={style['list-item']} key={idx} href={`#/SongList?id=${id}`}>
                    <div className={style.image}>
                        <img src={`${coverImgUrl}?param=100y100`} loading='lazy' />
                    </div>
                    <div className={style.content}>
                        <span>{name}</span>
                        <span>{trackCount}首</span>
                    </div>
                    <DeleteOutlined className={style.delete} onClick={(e) => handleDelete(e, id)} />
                </a>
            )}
            <div className='title'>我收藏的歌单</div>
            {state.subscribe.map(({ name, coverImgUrl, trackCount, id }, idx) =>
                <a className={style['list-item']} key={idx} href={`#/SongList?id=${id}`}>
                    <div className={style.image}>
                        <img src={`${coverImgUrl}?param=100y100`} loading='lazy' />
                    </div>
                    <div className={style.content}>
                        <span>{name}</span>
                        <span>{trackCount}首</span>
                    </div>
                    <DeleteOutlined className={style.delete} onClick={(e) => handleDelete(e, id, 2)} />
                </a>
            )}
        </div>
    );
}

export default MySongList;
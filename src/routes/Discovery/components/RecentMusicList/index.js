import React from 'react';
import style from './index.module.scss';
import { Link } from 'react-router-dom';
import { CaretRightOutlined } from '@ant-design/icons';

const RecentMusicList = ({ data, onPlay }) => {

    const handlePlay = (e, id) => {
        e.preventDefault();
        onPlay(id);
    }

    return (
        <div className={style['recent-music-list']}>
            <div className={style.left}>
                {data.slice(0, 5).map(({ cover, singers, name, id }, idx) =>
                    <div className={style.item} key={id}>
                        <div className={style.order}>{(idx + 1).toString().padStart(2, 0)}</div>
                        <Link className={style.image} to={`/Song?id=${id}`}>
                            <img src={`${cover}?param=50y50`} loading='lazy' />
                            <div className={style['play-button']} onClick={(e) => handlePlay(e, id)}><CaretRightOutlined /></div>
                        </Link>
                        <div className={style.information}>
                            <div>{name}</div>
                            <div className={style.singer}>{singers.map(({ name }) => name).join('/')}</div>
                        </div>
                    </div>
                )}
            </div>
            <div className={style.right}>
                {data.slice(5, 10).map(({ cover, singers, name, id }, idx) =>
                    <div className={style.item} key={id}>
                        <div className={style.order}>{(idx + 6).toString().padStart(2, 0)}</div>
                        <Link className={style.image} to={`/Song?id=${id}`}>
                            <img src={`${cover}?param=50y50`} loading='lazy' />
                            <div className={style['play-button']} onClick={(e) => handlePlay(e, id)}><CaretRightOutlined /></div>
                        </Link>
                        <div className={style.information}>
                            <div>{name}</div>
                            <div className={style.singer}>{singers.map(({ name }) => name).join('/')}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RecentMusicList;
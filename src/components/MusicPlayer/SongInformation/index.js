import React from 'react';
import style from './index.module.scss';
import { Link } from 'react-router-dom';

const SongInformation = ({ id, name, cover, singers, convertedTime, convertedDuration }) => {

    const singer = singers.map(({ name }) => name).join('/');

    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={`${cover}?param=50y50`} />
            </div>
            <div className={style.information}>
                <div className={style.song}><Link to={`/Song?id=${id}`}>{name}</Link> - <span className={style.singer} title={singer}>{singer}</span></div>
                <div className={style.time}>{`${convertedTime} / ${convertedDuration}`}</div>
            </div>
        </div>
    );
};

export default SongInformation;
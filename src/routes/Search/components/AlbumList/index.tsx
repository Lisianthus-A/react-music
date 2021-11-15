import React from 'react';
import style from './index.module.scss';
import { Link } from 'react-router-dom';

interface Props {
    data: {
        id: number;
        name: string;
        singer: { id: number; name: string }[];
        picUrl: string;
    }[];
}

function AlbumList({ data }: Props) {
    return (
        <div className={style.album}>
            {data.map(({ id, name, singer, picUrl }) => (
                <div className="album-item" key={id}>
                    <Link to={`/Album?id=${id}`} className="album-item-image">
                        <img src={`${picUrl}?param=240y240`} alt={name} loading="lazy" />
                    </Link>
                    <Link to={`/Album?id=${id}`} className="album-item-info">
                        <div>{name}</div>
                        <div>{singer.map(({ name }) => name).join(' / ')}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default AlbumList;
import React from 'react';
import style from './index.module.scss';
import { CustomerServiceOutlined, CaretRightOutlined } from '@ant-design/icons';

//将播放次数转换成形如 x万 的字符串，不满1万则原样返回
const convertCount = (count) => {
    if (count >= 10000) {
        return `${parseInt(count / 10000)}万`;
    }
    return count;
}

const RecommentSongList = ({ data, onPlay }) => {
    //点击播放按钮，直接播放歌单内所有歌曲
    const handlePlay = async (e, id) => {
        e.preventDefault();
        onPlay(id);
    }

    return (
        <div className={style['recommend-song-list']}>
            <div className={style.songlist}>
                {data.slice(0, 5).map(({ picUrl, name, copywriter, playCount, id }, idx) =>
                    <div className={style.listitem} key={idx}>
                        <a className={style.image} href={`/#/SongList?id=${id}`}>
                            <img src={`${picUrl}?param=240y240`} loading='lazy' />
                            <div className={style.copywriter}>{copywriter}</div>
                            <div className={style['play-count']}><CustomerServiceOutlined />{convertCount(playCount)}</div>
                            <div className={style['play-button']} onClick={(e) => handlePlay(e, id)}><CaretRightOutlined /></div>
                        </a>
                        <a className={style.description} href={`/#/SongList?id=${id}`}>{name}</a>
                    </div>
                )}
            </div>
            <div className={style.songlist}>
                {data.slice(5, 10).map(({ picUrl, name, copywriter, playCount, id }, idx) =>
                    <div className={style.listitem} key={idx}>
                        <a className={style.image} href={`/#/SongList?id=${id}`}>
                            <img src={`${picUrl}?param=240y240`} loading='lazy' />
                            <div className={style.copywriter}>{copywriter}</div>
                            <div className={style['play-count']}><CustomerServiceOutlined />{convertCount(playCount)}</div>
                            <div className={style['play-button']} onClick={(e) => handlePlay(e, id)}><CaretRightOutlined /></div>
                        </a>
                        <a className={style.description} href={`/#/SongList?id=${id}`}>{name}</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RecommentSongList;
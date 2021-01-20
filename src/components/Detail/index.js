import React, { useState } from 'react';
import style from './index.module.scss';
import './reset.scss';
import { globalMethods } from 'AppContainer';
import { collectSong, downloadMusic } from 'Utils/methods';
import { Button, message } from 'antd';
import { CaretRightOutlined, HeartOutlined, DownloadOutlined } from '@ant-design/icons';

const { setPlaylist } = globalMethods;

const Detail = ({ data, songs, lyric }) => {

    const { isSonglist, isAlbum, isSong, title, cover, creator, labels, description, singers, publishTime, albumId, albumName } = data;
    const category = isSonglist ? '歌单' : isAlbum ? '专辑' : '单曲';  //分类
    const isFree = songs[0].isFree;  //单曲是否免费
    const [isDownloading, setIsDownloading] = useState(false);  //是否下载中

    /* 专辑和歌单调用的方法 */
    //播放所有歌曲
    const handlePlayAll = () => {
        const list = songs.filter(({ isFree }) => isFree);  //过滤VIP歌曲
        setPlaylist(list);
    }

    /* 单曲调用的方法 */
    //播放歌曲
    const handlePlay = () => {
        setPlaylist(songs);
    }

    //收藏到歌单
    const handleCollectSong = () => {
        collectSong(songs[0].id);
    }

    //下载
    const handleDownload = () => {
        if (isDownloading) {
            message.loading('下载中');
            return;
        }
        const { name, id } = songs[0];
        setIsDownloading(true);
        downloadMusic(name, id).then(() => setIsDownloading(false));
    }

    return (
        <div className={style.detail + ' detail'}>
            <div className={style['list-left']}>
                <div className={style.image}><img src={`${cover}?param=240y240`} /></div>
            </div>
            <div className={style['list-right']}>
                <div className={style.title} style={{ '--text': `'${category}'` }}>{title}</div>
                {isAlbum &&
                    <>
                        <div className={style.singer}>歌手：
                        {singers.map(({ id, name }, idx) =>
                            <>
                                <a href={`#/Singer?id=${id}`} key={'a' + idx}>{name}</a>
                                <span key={'s' + idx}> / </span>
                            </>
                        )}
                        </div>
                        <div>发行时间：{new Date(publishTime).toLocaleDateString().replace(/\//g, '-')}</div>
                    </>
                }
                {isSong &&
                    <>
                        <div className={style.singer}>歌手：
                        {singers.map(({ id, name }, idx) =>
                            <>
                                <a href={`#/Singer?id=${id}`} key={'a' + idx}>{name}</a>
                                <span key={'s' + idx}> / </span>
                            </>
                        )}
                        </div>
                        <div>所属专辑：<a href={`#/Album?id=${albumId}`}>{albumName}</a></div>
                    </>
                }
                {isSonglist &&
                    <div className={style.creator}>
                        <a href={`#/User?id=${creator.id}`}><img src={`${creator.avatar}?param=40y40`} />{creator.name}</a>
                        {new Date(creator.createTime).toLocaleString().replace(/[ ].+/, '').replace(/\//g, '-')}创建
                    </div>
                }

                <div className={style.btns}>
                    {(isAlbum || isSonglist) &&
                        <Button icon={<CaretRightOutlined />} onClick={handlePlayAll}>播放全部</Button>
                    }
                    {isSong &&
                        <>
                            <Button icon={<CaretRightOutlined />} onClick={handlePlay} disabled={!isFree}>播放</Button>
                            <Button icon={<HeartOutlined />} onClick={handleCollectSong} disabled={!isFree}>添加到歌单</Button>
                            <Button icon={<DownloadOutlined />} onClick={handleDownload} disabled={!isFree}>下载</Button>
                        </>
                    }
                </div>
                {isSonglist &&
                    <div className={style.label}>
                        标签：{labels.map((e, idx) => <span key={idx}>{e}</span>)}
                    </div>
                }
                {(isSonglist || isAlbum) &&
                    < div className={style.description}>{description}</div>
                }
                {isSong &&
                    <input type='checkbox' id='toggle-lyric' className={style.toggle} style={{ display: 'none' }} />
                }
                {isSong && lyric.length === 0 &&
                    <div>暂无歌词</div>
                }
                {isSong &&
                    <div className={style.lyric}>
                        {lyric.map(([origin, trans], idx) =>
                            <p key={idx}>
                                {origin}
                                {trans &&
                                    <>
                                        <br />
                                        {trans}
                                    </>
                                }
                            </p>
                        )}
                    </div>
                }
                {isSong &&
                    <label htmlFor='toggle-lyric'></label>
                }
            </div>
        </div >
    )
}

export default Detail;
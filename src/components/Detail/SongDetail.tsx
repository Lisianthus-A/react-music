import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { CaretRightOutlined, HeartOutlined, DownloadOutlined } from '@ant-design/icons';

interface Props {
    detailData: {
        title: string;
        cover: string;
        singers: { id: number; name: string; }[];
        albumId: number;
        albumName: string;
    };
    songData: {
        id: number;
        name: string;
        isFree: boolean;
    };
    lyric: [string, string, number][];
}

function SongDetail({ detailData, songData, lyric }: Props) {
    const { title, cover, singers, albumId, albumName } = detailData;
    const { id, name, isFree } = songData;

    const handlePlay = () => {

    }

    const handleCollectSong = () => {

    }

    const handleDownload = () => {

    }

    return (
        <>
            <div className="list-left">
                <div className="image">
                    <img src={`${cover}?param=240y240`} />
                </div>
            </div>
            <div className="list-right">
                <div className="title-song">{title}</div>
                <div className="singer">
                    歌手：
                    {singers.map(({ id, name }, idx) =>
                        <React.Fragment key={idx}>
                            <Link to={`/Singer?id=${id}`}>{name}</Link>
                            <span> / </span>
                        </React.Fragment>
                    )}
                </div>
                <div>
                    所属专辑：
                    <Link to={`/Album?id=${albumId}`}>{albumName}</Link>
                </div>
                <div className="btns">
                    <Button icon={<CaretRightOutlined />} onClick={handlePlay} disabled={!isFree}>播放</Button>
                    <Button icon={<HeartOutlined />} onClick={handleCollectSong} disabled={!isFree}>添加到歌单</Button>
                    <Button icon={<DownloadOutlined />} onClick={handleDownload} disabled={!isFree}>下载</Button>
                </div>
                <input type='checkbox' id='toggle-lyric' className="toggle" style={{ display: 'none' }} />
                {lyric.length === 0 &&
                    <div>暂无歌词</div>
                }
                <div className="lyric">
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
                <label htmlFor='toggle-lyric' />
            </div>
        </>
    );
}

export default SongDetail;
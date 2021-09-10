import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

interface Props {
    detailData: {
        title: string;
        cover: string;
        singers: { id: number; name: string; }[];
        publishTime: number;
        description: string;
    }
}

function AlbumDetail({ detailData }: Props) {
    const { title, cover, singers, publishTime, description } = detailData;

    const handlePlayAll = () => {

    }

    return (
        <>
            <div className="list-left">
                <div className="image">
                    <img src={`${cover}?param=240y240`} />
                </div>
            </div>
            <div className="list-right">
                <div className="title-alnum">{title}</div>
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
                    发行时间：
                    {new Date(publishTime).toLocaleDateString().replace(/\//g, '-')}
                </div>
                <div className="btns">
                    <Button icon={<CaretRightOutlined />} onClick={handlePlayAll}>播放全部</Button>
                </div>
                <div className="description">{description}</div>
            </div>
        </>
    );
}

export default AlbumDetail;
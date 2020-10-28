import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';
import { CustomerServiceOutlined, CaretRightOutlined } from '@ant-design/icons';
import { convertCount } from 'Utils';
import { playlistDetail, songDetail } from 'Apis/apiDiscovery';
import Loading from 'Components/Loading';

const RecommentSongList = ({ data, setPlaylist }) => {
    if (data.length === 0) {
        return <Loading />;
    }
    
    const history = useHistory();

    //点击播放按钮，直接播放歌单内所有歌曲
    const handlePlay = (e, id) => {
        e.stopPropagation();
        playlistDetail(id).then(result => {  //歌单详情
            const ids = result.playlist.trackIds.map(({ id }) => id);
            return songDetail(ids);
        }).then(result => {  //所有歌曲详情
            const list = result.songs.filter(({ fee }) => fee !== 1)  //过滤所有VIP歌曲
                .map(({ id, name, ar, dt, al: { picUrl } }) => ({
                    id,
                    title: name,
                    singer: ar.map(({ name }) => name).join('/'),
                    duration: dt / 1000,
                    cover: picUrl
                }));
            setPlaylist(list);
        });
    }

    //跳转到相应id的歌单页面
    const handleClick = (id) => {
        history.push(`/SongList?id=${id}`);
    }

    return (
        <div className='recommend-song-list'>
            <div className='songlist'>
                {
                    data.slice(0, 5).map(({ picUrl, name, copywriter, playCount, id }, idx) =>
                        <div className='listitem' key={'item' + idx}>
                            <div className='image' onClick={() => handleClick(id)}>
                                <img src={`${picUrl}?param=240y240`} />
                                <div className='copywriter'>{copywriter}</div>
                                <div className='play-count'><CustomerServiceOutlined />{convertCount(playCount)}</div>
                                <div className='play-button' onClick={(e) => handlePlay(e, id)}><CaretRightOutlined /></div>
                            </div>
                            <a className='description' onClick={() => handleClick(id)}>{name}</a>
                        </div>
                    )
                }
            </div>
            <div className='songlist'>
                {
                    data.slice(5, 10).map(({ picUrl, name, copywriter, playCount, id }, idx) =>
                        <div className='listitem' key={'item' + idx + 5}>
                            <div className='image' onClick={() => handleClick(id)}>
                                <img src={`${picUrl}?param=240y240`} />
                                <div className='copywriter'>{copywriter}</div>
                                <div className='play-count'><CustomerServiceOutlined />{convertCount(playCount)}</div>
                                <div className='play-button' onClick={(e) => handlePlay(e, id)}><CaretRightOutlined /></div>
                            </div>
                            <a className='description' onClick={() => handleClick(id)}>{name}</a>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default RecommentSongList;
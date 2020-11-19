import React, { useEffect, useState, memo } from 'react';
import './View.scss';
import { CaretRightOutlined, HeartOutlined, DeleteOutlined, StepForwardOutlined, HeartFilled } from '@ant-design/icons';
import { getToken } from 'Utils';
import { getFMList, unlike } from 'Apis/apiPersonalFM';
import testImg from 'Images/test.jpg';
import Loading from 'Components/Loading';

const PersonalFM = memo(({audioRef, setPlaying}) => {

    if (!getToken()) {  //无token，未登录
        return <div>私人FM需要登录使用</div>;
    }

    useEffect(() => {
        //隐藏音乐播放器
        const middle = document.getElementsByClassName('middle')[0];
        middle.style.height = '100%';

        //暂停当前音乐播放器的歌曲
        // setPlaying(false);
        // audioRef.current.pause();

        return () => {
            middle.style.height = 'calc(100% - 128px)';
        }
    },
        []
    );

    const [state, setState] = useState(null);
    const [like, setLike] = useState(false);

    //播放或暂停
    const handlePlayOrPause = () => {

    }

    //喜欢
    const handleLike = () => {
        setLike(!like);
    }

    //不喜欢
    const handleUnlike = () => {

    }

    //下一首
    const handleNext = () => {

    }

    if (false) {
        return <Loading />;
    }

    return (
        <div className='personal-fm'>
            <div className='title'>私人FM</div>
            <div className='music-box'>
                <div className='image'><img src={testImg} /></div>
                <a className='song' href="/#/Song?id=" target="_blank">音乐名</a>
                <div className='progress-container'>
                    <div className="progress"></div>
                </div>
                <div className='btn-container'>
                    <div className='icon' title='播放' onClick={handlePlayOrPause}><CaretRightOutlined /></div>
                    {
                        like ? <div className='icon' title='喜欢' onClick={handleLike}><HeartFilled style={{ color: '#C62F2F' }} /></div>
                            : <div className='icon' title='喜欢' onClick={handleLike}><HeartOutlined /></div>
                    }
                    <div className='icon' title='不喜欢' onClick={handleUnlike}><DeleteOutlined /></div>
                    <div className='icon' title='下一首' onClick={handleNext}><StepForwardOutlined /></div>
                </div>
            </div>
            <audio />
        </div>
    );
});

export default PersonalFM;
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
import Loading from 'Components/Loading';
import { useInterval } from 'Utils/hooks';
import { message } from 'antd';

const Carousel = ({ data }) => {
    if (data.length === 0) {
        return <Loading />;
    }
    
    const [currentKey, setKey] = useState(0);
    const len = data.length;
    const history = useHistory();

    //图片轮播
    useInterval(() => {
        setKey((currentKey + 1) % len);
    }, 5000);

    //根据当前下标返回style
    const getStyle = (idx) => {
        //从左数，idx与currentKey的距离
        const diff_left = idx - currentKey;
        //从右数，idx与currentKey的距离
        const diff_right = diff_left > 0 ? diff_left - len : diff_left + len;
        //选取绝对值最小的距离
        const diff = Math.abs(diff_left) > Math.abs(diff_right) ? diff_right : diff_left;

        const styleObj = {};

        if (diff === 0) {
            styleObj.left = '33.3%';
            styleObj.zIndex = 999;
            styleObj.opacity = 1;
            styleObj.transform = 'scale(1)';
        } else {
            styleObj.left = diff > 0 ? `${16.7 + diff * 40}%` : `${50 + diff * 40}%`;
        }

        if (Math.abs(diff) >= 2) {  //距离不小于2，隐藏
            styleObj.opacity = 0;
            styleObj.transform = 'scale(0)';
        }

        return styleObj;
    }

    //点击当前active的图片打开type指定的页面
    const handleClick = (idx, id, type) => {
        if (currentKey === idx) {
            switch (type) {
                case 1:  //歌曲
                    history.push(`/Song?id=${id}`);
                    break;
                case 10:  //专辑
                    history.push(`/Album?id=${id}`);
                    break;
                case 1000: //歌单
                    history.push(`SongList?id=${id}`);
                    break;
                case 1004:  //视频 
                    history.push(`/Video?id=${id}`);
                    break;
                case 3000:  //广告
                    message.info('点击项为网易云音乐广告页面， 未打开');
                    break;
                default:
                    return;
            }
        } else {
            setKey(idx);
        }
    }

    return (
        <div className='carousel'>
            <div className='card-container'>
                {
                    data.map(({ imageUrl, targetId, targetType }, idx) =>
                        <div
                            className='card'
                            key={`card-${idx}`}
                            onClick={() => handleClick(idx, targetId, targetType)}
                            style={getStyle(idx)}
                        >
                            <img src={`${imageUrl}?param=500y200`} />
                        </div>
                    )
                }
            </div>
            <div className='rects'>
                {
                    data.map((e, idx) =>
                        <div
                            key={`rect-${idx}`}
                            className={currentKey === idx ? 'rect active' : 'rect'}
                            onClick={() => setKey(idx)}
                        ></div>
                    )
                }
            </div>
        </div>
    );
}

export default Carousel;
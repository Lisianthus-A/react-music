import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './index.module.scss';
import { debounce, replaceHttpToHttps as rp } from 'Utils';
import { useInterval } from 'Utils/hooks';

const Carousel = ({ data }) => {
    const [currentKey, setKey] = useState(0);
    const len = data.length;
    const history = useHistory();
    const [autoPlay, setAutoPlay] = useState(true);  //是否开启轮播
    const debounceSetAutoPlay = debounce(setAutoPlay, 5000);  //防抖的 setAutoPlay

    //图片轮播
    useInterval(() => {
        setKey((currentKey + 1) % len);
    }, autoPlay ? 5000 : null);


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

    //点击当前的图片，打开指定的页面
    const handleClick = (idx, id, type, url) => {
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
                    window.open(url);
                    break;
                default:
                    return;
            }
        } else {
            handleSetKey(idx);
        }
    }

    //手动改变轮播的 active 图片
    const handleSetKey = (idx) => {
        setKey(idx);
        setAutoPlay(false);  //停止轮播
        debounceSetAutoPlay(true);  //5s 后开始轮播
    }

    return (
        <div className={style.carousel}>
            <div className={style['card-container']}>
                {data.map(({ imageUrl, targetId, targetType, url }, idx) =>
                    <div
                        className={style.card}
                        key={idx}
                        onClick={() => handleClick(idx, targetId, targetType, url)}
                        style={getStyle(idx)}
                    >
                        <img src={`${rp(imageUrl)}?param=500y200`} />
                    </div>
                )}
            </div>
            <div className={style.rects}>
                {data.map((e, idx) =>
                    <div
                        key={idx}
                        className={style.rect + (currentKey === idx ? ` ${style.active}` : '')}
                        onClick={() => handleSetKey(idx)}
                    ></div>
                )}
            </div>
        </div>
    );
}

export default Carousel;
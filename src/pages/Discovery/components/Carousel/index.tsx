import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './index.module.scss';
import { debounce, replaceHttpToHttps as rp } from '@/utils';
import { useInterval } from '@/utils/hooks';

import type { CSSProperties } from 'react';
import type { PageState } from '../../index';

interface Props {
    data: PageState['banner'];
}

function Carousel({ data }: Props) {
    const len = data.length;
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    // 是否开启轮播
    const [autoPlay, setAutoPlay] = useState(true);
    // 防抖的 setAutoPlay
    const debounceSetAutoPlay = debounce(setAutoPlay, 5000);

    // 图片轮播
    useInterval(() => {
        setActiveIndex((activeIndex + 1) % len);
    }, autoPlay ? 5000 : null);


    // 根据 index 返回样式
    const getStyle = (index: number): CSSProperties => {
        // 从左数 index 与 activeIndex 的距离
        const left_distance = index - activeIndex;
        // 从右数 index 与 activeIndex 的距离
        const right_distance = left_distance > 0
            ? left_distance - len
            : left_distance + len;
        // 选取绝对值最小的距离
        const min_distance = Math.abs(left_distance) > Math.abs(right_distance)
            ? right_distance
            : left_distance;

        const styleObj: CSSProperties = {};

        if (min_distance === 0) {
            styleObj.left = '33.3%';
            styleObj.zIndex = 999;
            styleObj.opacity = 1;
            styleObj.transform = 'scale(1)';
        } else {
            styleObj.left = min_distance > 0
                ? `${16.7 + min_distance * 40}%`
                : `${50 + min_distance * 40}%`;
        }

        // 距离不小于 2，隐藏
        if (Math.abs(min_distance) >= 2) {
            styleObj.opacity = 0;
            styleObj.transform = 'scale(0)';
        }

        return styleObj;
    }

    // 点击图片
    const handleClick = (index: number, id: number, type: number, url: string) => {
        // 点击的图片为当前 acitve 图，打开指定页面
        if (activeIndex === index) {
            switch (type) {
                case 1:  //歌曲
                    navigate(`/Song?id=${id}`);
                    break;
                case 10:  //专辑
                    navigate(`/Album?id=${id}`);
                    break;
                case 1000: //歌单
                    navigate(`SongList?id=${id}`);
                    break;
                case 1004:  //视频 
                    navigate(`/Video?id=${id}`);
                    break;
                case 3000:  //广告
                    window.open(url);
                    break;
                default:
                    return;
            }
        } else {
            // 设置点击的图片为 active
            handleSetKey(index);
        }
    }

    // 手动改变 active 图片
    const handleSetKey = (index: number) => {
        setActiveIndex(index);
        // 停止轮播
        setAutoPlay(false);
        // 5s 后开始轮播
        debounceSetAutoPlay(true);
    }

    return (
        <div className={style.carousel}>
            <div className="card-container">
                {data.map(({ imageUrl, targetId, targetType, url }, idx) =>
                    <div
                        className="card"
                        key={idx}
                        onClick={() => handleClick(idx, targetId, targetType, url)}
                        style={getStyle(idx)}
                    >
                        <img src={`${rp(imageUrl)}?param=500y200`} />
                    </div>
                )}
            </div>
            <div className="rects">
                {data.map((_, idx) =>
                    <div
                        key={idx}
                        className={activeIndex === idx ? "rect-active" : "rect"}
                        onClick={() => handleSetKey(idx)}
                    />
                )}
            </div>
        </div>
    );
}

export default Carousel;
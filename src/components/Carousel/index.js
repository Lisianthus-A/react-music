import React, { useState } from 'react';
import './index.scss';

const Carousel = ({ data }) => {
    const [currentKey, setKey] = useState(0);

    //根据当前下标返回style
    const getStyle = (idx) => {
        const len = data.length;
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

    return (
        <div className='carousel'>
            <div className='card-container'>
                {
                    data.map(({ imageUrl }, idx) =>
                        <div
                            className='card'
                            key={`card-${idx}`}
                            onClick={() => setKey(idx)}
                            style={getStyle(idx)}
                        >
                            <img src={imageUrl} />
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
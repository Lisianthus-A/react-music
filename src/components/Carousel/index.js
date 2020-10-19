import React, { useState } from 'react';
import './index.scss';
import testImg from '../../../assets/images/test.jpg';

const Carousel = (props) => {
    //先用测试图片，接入后端再使用props
    const arr = new Array(8).fill(testImg);

    const [currentKey, setKey] = useState(0);

    //根据当前下标返回style
    const getStyle = (idx) => {
        //从左数，idx与currentKey的距离
        const diff_left = idx - currentKey;
        //从右数，idx与currentKey的距离
        const diff_right = diff_left > 0 ? diff_left - arr.length : diff_left + arr.length  //arr待替换
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
                    arr.map((e, idx) =>  //arr待替换
                        <div
                            className='card'
                            key={`card-${idx}`}
                            onClick={() => setKey(idx)}
                            style={getStyle(idx)}
                        >
                            <img src={e} />
                        </div>
                    )
                }
            </div>
            <div className='rects'>
                {
                    arr.map((e, idx) =>  //arr待替换
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
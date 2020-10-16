import React, { useState } from 'react';
import './index.scss';
import testImg from '../../../assets/images/test.jpg';

const Carousel = (props) => {
    //先用测试图片，接入后端再使用props
    const arr = new Array(8).fill(testImg);

    const [currentKey, setKey] = useState(0);

    //根据当前下标和最大下标返回style
    const getStyle = (idx, maxIdx) => {
        const diff = idx - currentKey;
        const styleObj = {};

        if (diff === 0) {
            styleObj.left = '33.3%';
            styleObj.zIndex = 999;
            styleObj.opacity = 1;
            styleObj.transform = 'scale(1)';
        } else if (diff > 0) {
            styleObj.left = `${16.7 + diff * 40}%`;
        } else {
            styleObj.left = `${50 + diff * 40}%`;
        }

        if (Math.abs(diff) >= 2) {
            styleObj.opacity = 0;
            styleObj.transform = 'scale(0)';
        }

        //特殊值处理
        if (currentKey === 0 && idx === maxIdx) {
            styleObj.left = '10%';
            styleObj.opacity = 0.8;
            styleObj.transform = 'scale(0.8)';
        } else if (currentKey === maxIdx && idx === 0) {
            styleObj.left = '56.7%';
            styleObj.opacity = 0.8;
            styleObj.transform = 'scale(0.8)';
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
                            style={getStyle(idx, arr.length - 1)}
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
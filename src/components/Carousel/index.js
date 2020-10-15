import React, { useState } from 'react';
import './index.scss';
import testImg from '../../../assets/images/test.jpg';

const Carousel = (props) => {
    //先用测试图片，接入后端再使用props
    const arr = new Array(8).fill(testImg);

    const [currentKey, setKey] = useState(0);

    //根据idx和currentKey返回className
    const getClassName = (idx) => {
        const indexs = arr.map((e, idx) => idx);  //arr待替换
        const P1Key = indexs.slice(currentKey - 1)[0];
        const P2Key = indexs.slice(currentKey - 2)[0];
        const N1Key = (currentKey + 1) % indexs.length;
        const N2Key = (currentKey + 2) % indexs.length;
        const base = 'card';
        switch (idx) {
            case P1Key:
                return base + ' prev';
            case P2Key:
                return base + ' prev2';
            case N1Key:
                return base + ' next';
            case N2Key:
                return base + ' next2';
            case currentKey:
                return base + ' current';
            default:
                return base;
        }
    }

    return (
        <div className='carousel'>
            <div className='card-container'>
                {
                    arr.map((e, idx) =>  //arr待替换
                        <div className={getClassName(idx)} key={`card-${idx}`} onClick={() => setKey(idx)}>
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
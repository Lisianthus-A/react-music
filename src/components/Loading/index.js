import React from 'react';
import style from './index.module.scss';

const array = new Array(16).fill(0);

const Loading = () => (
    <div className={style.container}>
        <div className={style.loader}>
            {array.map((_, idx) =>
                <div className={style.square} key={idx} />
            )}
        </div>
        <div className={style['loading-text']}>加载中</div>
    </div>
);

export default Loading;
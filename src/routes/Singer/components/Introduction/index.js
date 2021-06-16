import React from 'react';
import style from './index.module.scss'

const Introduction = ({ data }) => {
    const { briefDesc, intro } = data;
    return (
        <div className={style.intro}>
            <div className={style.block}>
                <h2>歌手简介</h2>
                <span>{briefDesc}</span>
            </div>
            {intro.map(({ ti, txt }, idx) =>
                <div className={style.block} key={idx}>
                    <h2>{ti}</h2>
                    <span>{txt}</span>
                </div>
            )}
        </div>
    );
}

export default Introduction;
import React from 'react';
import style from './index.module.scss'

const Introduction = ({ data }) => {
    const { briefDesc, intro } = data;
    return (
        <div className={style.intro}>
            <p>
                <h2>歌手简介</h2>
                <span>{briefDesc}</span>
            </p>
            {intro.map(({ ti, txt }) =>
                <p>
                    <h2>{ti}</h2>
                    <span>{txt}</span>
                </p>
            )}
        </div>
    );
}

export default Introduction;
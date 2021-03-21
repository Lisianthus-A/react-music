import React from 'react';
import style from './index.module.scss';
import { replaceHttpToHttps as rp } from 'Utils';

const Header = ({ data }) => {

    const { name, alias, cover } = data;

    return (
        <>
            <div className={style.title}>{name}<span>{alias.join(';')}</span></div>
            <div className={style.image}><img src={`${rp(cover)}?param=640y300`} /></div>
        </>
    );
}

export default Header;
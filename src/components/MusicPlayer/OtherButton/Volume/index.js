import React, { memo } from 'react';
import style from './index.module.scss';
import './reset.scss';
import { Slider } from 'antd';
import { SoundOutlined } from '@ant-design/icons';

const Volume = memo(({ audioRef }) => {

    //设置音量
    const handleChangeVolume = (value) => {
        audioRef.current.volume = value / 100;
    }

    return (
        <div className={style.volume + ' volume'}>
            <div className={style.icon} title='音量'><SoundOutlined /></div>
            <div className={style.slider}>
                <Slider defaultValue={100} onChange={handleChangeVolume} tipFormatter={(value) => `${value}%`} />
            </div>
        </div>
    );
});

export default Volume;
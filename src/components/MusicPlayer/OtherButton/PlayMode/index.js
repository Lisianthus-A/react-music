import React, { memo } from 'react';
import style from './index.module.scss';
import CustomIcon from 'Components/CustomIcon';
import { RetweetOutlined } from '@ant-design/icons';

const PlayMode = memo(({ playMode, setPlayMode }) => {

    //设置播放模式
    const handleSetPlayMode = () => {
        switch (playMode) {
            case 'list-loop':
                setPlayMode('random');
                break;
            case 'random':
                setPlayMode('single-cycle');
                break;
            default:
                setPlayMode('list-loop');
        }
    }

    return (
        <div className={style['play-mode']}>
            <div className={style.icon} onClick={handleSetPlayMode}>
                {
                    {
                        'list-loop': <RetweetOutlined title='列表循环' />,
                        'random': <CustomIcon type='icon-random' title='随机' />,
                        'single-cycle': <CustomIcon type='icon-Singlecycle' title='单曲循环' />
                    }[playMode]
                }
            </div>
        </div>
    );
});

export default PlayMode;
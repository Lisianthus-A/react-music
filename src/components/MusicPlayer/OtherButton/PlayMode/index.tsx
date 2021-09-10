import React, { memo, useContext } from 'react';
import style from './index.module.scss';
import { FuncContext } from 'AppContainer/index';
import CustomIcon from 'Components/CustomIcon';
import { RetweetOutlined } from '@ant-design/icons';

import type { State } from 'AppContainer/index';

interface Props {
    playMode: State['playMode'];
}

const iconMap = {
    'list-loop': <RetweetOutlined title='列表循环' />,
    'random': <CustomIcon type='icon-random' title='随机' />,
    'single-cycle': <CustomIcon type='icon-Singlecycle' title='单曲循环' />
};

function PlayMode({ playMode }: Props) {

    const { setPlayMode } = useContext(FuncContext);

    // 设置播放模式
    const handleSetPlayMode = () => {
        let nextPlayMode: State['playMode'];
        if (playMode === 'list-loop') {
            nextPlayMode = 'random';
        } else if (playMode === 'random') {
            nextPlayMode = 'single-cycle';
        } else {
            nextPlayMode = 'list-loop';
        }

        setPlayMode(nextPlayMode);
    }

    const icon = iconMap[playMode];

    return (
        <div className={style['play-mode']}>
            <div className="icon" onClick={handleSetPlayMode}>
                {icon}
            </div>
        </div>
    );
}

export default memo(PlayMode);
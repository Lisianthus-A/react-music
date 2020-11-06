import React from 'react';
import './index.scss';
import CustomIcon from 'Components/CustomIcon';
import { RetweetOutlined } from '@ant-design/icons';

const PlayMode = ({ setPlayMode, playMode }) => {

    //设置播放模式
    const handleSetPlayMode = () => {
        if (playMode === 'list-loop') {
            setPlayMode('random');
        } else if (playMode === 'random') {
            setPlayMode('single-cycle');
        } else {
            setPlayMode('list-loop');
        }
    }

    return (
        <div className='play-mode'>
            <div className='icon' onClick={handleSetPlayMode}>
                {
                    playMode === 'list-loop' ? <RetweetOutlined title='列表循环' /> :
                        playMode === 'random' ? <CustomIcon type='icon-random' title='随机' /> :
                            <CustomIcon type='icon-Singlecycle' title='单曲循环' />
                }
            </div>
        </div>
    );
}

export default PlayMode;
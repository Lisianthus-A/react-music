import React from 'react';
import style from './View.module.scss';

import Detail from 'Components/Detail';
import CommentList from 'Components/CommentList';
import Loading from 'Components/Loading';

const Song = ({ state }) => {

    if (!state) {
        return <Loading />;
    }

    return (
        <div className={style.song}>
            <Detail data={state.detail} songs={state.songs} lyric={state.lyric} />
            <CommentList data={state.comment} />
        </div>
    );
}

export default Song;
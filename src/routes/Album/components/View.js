import React from 'react';
import style from './View.module.scss';

import Detail from 'Components/Detail';
import SongList from 'Components/SongList';
import CommentList from 'Components/CommentList';
import Loading from 'Components/Loading';

const Album = ({ state }) => {
    if (!state) {
        return <Loading />;
    }

    return (
        <div className={style.album}>
            <Detail data={state.detail} songs={state.songs} />
            <SongList data={state.songs} />
            <CommentList data={state.comment} songs={state.songs} />
        </div>
    );
}

export default Album;
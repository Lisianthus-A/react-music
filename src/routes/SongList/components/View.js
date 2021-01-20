import React from 'react';
import style from './View.module.scss';

import Detail from 'Components/Detail';
import Songs from 'Components/SongList';
import CommentList from 'Components/CommentList';
import Loading from 'Components/Loading';

const SongList = ({ state }) => {
    if (!state) {
        return <Loading />;
    }

    const { isCreator } = state.detail;

    return (
        <div className={style.songlist}>
            <Detail data={state.detail} songs={state.songs} />
            <Songs data={state.songs} isCreator={isCreator} />
            <CommentList data={state.comment} />
        </div>
    );
}

export default SongList;
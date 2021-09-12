import React from 'react';
import style from './View.module.scss';
import Detail from 'Components/Detail';
import CommentList from 'Components/CommentList';
import Loading from 'Components/Loading';

import type { PageState } from '../index';

interface Props {
    pageState: PageState | null;
}

function View({ pageState }: Props) {

    if (!pageState) {
        return <Loading />;
    }

    const { detail, songList, lyric, comment } = pageState;

    return (
        <div className={style.song}>
            <Detail data={{ detail, songList, lyric }} />
            <CommentList data={comment} />
        </div>
    );
}

export default View;
import style from './View.module.scss';
import Detail from 'Components/Detail';
import SongList from 'Components/SongList';
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

    const { detail, songList, comment } = pageState;

    return (
        <div className={style.album}>
            <Detail data={{ detail, songList }} />
            <SongList songList={songList} />
            <CommentList data={comment} />
        </div>
    );
}

export default View;
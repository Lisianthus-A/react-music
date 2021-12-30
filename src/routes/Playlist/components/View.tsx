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

    const { detail, songIds, comment } = pageState;
    const { isCreator } = detail;

    return (
        <div className={style.playlist}>
            <Detail data={{ detail, songIds }} />
            <SongList songIds={songIds} isCreator={isCreator} />
            <CommentList data={comment} />
        </div>
    );
}

export default View;
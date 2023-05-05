import style from './View.module.scss';
import { Detail, SongList, CommentList, Loading } from '@/components';

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
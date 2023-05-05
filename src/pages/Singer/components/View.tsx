import style from './View.module.scss';
import { Loading, SongList, Tabs } from '@/components';
import Header from './Header';
import Introduction from './Introduction';
import AlbumList from './AlbumList';

import type { PageState } from '../index';

interface Props {
    pageState: PageState | null;
}

function View({ pageState }: Props) {
    if (!pageState) {
        return <Loading />;
    }

    const { header, songList, intro, albumList } = pageState;

    return (
        <div className={style.singer}>
            <Header data={header} />
            <Tabs>
                <Tabs.Pane key="0" text="热门作品">
                    <SongList songList={songList} />
                </Tabs.Pane>
                <Tabs.Pane key="1" text="歌手专辑">
                    <AlbumList data={albumList}  />
                </Tabs.Pane>
                <Tabs.Pane key="2" text="歌手介绍">
                    <Introduction data={intro} />
                </Tabs.Pane>
            </Tabs>
        </div>
    );
}

export default View;

import style from './View.module.scss';
import { Tabs, Pagination, Loading, SongList } from '@/components';
import AlbumList from './AlbumList';
import SingerList from './SingerList';
import PlaylistList from './PlaylistList';

import type { PageState } from '../index';

interface Props {
    pageState: PageState;
    setPageState: (pageState: Partial<PageState>) => void;
}

function View({ pageState, setPageState }: Props) {
    const { loading, data, currentPage, total } = pageState;

    return (
        <div className={style.view}>
            <Tabs
                onChange={(tab) => {
                    // @ts-ignore
                    setPageState({ type: tab, loading: true, currentPage: 1 });
                }}
            >
                <Tabs.Pane key="song" text="单曲">
                    {loading
                        ? <Loading />
                        : <SongList songList={data} />
                    }
                </Tabs.Pane>
                <Tabs.Pane key="album" text="专辑">
                    {loading
                        ? <Loading />
                        : <AlbumList data={data} />
                    }
                </Tabs.Pane>
                <Tabs.Pane key="singer" text="歌手">
                    {loading
                        ? <Loading />
                        : <SingerList data={data} />
                    }
                </Tabs.Pane>
                <Tabs.Pane key="playlist" text="歌单">
                    {loading
                        ? <Loading />
                        : <PlaylistList data={data} />
                    }
                </Tabs.Pane>
            </Tabs>
            <Pagination
                currentPage={currentPage}
                total={total}
                pageSize={30}
                onChange={(page) => {
                    setPageState({
                        currentPage: page,
                    });
                }}
            />
        </div>
    );
}

export default View;
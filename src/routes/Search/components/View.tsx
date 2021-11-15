import React from 'react';
import style from './View.module.scss';
import Tabs from 'Components/Tabs';
import Pagination from 'Components/Pagination';
import Loading from 'Components/Loading';
import SongList from 'Components/SongList';
import AlbumList from './AlbumList';

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
                onChange={() => {
                    // @ts-ignore
                    setPageState({ type: tab });
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
                    singer
                </Tabs.Pane>
                <Tabs.Pane key="playlist" text="歌单">
                    playlist
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
import React, { Suspense, memo } from 'react';
import style from './index.module.scss';
import Loading from 'Components/Loading';
import Header from 'Components/Header';
import Sidebar from 'Components/Sidebar';
import MusicPlayer from 'Components/MusicPlayer';

import type { LazyExoticComponent } from 'react';

interface Props {
    TargetComponent: LazyExoticComponent<any>;
}

function Layout({ TargetComponent }: Props) {
    return (
        <div className={style.layout}>
            <div className={style.top}>
                <Header />
            </div>

            <div className={style.middle}>
                <div className={style.left}>
                    <Sidebar />
                </div>
                <div className={style.right}>
                    <Suspense fallback={<Loading />}>
                        <TargetComponent />
                    </Suspense>
                </div>
            </div>

            <div className={style.bottom}>
                <MusicPlayer />
            </div>
        </div>
    );
}

export default memo(Layout);
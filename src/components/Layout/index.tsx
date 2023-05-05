import { memo } from 'react';
import style from './index.module.scss';
import { Header, Sidebar, MusicPlayer } from '@/components';

import type { ReactElement } from 'react';

interface Props {
    children: ReactElement;
}

function Layout({ children }: Props) {
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
                    {children}
                </div>
            </div>

            <div className={style.bottom}>
                <MusicPlayer />
            </div>
        </div>
    );
}

export default memo(Layout);
import React, { Suspense, useRef } from 'react';
import './index.scss';
import Loading from 'Components/Loading';
import Header from 'Components/Header';
import Sidebar from 'Components/Sidebar';
import MusicPlayer from 'Components/MusicPlayer';

const Layout = ({ TargetComponent }) => {
    const audioRef = useRef(null);

    return (
        <div className="layout">
            <div className="top">
                <Header />
            </div>

            <div className='middle'>
                <div className="left">
                    <Sidebar />
                </div>
                <div className="right">
                    <Suspense fallback={<Loading />}>
                        <TargetComponent audioRef={audioRef} />
                    </Suspense>
                </div>
            </div>

            <div className="bottom">
                <MusicPlayer ref={audioRef} />
            </div>
        </div>
    );
}

export default Layout;
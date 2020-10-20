import React, { Suspense, useRef } from 'react';
import './index.scss';
import Loading from '../Loading';
import Header from '../Header';
import Sidebar from '../Sidebar';
import MusicPlayer from '../MusicPlayer';

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
                        <TargetComponent />
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
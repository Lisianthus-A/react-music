import React, { Suspense } from 'react';
import './index.scss';
import Loading from '../Loading';
import Header from '../Header';
import Sidebar from '../Sidebar';
import MusicPlayer from '../MusicPlayer';

const Layout = (props) => {
    const { TargetComponent } = props;
    return (
        <div className="layout">
            <div className="top">
                <Header />
            </div>

            <div className="middle-left">
                <Sidebar />
            </div>

            <div className="middle-right">
                <Suspense fallback={<Loading />}>
                    <TargetComponent />
                </Suspense>
            </div>

            <div className="bottom">
                <MusicPlayer />
            </div>
        </div>
    );
}

export default Layout;
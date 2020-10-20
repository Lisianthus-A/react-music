import React, { Suspense, useRef } from 'react';
import './index.scss';
import Loading from '../Loading';
import Header from '../Header';
import Sidebar from '../Sidebar';
import MusicPlayer from '../MusicPlayer';

const Layout = (props) => {
    const { TargetComponent } = props;
    const audioRef = useRef(null);

    return (
        <div className="layout">
            <div className="top">
                <Header />
            </div>

            <div className='middle'>
                <input type="checkbox" id="toggle" style={{ display: "none" }} />
                <div className="left">
                    <Sidebar />
                    <label htmlFor="toggle">
                        <div className='toggle-button'>
                            <span className='arrow' ></span>
                        </div>
                    </label>
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
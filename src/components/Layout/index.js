import React, { Suspense, useState, useRef } from 'react';
import './index.scss';
import Loading from '../Loading';
import Header from '../Header';
import Sidebar from '../Sidebar';
import MusicPlayer from '../MusicPlayer';

const Layout = (props) => {
    const { TargetComponent } = props;
    const [visible, setVisible] = useState(true);
    const layoutRef = useRef(null);
    const sidebarRef = useRef(null);
    const arrowRef = useRef(null);

    const toggleVisible = () => {
        if (visible) {
            layoutRef.current.classList.add('layout-change');
            arrowRef.current.classList.add('rotate');
            sidebarRef.current.style.display = 'none';
        } else {
            layoutRef.current.classList.remove('layout-change');
            arrowRef.current.classList.remove('rotate');
            sidebarRef.current.style.display = 'block';
        }
        setVisible(!visible);
    }

    return (
        <div className="layout" ref={layoutRef}>
            <div className="top">
                <Header />
            </div>

            <div className="middle-left">
                <Sidebar ref={sidebarRef} />
                <div className='toggle-button' onClick={toggleVisible}>
                    <span className='arrow' ref={arrowRef}></span>
                </div>
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
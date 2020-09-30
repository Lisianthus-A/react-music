import React, { Suspense } from 'react';
import './index.scss';
import Loading from '../Loading';

const Layout = (props) => {
    const { TargetComponent } = props;
    return (
        <div className="layout">
            <div className="top">
                top
                </div>
            <div className="middle-left">
                middle-left
                </div>
            <div className="middle-right">
                <div className="content">
                    <Suspense fallback={<Loading />}>
                        <TargetComponent />
                    </Suspense>
                </div>
            </div>
            <div className="bottom">
                bottom
            </div>
        </div>
    );
}

export default Layout;
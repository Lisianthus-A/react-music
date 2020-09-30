import React, { Suspense } from 'react';
import './index.scss';
import Loading from '../Loading';
import Header from '../Header';

const Layout = (props) => {
    const { TargetComponent } = props;
    return (
        <div className="layout">
            <div className="top">
                <Header />
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
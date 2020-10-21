import React from 'react';
import { useLocation, useHistory } from 'react-router';
import routes from '../routes';
import Layout from 'Components/Layout';
import 'antd/dist/antd.css';  //全局引入antd css

const AppContainer = () => {

    const { pathname } = useLocation();
    const history = useHistory();

    if (!routes.includes(pathname)) {  //访问路径不在路由列表中
        history.replace(routes[0]);
    }

    const TargetComponent = React.lazy(() => import(`../routes${pathname}`));

    return (
        <Layout TargetComponent={TargetComponent} />
    );
}

export default AppContainer;
import React from 'react';
import { useLocation, useHistory } from 'react-router';
import routes from '../routes';
import Layout from '../components/Layout';

const AppContainer = () => {

    const { pathname } = useLocation();
    const history = useHistory();

    if (!routes.includes(pathname)) {  //访问路径不在路由列表中
        history.push(routes[0]);
    }

    const TargetComponent = React.lazy(() => import(`../routes${pathname}`));

    return (
        <Layout TargetComponent={TargetComponent} />
    );
}

export default AppContainer;
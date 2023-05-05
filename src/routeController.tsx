import { Suspense, useEffect, useState, lazy } from 'react';
import { Loading } from '@/components';
import { useLocation, useNavigate } from 'react-router-dom';
import routes from "./routes";

import type { LazyExoticComponent } from 'react';

interface Route {
    path: string;
    component: () => any;
}

// 静态路由
const staticRouteMap: Record<string, Route> = {};

routes.forEach(route => {
    const { path } = route;
    staticRouteMap[path] = route;
});

function Controller() {
    const navigate = useNavigate();
    const location = useLocation();
    const [Component, setComponent] = useState<LazyExoticComponent<any> | null>(null);

    useEffect(() => {
        const { pathname } = location;

        // 获取页面组件
        // 查找符合的静态路由
        const staticRoute = staticRouteMap[pathname] || null;
        if (staticRoute) {
            setComponent(lazy(staticRoute.component));
            return;
        }

        // 404
        navigate('/Discovery');

    }, [location]);

    if (!Component) {
        return null;
    }

    return (
        <Suspense fallback={<Loading />}>
            <Component />
        </Suspense>
    );
}

export default Controller;
import { Suspense, useEffect, useState, lazy } from 'react';
import { Loading } from 'Components/index';
import { useLocation, useNavigate } from 'react-router-dom';
import routes from "./routes";

import type { LazyExoticComponent } from 'react';

interface Route {
    isDynamic: boolean;
    path: string;
    component: () => any;
}

// 静态路由
const staticRouteMap: Record<string, Route> = {};
// 动态路由
const dynamicRouteMap: Record<string, Route> = {};

routes.forEach(route => {
    const { path, isDynamic } = route;
    if (isDynamic) {
        dynamicRouteMap[path] = route;
    } else {
        staticRouteMap[path] = route;
    }
});

function Controller() {
    const navigate = useNavigate();
    const location = useLocation();
    const [Component, setComponent] = useState<LazyExoticComponent<any> | null>(null);
    const [query, setQuery] = useState<Record<string, string>>({});
    const [pageParams, setPageParams] = useState<Record<string, string>>({});

    useEffect(() => {
        const { search, pathname } = location;
        // 获取 query 参数
        const matchArray = search.match(/[?&]([^?&]+)=([^?&]+)/g) || [];
        const matchQuery = matchArray.reduce((acc: Record<string, string>, cur) => {
            const [key, value] = cur.slice(1).split('=');
            acc[key] = value;
            return acc;
        }, {});
        setQuery(matchQuery);

        // 获取页面组件
        // 查看是否符合静态路由
        const staticRoute = staticRouteMap[pathname] || null;
        if (staticRoute) {
            setComponent(lazy(staticRoute.component));
            setPageParams({});
            return;
        }

        // 查看是否符合动态路由
        for (const key in dynamicRouteMap) {
            const { path, component } = dynamicRouteMap[key];
            const fields = (path.match(/\[[^\/]+\]/g) || []).map(item => item.slice(1, -1));
            const regex = new RegExp(path.replace(/\[[^\/]+\]/g, '([^\/]+)'));
            const values = (pathname.match(regex) || []).slice(1);
            if (fields.length === values.length) {
                const pageParamsObj: Record<string, string> = {};
                for (let i = 0; i < fields.length; ++i) {
                    const field = fields[i];
                    const value = values[i];
                    pageParamsObj[field] = value;
                }
                setComponent(lazy(component));
                setPageParams(pageParamsObj);
                return;
            }
        }

        // 404
        navigate('/Discovery');

    }, [location]);

    if (!Component) {
        return null;
    }

    return (
        <Suspense fallback={<Loading />}>
            <Component query={query} pageParams={pageParams} />
        </Suspense>
    );
}

export default Controller;
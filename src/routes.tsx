export default [
    {
        isDynamic: false,
        path: "/Album",
        component: () => import("./pages/Album")
    },
    {
        isDynamic: false,
        path: "/Discovery",
        component: () => import("./pages/Discovery")
    },
    {
        isDynamic: false,
        path: "/MySongList",
        component: () => import("./pages/MySongList")
    },
    {
        isDynamic: false,
        path: "/PersonalFM",
        component: () => import("./pages/PersonalFM")
    },
    {
        isDynamic: false,
        path: "/Playlist",
        component: () => import("./pages/Playlist")
    },
    {
        isDynamic: false,
        path: "/Search",
        component: () => import("./pages/Search")
    },
    {
        isDynamic: false,
        path: "/Singer",
        component: () => import("./pages/Singer")
    },
    {
        isDynamic: false,
        path: "/Song",
        component: () => import("./pages/Song")
    },
    {
        isDynamic: false,
        path: "/User",
        component: () => import("./pages/User")
    },
    {
        isDynamic: false,
        path: "/Video",
        component: () => import("./pages/Video")
    },
];
export default [
    {
        path: "/Album",
        component: () => import("./pages/Album")
    },
    {
        path: "/Discovery",
        component: () => import("./pages/Discovery")
    },
    {
        path: "/MySongList",
        component: () => import("./pages/MySongList")
    },
    {
        path: "/PersonalFM",
        component: () => import("./pages/PersonalFM")
    },
    {
        path: "/Playlist",
        component: () => import("./pages/Playlist")
    },
    {
        path: "/Search",
        component: () => import("./pages/Search")
    },
    {
        path: "/Singer",
        component: () => import("./pages/Singer")
    },
    {
        path: "/Song",
        component: () => import("./pages/Song")
    },
    {
        path: "/User",
        component: () => import("./pages/User")
    },
    {
        path: "/Video",
        component: () => import("./pages/Video")
    },
];
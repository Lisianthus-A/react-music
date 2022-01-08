export default [
    {
        isDynamic: false,
        path: "/Album",
        component: () => import("./routes/Album")
    },
    {
        isDynamic: false,
        path: "/Discovery",
        component: () => import("./routes/Discovery")
    },
    {
        isDynamic: false,
        path: "/MySongList",
        component: () => import("./routes/MySongList")
    },
    {
        isDynamic: false,
        path: "/PersonalFM",
        component: () => import("./routes/PersonalFM")
    },
    {
        isDynamic: false,
        path: "/Playlist",
        component: () => import("./routes/Playlist")
    },
    {
        isDynamic: false,
        path: "/Search",
        component: () => import("./routes/Search")
    },
    {
        isDynamic: false,
        path: "/Singer",
        component: () => import("./routes/Singer")
    },
    {
        isDynamic: false,
        path: "/Song",
        component: () => import("./routes/Song")
    },
    {
        isDynamic: false,
        path: "/User",
        component: () => import("./routes/User")
    },
    {
        isDynamic: false,
        path: "/Video",
        component: () => import("./routes/Video")
    },
];
import { useState, useEffect, memo } from "react";
import style from "./index.module.scss";
import { useLocation, Link } from "react-router-dom";
import { Icon } from "@/components";

function Sidebar() {
    const [currentKey, setKey] = useState("Discovery");
    const { pathname } = useLocation();

    useEffect(() => {
        setKey(pathname.slice(1));
    }, [pathname]);

    return (
        <div className={style.container}>
            <input type="checkbox" id="toggle" className="input-toggle" />
            <div className="sidebar">
                <div className="category">推荐</div>
                <Link
                    className={
                        currentKey === "Discovery" ? "item active" : "item"
                    }
                    to="/Discovery"
                >
                    <Icon type="icon-search" />
                    发现音乐
                </Link>
                <Link
                    className={
                        currentKey === "PersonalFM" ? "item active" : "item"
                    }
                    to="/PersonalFM"
                >
                    <Icon type="icon-sound" />
                    私人FM
                </Link>
                <div className="category">我的音乐</div>
                <Link
                    className={
                        currentKey === "MySongList" ? "item active" : "item"
                    }
                    to="/MySongList"
                >
                    <Icon type="icon-heart" />
                    发现音乐
                </Link>
                <div className="category">GitHub</div>
                <Link
                    className="item"
                    to="https://github.com/lisianthus-a/react-music"
                    target="_blank"
                >
                    <Icon type="icon-github-fill" />
                    项目地址
                </Link>
                <Link
                    className="item"
                    to="https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi"
                    target="_blank"
                >
                    <Icon type="icon-file-text" />
                    API文档
                </Link>
            </div>
            <label htmlFor="toggle">
                <div className="toggle" />
            </label>
        </div>
    );
}

export default memo(Sidebar);

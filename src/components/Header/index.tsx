import { useState, useEffect, memo } from "react";
import style from "./index.module.scss";
import { Icon } from "@/components";
import { getCookie } from "@/utils";
import { logout } from "@/apis/login";
import LoginModal from "./LoginModal";
import Search from "./Search";
interface UserInfo {
    name: string | null;
    avatar: string | null;
}

function Header() {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        name: null,
        avatar: null,
    });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // token 未过期
        if (getCookie()) {
            const name = window.localStorage.getItem("username");
            const avatar = window.localStorage.getItem("avatar");
            if (name && avatar) {
                setUserInfo({ name, avatar });
            }
        }
    }, []);

    const toggleVisible = () => {
        // 已登录
        if (userInfo.name !== null) {
            return;
        }
        setVisible(!visible);
    };

    // 退出登录
    const handleLogout = async () => {
        const result = await logout();
        if (result.code === 200) {
            window.localStorage.clear();
            setUserInfo({ name: null, avatar: null });
        }
    };

    return (
        <div className={style.header}>
            <div className="avatar-wrapper" onClick={toggleVisible}>
                {userInfo.avatar && (
                    <img
                        className="avatar-image"
                        src={`${userInfo.avatar}?param=80y80`}
                    />
                )}
                {!userInfo.avatar && <Icon type="icon-user" />}
            </div>
            <div className="username">{userInfo.name || "未登录"}</div>
            {userInfo.name && (
                <div className="logout" onClick={handleLogout}>
                    退出登录
                </div>
            )}
            <Search />
            {visible && (
                <LoginModal
                    onCancel={toggleVisible}
                    setUserInfo={setUserInfo}
                />
            )}
        </div>
    );
}

export default memo(Header);

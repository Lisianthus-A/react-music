import { useEffect, useState } from "react";
import { Modal, Input, Toast, Tabs } from "@/components";
import {
    emailLogin,
    phoneLogin,
    getLoginQR,
    checkLoginQR,
    loginStatus,
} from "@/apis/login";
import { replaceHttpToHttps as rp } from "@/utils";
import { useInterval } from "@/utils/hooks";

interface Props {
    onCancel: (...args: any[]) => void;
}

const ONE_DAY = 86400000;

function ModalView({ onCancel }: Props) {
    // login by account
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginType, setLoginType] = useState<"account" | "qr">("qr");
    // login by qrcode
    const [src, setSrc] = useState("");
    const [delay, setDelay] = useState<number | null>(1500);

    const handleTabChange = (type: string) => {
        setLoginType(type as any);
        setDelay(type === "qr" ? 1500 : null);
    };

    // 登录
    const onOk = async () => {
        // 无效输入
        if (!username || !password) {
            Toast.show("账号或密码未填写");
            return;
        }

        // 登录类型
        let loginType: "email" | "phone";
        if (/^[\w-.]+@[\w-.]+\.\w+$/.test(username)) {
            loginType = "email";
        } else if (/^1[3-9]\d{9}$/.test(username)) {
            loginType = "phone";
        } else {
            Toast.show("账号类型有误");
            return;
        }

        const res =
            loginType === "email"
                ? await emailLogin(username, password)
                : await phoneLogin(username, password);

        // 昵称
        window.localStorage.setItem("username", res.profile.nickname);
        // 头像
        window.localStorage.setItem("avatar", rp(res.profile.avatarUrl));
        // 用户 id
        window.localStorage.setItem("userid", res.account.id);

        const matchRes: string[] | null = res.cookie.match(/[\w-]+=\w+/g);
        if (matchRes) {
            const cookieObj: Record<string, string> = {};
            matchRes.forEach((item) => {
                const [key, value] = item.split("=");
                const lowerKey = key.toLowerCase();
                if (["max-age", "expires"].indexOf(lowerKey) >= 0) {
                    return;
                }
                cookieObj[key] = value;
            });
            let cookie = "";
            Object.keys(cookieObj).forEach((key) => {
                cookie += `${key}=${cookieObj[key]}; `;
            });
            const exp = Date.now() + 6 * ONE_DAY
            window.localStorage.setItem("cookie", cookie);
            window.localStorage.setItem("expired", String(exp));
            location.reload();
        }

        onCancel();
    };

    const generateQR = async () => {
        const res = await getLoginQR();
        setSrc(res.data.qrimg);
    };

    useEffect(() => {
        generateQR();
    }, []);

    useInterval(async () => {
        if (src === "") {
            return;
        }

        // 800 为二维码过期
        // 801 为等待扫码
        // 802 为待确认
        // 803 为授权登录成功
        const res = await checkLoginQR();
        if (res.code === 800) {
            Toast.show("二维码已过期，重新生成中");
            setDelay(null);
            await generateQR();
            setDelay(1500);
        } else if (res.code === 803) {
            setDelay(null);
            let cookie = "";
            const matchRes: string[] | null = res.cookie.match(/[\w-]+=\w+/g);
            if (matchRes) {
                const cookieObj: Record<string, string> = {};
                matchRes.forEach((item) => {
                    const [key, value] = item.split("=");
                    const lowerKey = key.toLowerCase();
                    if (["max-age", "expires"].indexOf(lowerKey) >= 0) {
                        return;
                    }
                    cookieObj[key] = value;
                });
                Object.keys(cookieObj).forEach((key) => {
                    cookie += `${key}=${cookieObj[key]}; `;
                });
            }
            const sRes = await loginStatus(cookie);

            // 昵称
            window.localStorage.setItem("username", sRes.data.profile.nickname);
            // 头像
            window.localStorage.setItem("avatar", sRes.data.profile.avatarUrl);
            // 用户 id
            window.localStorage.setItem("userid", sRes.data.profile.userId);
            // token
            const exp = Date.now() + 6 * ONE_DAY
            window.localStorage.setItem("cookie", cookie);
            window.localStorage.setItem("expired", String(exp));
            location.reload();
        }
    }, delay);

    return (
        <Modal
            title="登录"
            visible={true}
            onCancel={onCancel}
            onOk={onOk}
            noFooter={loginType === "qr"}
        >
            <Tabs onChange={handleTabChange}>
                <Tabs.Pane text="扫码登录" key="qr">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <img src={src} />
                        <div>使用网易云音乐APP扫码</div>
                    </div>
                </Tabs.Pane>
                <Tabs.Pane text="账号登录" key="account">
                    <div style={{ padding: "0 16px 16px" }}>
                        <div style={{ marginBottom: 8 }}>账号</div>
                        <Input
                            value={username}
                            onChange={setUsername}
                            placeholder="请输入手机号或邮箱"
                        />
                        <div style={{ margin: "8px 0" }}>密码</div>
                        <Input
                            type="password"
                            value={password}
                            onChange={setPassword}
                            placeholder="请输入密码"
                            onPressEnter={onOk}
                        />
                    </div>
                </Tabs.Pane>
            </Tabs>
        </Modal>
    );
}

export default ModalView;

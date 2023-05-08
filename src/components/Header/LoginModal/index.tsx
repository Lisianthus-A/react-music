import { useState } from "react";
import { Modal, Input, Toast } from "@/components";
import { emailLogin, phoneLogin } from "@/apis/login";
import { replaceHttpToHttps as rp } from "@/utils";

interface Props {
    onCancel: (...args: any[]) => void;
    setUserInfo: (...args: any[]) => void;
}

function ModalView({ onCancel, setUserInfo }: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
        // token
        window.localStorage.setItem("token", res.token);
        // token 过期时间
        const maxAge = Number(
            res.cookie.match(/MUSIC_U=\w+;\s?Max-Age=(\d+)/)[1]
        );
        window.localStorage.setItem(
            "timestampBefore",
            String(Date.now() + maxAge * 1000)
        );

        setUserInfo({
            name: res.profile.nickname,
            avatar: rp(res.profile.avatarUrl),
        });

        onCancel();
    };

    return (
        <Modal title="登录" visible={true} onCancel={onCancel} onOk={onOk}>
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
                />
            </div>
        </Modal>
    );
}

export default ModalView;

// 登录相关 API

import ajax from "./apiBase";
// @ts-ignore
import md5 from "@/utils/md5";

// 邮箱登录
export const emailLogin = (email: string, password: string) => {
    return ajax(`/login?email=${email}&md5_password=${md5(password)}`);
};

// 手机号登录
export const phoneLogin = (phone: string, password: string) => {
    return ajax(
        `/login/cellphone?phone=${phone}&md5_password=${md5(password)}`
    );
};

// 退出登录
export const logout = () => {
    return ajax("/logout");
};

interface QRKeyRes {
    code: number;
    data: {
        code: number;
        unikey: string;
    };
}

interface QRCreateRes {
    code: number;
    data: {
        qrimg: string;
        qrurl: string;
    };
}

// 获取登录二维码
let _key = "";
export const getLoginQR = async () => {
    const res = await ajax<QRKeyRes>(`/login/qr/key?t=${Date.now()}`);
    _key = res.data.unikey;
    return ajax<QRCreateRes>(
        `/login/qr/create?t=${Date.now()}&key=${_key}&qrimg=1`
    );
};

// 二维码状态检查
export const checkLoginQR = () => {
    return ajax(`/login/qr/check?t=${Date.now()}&key=${_key}`);
};

// 登录状态，用于获取用户信息
export const loginStatus = (cookie: string) => {
    return ajax(`/login/status?t=${Date.now()}`, {
        headers: {
            token: cookie,
        },
    });
};

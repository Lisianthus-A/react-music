// 登录相关 API

import ajax from './apiBase';
// @ts-ignore
import md5 from '@/utils/md5';

// 邮箱登录
export const emailLogin = (email: string, password: string) => {
    return ajax(`/login?email=${email}&md5_password=${md5(password)}`, {
        method: 'POST'
    });
}

// 手机号登录
export const phoneLogin = (phone: string, password: string) => {
    return ajax(`/login/cellphone?phone=${phone}&md5_password=${md5(password)}`, {
        method: 'POST'
    });
}

// 退出登录
export const logout = () => {
    return ajax('/logout');
}
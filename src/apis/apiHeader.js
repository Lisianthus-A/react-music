import ajax from './apiBase';
import md5 from 'Utils/md5';

//邮箱登录
export const login = async ({ email, password }) => {
    const result = await ajax(`/login?email=${email}&md5_password=${md5(password)}`, {
        method: 'POST'
    });
    return result;
}

//手机号登录
export const loginCellphone = async ({ phone, password }) => {
    const result = await ajax(`/login/cellphone?phone=${phone}&md5_password=${md5(password)}`, {
        method: 'POST'
    });
    return result;
}

//退出登录
export const logout = async () => {
    const result = await ajax('/logout');
    return result;
}
import ajax from './apiBase';

export const login = async ({ email, password }) => {
    const result = await ajax(`/login?email=${email}&password=${password}`, {
        method: 'POST'
    });
    return result;
}

export const loginCellphone = async ({ phone, password }) => {
    const result = await ajax(`/login/cellphone?phone=${phone}&password=${password}`, {
        method: 'POST'
    });
    return result;
}
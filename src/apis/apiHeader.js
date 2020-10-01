import ajax from './apiBase';

export const login = async (data) => {
    const result = await ajax('/login', {
        data,
        method: 'POST'
    });
    return result;
}

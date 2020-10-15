import ajax from './apiBase';

export const banner = async () => {
    const result = await ajax('/banner');
    return result;
}

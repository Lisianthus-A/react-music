import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

// 服务器地址
// const baseUrl = 'http://localhost:4001';
const baseUrl = 'https://server0309.herokuapp.com';

//请求携带的参数
const baseParams: AxiosRequestConfig = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true
};

const ajax = async <T = any>(
    url: string,
    params: Omit<AxiosRequestConfig, 'url'> = {}
): Promise<T> => {
    const response = await axios({
        url: baseUrl + url,
        ...baseParams,
        ...params
    });
    return response.data;
}

export default ajax;
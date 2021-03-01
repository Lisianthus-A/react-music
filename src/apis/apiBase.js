import axios from 'axios';

//服务器地址
const baseUrl = 'http://localhost:4001';

//请求携带的参数
const baseParams = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true
};

const ajax = async (url, params = {}) => {
    const response = await axios({
        url: baseUrl + url,
        ...baseParams,
        ...params
    });
    return response.data;
}

export default ajax;
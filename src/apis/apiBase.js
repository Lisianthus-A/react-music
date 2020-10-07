import axios from 'axios';

const baseUrl = 'http://localhost:4001';

const baseParams = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true,
    data: null
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
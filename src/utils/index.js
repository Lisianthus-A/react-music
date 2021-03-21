//判断是否有 token
export const hasToken = () => {
    const timestampBefore = window.localStorage.getItem('timestampBefore');  //token 过期时间
    if (Date.now() >= timestampBefore) {  //token 已过期
        window.localStorage.removeItem('timestampBefore');
        window.localStorage.removeItem('token');
        return false;
    }

    const token = window.localStorage.getItem('token');
    return !!token;
}

//将秒数转换成形如01:42的字符串
export const convertTime = (time) => {
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

//搜索字符串中指定参数的值  searchItem('?id=1&data=2', data) --> 2
export const searchItem = (search, item) => {
    const match = search.match(new RegExp(`[?&]${item}=\\w+`));
    return match ? match[0].split('=')[1] : null;
}

//将时间戳转换成形如刚刚、x分钟前、x小时前、x天前、x月前、x年前的字符串
export const convertDate = (timestamp) => {
    const diff = Date.now() - new Date(timestamp);
    const d = new Date(diff);
    return diff <= 60000 ? '刚刚' :  //60秒内
        diff <= 3600000 ? `${parseInt(diff / 60000)}分钟前` :  //60分钟内
        diff <= 86400000 ? `${parseInt(diff / 3600000)}小时前` :  //24小时内
        d.getFullYear() > 1970 ? `${d.getFullYear() - 1970}年前` :
        d.getMonth() ? `${d.getMonth()}个月前` : `${d.getDate() - 1}天前`;
}

//节流， timeout 时间内多次调用，也只会执行一次函数
export const throttle = (fn, timeout) => {
    let canRun = true;
    return function () {  //使用 function，防止丢失 this
        if (canRun) {
            canRun = false;
            fn.call(this, ...arguments);
            setTimeout(() => {
                canRun = true;
            }, timeout);
        }
    }
}

//防抖，在最后一次调用的 timeout 时间后才执行函数
export const debounce = (fn, timeout) => {
    let timer;
    return function () {  //使用 function，防止丢失 this
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, ...arguments);
        }, timeout);
    }
}

//将 http 转换为 https
export const replaceHttpToHttps = (url) => url.replace(/http\:/, 'https:');
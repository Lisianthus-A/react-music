const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

//获取token
export const getToken = () => {
    return getCookie('MUSIC_U');
}

//将秒数转换成形如01:42的字符串
export const convertTime = (time) => {
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

//将播放次数转换成形如 x万 x亿 的字符串，不满1万则原样返回
export const convertCount = (count) => {
    if (count >= 100000000) {
        return `${parseInt(count / 100000000)}亿`;
    }
    if (count >= 10000) {
        return `${parseInt(count / 10000)}万`;
    }
    return count;
}
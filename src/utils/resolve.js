//将字符串转为秒数  03:40.25 | 03:40:25 ->  220.25
const convertStringToSeconds = (str) => {
    const match = str.match(/\d+/g);
    return match[0] * 60 + +match[1] + match[2] / 1000;
}

//解析歌词
//返回歌词数组 [ [原歌词字符串, 翻译歌词字符串, 歌词对应的时间] * n ]
export const resolveLyric = (lyricRes) => {
    if (lyricRes.uncollected || lyricRes.nolyric) {  //没有歌词
        return [];
    }

    //原歌词与翻译歌词，过滤掉不包含时间的字符串
    const originLrc = lyricRes.lrc.lyric.split('\n').filter(e => /\d{2}\:\d{2}[\.\:]\d{1,3}/.test(e));
    const transLrc = lyricRes.tlyric.lyric ? lyricRes.tlyric.lyric.split('\n').filter(e => /\d{2}\:\d{2}[\.\:]\d{1,3}/.test(e)) : [];

    //处理歌词数组中每个字符串的函数
    const handler = (str, isOrigin) => {
        const idx = str.lastIndexOf(']');  //右中括号的下标
        const lrc = str.slice(idx + 1);  //歌词
        const times = str.match(/\d{2}\:\d{2}[\.\:]\d{1,3}/g);  //匹配到的所有时间
        times.forEach(time => {
            const second = convertStringToSeconds(time);  //歌词对应的秒数
            if (isOrigin) {
                obj[second] = [lrc, '', second];
            } else {
                if (obj[second] === undefined) {
                    return;
                }
                obj[second][1] = lrc;
            }
        });
    }

    //合并原歌词与翻译歌词
    const obj = {};
    originLrc.forEach((str) => handler(str, true));
    transLrc.forEach((str) => handler(str, false));

    //返回歌词数组，根据时间升序排序
    return Object.values(obj).sort((a, b) => a[2] - b[2]);
}

//解析歌曲列表
//返回歌曲数组 [{ id, name, singers, duration, cover, isFree, albumId, albumName } * n]
//歌曲id 歌曲名 歌手列表 时长 图片 是否免费 专辑id 专辑名
export const resolveSongs = (songs, type = 1) => {
    const result = [];

    if (type === 1) {
        songs.forEach((item) => {
            const { id, name, al: { id: albumId, name: albumName, picUrl: cover } } = item;
            const singers = item.ar.map(({ id, name }) => ({ id, name }));
            const duration = item.dt / 1000;
            const isFree = item.fee !== 1;

            result.push({ id, name, singers, duration, cover, isFree, albumId, albumName });
        });
    } else if (type === 2) {  //hotSong 接口返回的专辑属性是 album 而非 al
        songs.forEach((item) => {
            const { id, name, album: { id: albumId, name: albumName, picUrl: cover } } = item;
            const singers = item.artists.map(({ id, name }) => ({ id, name }));
            const duration = item.dt / 1000;
            const isFree = item.fee !== 1;

            result.push({ id, name, singers, duration, cover, isFree, albumId, albumName });
        });
    } else if (type === 3) {  //simiSong 接口返回的歌曲时长是 duration 而非 dt
        songs.forEach((item) => {
            const { id, name, album: { id: albumId, name: albumName, picUrl: cover } } = item;
            const singers = item.artists.map(({ id, name }) => ({ id, name }));
            const duration = item.duration / 1000;
            const isFree = item.fee !== 1;

            result.push({ id, name, singers, duration, cover, isFree, albumId, albumName });
        });
    }

    return result;
}

//解析歌单、专辑、歌曲的 detail
//歌单返回 { isSonglist, isAlbum, isSong, title, cover, creator, isCreator, labels, description }
//专辑返回 { isSonglist, isAlbum, isSong, title, cover, singers, publishTime, description }
//歌曲返回 { isSonglist, isAlbum, isSong, title, cover, singers, albumId, albumName }
export const resolveDetail = (res) => {
    const isSonglist = res.hasOwnProperty('playlist');  //歌单拥有 playlist 属性
    const isAlbum = res.hasOwnProperty('album');  //专辑拥有 album 属性
    const isSong = !isSonglist && !isAlbum;
    if (isSonglist) {  //歌单
        const { name: title, coverImgUrl: cover, tags: labels, description } = res.playlist;
        const creator = {  //歌单创建者
            id: res.playlist.creator.userId,  //用户 id
            name: res.playlist.creator.nickname,  //用户昵称
            avatar: res.playlist.creator.avatarUrl,  //用户头像 url
            createTime: res.playlist.createTime  //创建时间
        };
        const isCreator = +window.localStorage.getItem('userid') === creator.id;  //当前登录的用户是否创建者
        return { isSonglist, isAlbum, isSong, title, cover, creator, isCreator, labels, description };
    } else if (isAlbum) {  //专辑
        const { name: title, picUrl: cover, publishTime, description } = res.album;
        const singers = res.album.artists.map(({ id, name }) => ({ id, name }));
        return { isSonglist, isAlbum, isSong, title, cover, singers, publishTime, description };
    } else {  //单曲
        const { name: title, al: { id: albumId, name: albumName, picUrl: cover } } = res.songs[0];
        const singers = res.songs[0].ar.map(({ id, name }) => ({ id, name }));
        return { isSonglist, isAlbum, isSong, title, cover, singers, albumId, albumName };
    }
}
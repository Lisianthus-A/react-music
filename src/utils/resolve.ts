import { replaceHttpToHttps as rp } from '@/utils';

import type { SongItem } from '@/containers';
import type { LyricRes } from '@/apis/song';

/**
 * 将形如 03:40.00 的字符串转为秒数
 */
const convertStringToSeconds = (str: string): number => {
    // @ts-ignore
    const [min, s, ms] = str.match(/\d+/g);
    return Number(min) * 60 + Number(s) + Number(ms) * 0.001;
}

/**
 * 解析歌词
 * 
 * 返回歌词数组 [ [原歌词字符串, 翻译歌词字符串, 歌词对应的时间] * n ]
 */
export const resolveLyric = (lyricRes: LyricRes): [string, string, number][] => {
    const { uncollected, nolyric, lrc, tlyric } = lyricRes;

    // 没有歌词
    if (uncollected || nolyric) {
        return [];
    }

    // 原歌词与翻译歌词，过滤掉不包含时间的字符串
    const originLrc = lrc.lyric.split('\n').filter((item: string) => /\d+\:\d+[\.\:]\d+/.test(item));
    const transLrc = tlyric?.lyric?.split('\n')?.filter((item: string) => /\d+\:\d+[\.\:]\d+/.test(item)) || [];

    // 处理歌词数组中每个字符串的函数
    const handler = (str: string, isOrigin: boolean) => {
        // 右中括号的下标
        const idx = str.lastIndexOf(']');
        // 歌词
        const lrc = str.slice(idx + 1);
        // 匹配到的所有时间
        const times = str.match(/\d+\:\d+[\.\:]\d+/g);
        // @ts-ignore
        times.forEach(time => {
            // 歌词对应的秒数
            const second = convertStringToSeconds(time);

            if (isOrigin) {
                obj[second] = [lrc, '', second];
            } else {
                obj[second] && (obj[second][1] = lrc);
            }
        });
    }

    // 合并原歌词与翻译歌词
    const obj: Record<string, [string, string, number]> = {};
    originLrc.forEach((str) => handler(str, true));
    transLrc.forEach((str) => handler(str, false));

    // 返回歌词数组，根据时间升序排序
    return Object.values(obj).sort((a, b) => a[2] - b[2]);
}

type SongsType = 'detail' | 'topSong' | 'simiSong' | 'fm' | 'search';
/**
 * 解析歌曲列表，返回歌曲数组
 * 
 * [{ id, name, singers, duration, cover, isFree, albumId, albumName } * n]
 * 
 * 歌曲id 歌曲名 歌手列表 时长 图片 是否免费 专辑id 专辑名
 */
export const resolveSongs = (songs: any[], type: SongsType): SongItem[] => {
    return songs.map(item => {
        const { id, name } = item;
        // 专辑
        // topSong、fm 接口返回的专辑属性是 album
        // 其他的是 al
        const album = ['topSong', 'fm'].includes(type)
            ? item.album
            : item.al;

        // 歌手
        // detail、search 接口返回的歌手属性是 ar
        // 其他的是 artists
        const singers = ['detail', 'search'].includes(type)
            ? item.ar
            : item.artists;

        // 时长
        // simiSong、fm 接口返回的时长属性是 duration
        // 其他的是 dt
        // 目前还没使用 simiSong 接口
        const duration = ['simiSong', 'fm'].includes(type)
            ? item.duration
            : item.dt;

        // 是否免费歌曲
        // 这个其实不准确，以后再修改
        const isFree = item.fee !== 1;

        return {
            id,
            name,
            isFree,
            duration: duration * 0.001,
            // @ts-ignore
            singers: singers.map(({ id, name }) => ({ id, name })),
            albumId: album.id,
            albumName: album.name,
            cover: rp(album.picUrl || ''),
        };
    });
}

/**
 * 解析歌单、专辑、歌曲的 detail
 * 
 * 歌单返回 { isPlaylist, isAlbum, isSong, title, cover, creator, isCreator, tags, description }
 * 
 * 专辑返回 { isPlaylist, isAlbum, isSong, title, cover, singers, publishTime, description }
 * 
 * 歌曲返回 { isPlaylist, isAlbum, isSong, title, cover, singers, albumId, albumName }
 */
export const resolveDetail = (res: any): Record<string, any> => {
    // 是否为歌单
    const isPlaylist = res.hasOwnProperty('playlist');
    // 是否为专辑
    const isAlbum = res.hasOwnProperty('album');
    // 是否为单曲
    const isSong = !isPlaylist && !isAlbum;

    if (isPlaylist) {  // 歌单
        const { name: title, tags, description, createTime } = res.playlist;
        const cover = rp(res.playlist.coverImgUrl);

        // 歌单创建者
        const creator = {
            // 用户 id
            id: res.playlist.creator.userId,
            // 用户昵称
            name: res.playlist.creator.nickname,
            // 用户头像 url
            avatar: rp(res.playlist.creator.avatarUrl),
            // 创建时间
            createTime
        };

        // 当前登录的用户是否创建者
        const isCreator = Number(localStorage.getItem('userid')) === creator.id;

        return { isPlaylist, isAlbum, isSong, title, cover, creator, isCreator, tags, description };
    } else if (isAlbum) {  // 专辑
        const { name: title, publishTime, description } = res.album;
        // @ts-ignore
        const singers = res.album.artists.map(({ id, name }) => ({ id, name }));
        const cover = rp(res.album.picUrl);
        return { isPlaylist, isAlbum, isSong, title, cover, singers, publishTime, description };
    } else {  // 单曲
        const { name: title, al: { id: albumId, name: albumName } } = res.songs[0];
        // @ts-ignore
        const singers = res.songs[0].ar.map(({ id, name }) => ({ id, name }));
        const cover = rp(res.songs[0].al.picUrl);
        return { isPlaylist, isAlbum, isSong, title, cover, singers, albumId, albumName };
    }
}
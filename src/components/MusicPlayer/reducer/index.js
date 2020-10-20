export const initialState = {
    isPlaying: false,  //是否正在播放
    duration: 0,  //总时长
    currentTime: 0,  //当前播放位置
    volume: 100  //当前音量
};

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'setPlaying':
            return { ...state, isPlaying: payload };
        case 'setDuration':
            return { ...state, duration: payload };
        case 'setTime':
            return { ...state, currentTime: payload };
        case 'setVolume':
            return { ...state, volume: payload };
        default:
            return new Error('action.type error!');
    }
}
// @ts-ignore
import FFTJS from './fft';
import music from './music';

const FFT_SIZE = 512;
const smoothConstantDown = 0.08;
const smoothConstantUp = 0.8;
const N = FFT_SIZE / 2 + 1;
const lastY = new Array(N).fill(0);

// 汉明距离
const hamming = (val: number): number => {
    return 0.54 - 0.46 * Math.cos(6.283185307179586 * val / (FFT_SIZE - 1));
}

const rfft = (channelData: Float32Array) => {
    const f = new FFTJS(FFT_SIZE);
    const out = f.createComplexArray();

    f.realTransform(out, channelData);

    for (let i = 0; i < N; ++i) {
        // 实部
        const real = out[2 * i];
        // 虚部
        const imag = out[2 * i + 1];
        // 模
        const abs = (real ** 2 + imag ** 2) ** 0.5;
        const val = Math.log10(abs) * 20;

        if (!isFinite(val)) {
            lastY[i] = 0;
            continue;
        }

        // smooth
        if (val < lastY[i]) {
            lastY[i] = val * smoothConstantDown + lastY[i] * (1 - smoothConstantDown);
        } else {
            lastY[i] = val * smoothConstantUp + lastY[i] * (1 - smoothConstantUp);
        }
    }
}

function getFreqData(abuffer: AudioBuffer) {
    // 从 channelData 中切出长度为 FFT_SIZE 的数组
    // 用 0 填充不足 FFT_SIZE 的部分
    const channelData = abuffer.getChannelData(0);
    const percent = music().getCurrentTime() / abuffer.duration;
    const startIndex = percent * channelData.length >> 0;
    const sliceData = channelData.slice(startIndex, startIndex + FFT_SIZE);
    const diff = FFT_SIZE - sliceData.length;
    for (let i = 0; i < diff; ++i) {
        sliceData[sliceData.length] = 0;
    }

    for (let i = 0; i < FFT_SIZE; ++i) {
        const distance = hamming(i);
        sliceData[i] *= distance;
    }

    rfft(sliceData);

    return lastY.map(v => v ? (v + 20) * 0.0125 : 0);
}

export default getFreqData;
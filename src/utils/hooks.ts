import { useEffect, useRef, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 定时器 hooks
 */
export const useInterval = (callback: Function, delay?: number | null) => {
    const savedCallback = useRef<Function>(() => { });

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay !== null) {
            const interval = setInterval(() => savedCallback.current(), delay);
            return () => clearInterval(interval);
        }
    }, [delay]);
};

/**
 * 实现 state 合并
 */
export const useSetState = <T extends object>(
    initialState: T = {} as T
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void] => {
    const [state, set] = useState<T>(initialState);
    const setState = useCallback((patch) => {
        set((prevState) =>
            Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch)
        );
    }, []);

    return [state, setState];
};

/**
 * 查询页面 Query 参数
 */
export const useQuery = (field: string): string | null => {
    const { search } = useLocation();
    const reg = new RegExp(`[?&]${field}=([\\w%]+)`);
    const match = search.match(reg);
    return match ? match[1] : null;
}
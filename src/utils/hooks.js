import { useEffect, useRef, useCallback, useState } from 'react';

export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // 保存新回调
    useEffect(() => {
        savedCallback.current = callback;
    });

    // 建立 interval
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    },
        [delay]
    );
}

//实现state合并
export const useSetState = (initialState = {}) => {
    const [state, saveState] = useState(initialState);
    const setState = useCallback((newState) => {
        saveState(prevState => ({ ...prevState, ...newState }));
    },
        []
    );
    return [state, setState];
}
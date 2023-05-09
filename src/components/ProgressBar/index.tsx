import styles from "./index.module.scss";
import { memo, useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Tooltip } from "@/components";
import type { CSSProperties } from "react";

interface Props {
    min?: number;
    max?: number;
    value?: number;
    defaultValue?: number;
    tipFormatter?: (value: number) => string;
    onChange?: (value: number) => void;
    onChangeEnd?: (value: number) => void;
    className?: string;
    style?: CSSProperties;
}

function ProgressBar({
    min,
    max,
    value,
    defaultValue,
    className: propsClassName,
    style,
    tipFormatter,
    onChange,
    onChangeEnd,
}: Props) {
    const minValue = min === undefined ? 0 : min;
    const maxValue = max === undefined ? 100 : max;
    const isDiabled = minValue === maxValue;
    const barRef = useRef<HTMLDivElement | null>(null);
    const [internalValue, setInternalValue] = useState<number>(
        value === undefined
            ? defaultValue === undefined
                ? minValue
                : defaultValue
            : value
    );
    const [draging, setDraging] = useState<boolean>(false);

    // 更新进度条元素宽度
    const updateElementWidth = (percent: number) => {
        const bar = barRef.current;
        if (!bar) {
            return;
        }

        bar.style.setProperty("--rail-width", `${percent}%`);
        bar.style.setProperty("--track-width", `${100 - percent}%`);
    };

    // 鼠标按下
    const handleMouseDown = (evt: MouseEvent) => {
        if (evt.button !== 0 || isDiabled) {
            return;
        }

        const bar = barRef.current;
        if (!bar) {
            return;
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        const { clientWidth, offsetLeft } = bar;
        let percent = (evt.clientX - offsetLeft) / clientWidth;
        // 越界处理
        if (percent > 1) {
            percent = 1;
        } else if (percent < 0) {
            percent = 0;
        }
        const nextValue = percent * maxValue;

        setDraging(true);
        setInternalValue(nextValue);
        onChange && onChange(nextValue);
    };

    // 鼠标移动
    const handleMouseMove = (evt: globalThis.MouseEvent) => {
        const bar = barRef.current;
        if (!bar) {
            return;
        }

        const { clientWidth, offsetLeft } = bar;
        let percent = (evt.clientX - offsetLeft) / clientWidth;
        // 越界处理
        if (percent > 1) {
            percent = 1;
        } else if (percent < 0) {
            percent = 0;
        }

        const nextValue = percent * maxValue;

        onChange && onChange(nextValue);
        setInternalValue(nextValue);
    };

    // 鼠标抬起
    const handleMouseUp = (evt: globalThis.MouseEvent) => {
        const bar = barRef.current;
        if (!bar) {
            return;
        }

        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);

        const { clientWidth, offsetLeft } = bar;
        let percent = (evt.clientX - offsetLeft) / clientWidth;
        // 越界处理
        if (percent > 1) {
            percent = 1;
        } else if (percent < 0) {
            percent = 0;
        }

        const nextValue = percent * maxValue;

        setDraging(false);
        setInternalValue(nextValue);
        onChangeEnd && onChangeEnd(nextValue);
    };

    useEffect(() => {
        if (isDiabled) {
            return;
        }

        updateElementWidth((internalValue / maxValue) * 100);
    }, [internalValue, maxValue, draging, isDiabled]);

    useEffect(() => {
        if (draging || value === undefined) {
            return;
        }

        setInternalValue(value);
    }, [value]);

    let className = styles["progress-bar"];
    if (propsClassName) {
        className += " " + propsClassName;
    }

    return (
        <div
            className={className}
            style={style}
            ref={barRef}
            onMouseDown={handleMouseDown}
        >
            <div className="rail">
                <Tooltip
                    visible={draging}
                    text={
                        tipFormatter
                            ? tipFormatter(internalValue)
                            : String(internalValue)
                    }
                >
                    <div className="handle" />
                </Tooltip>
            </div>
            <div className="track" />
        </div>
    );
}

export default memo(ProgressBar);

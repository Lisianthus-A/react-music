import styles from "./index.module.scss";
import { Icon, Portal } from "@/components";
import {
    CSSProperties,
    useCallback,
    useMemo,
    useState,
    useRef,
    useEffect,
    useLayoutEffect,
} from "react";
import classNames from "classnames";
import type { MouseEvent } from "react";

interface OptionItem {
    value: string;
    text: string;
}

interface Props {
    className?: string;
    style?: CSSProperties;
    wrapperStyle?: CSSProperties;
    options: OptionItem[];
    value?: any;
    onChange?: (value: any, item: any) => void;
}

function Select({
    className,
    wrapperStyle,
    style,
    options,
    value: propsValue,
    onChange,
}: Props) {
    const [internalValue, setInternalValue] = useState(options[0].value);
    const [isOpen, setIsOpen] = useState(false);
    const [optionStyle, setOptionStyle] = useState({
        left: 0,
        top: 0,
        width: 0,
    });

    const wrapperRef = useRef<HTMLDivElement>(null);

    const optionMap = useMemo(() => {
        return options.reduce((acc: Record<string, any>, cur) => {
            if (acc[cur.value]) {
                console.error(
                    "Select error: found duplicate value in props.options"
                );
            }

            acc[cur.value] = cur;
            return acc;
        }, {});
    }, [options]);

    const closeFunc = useCallback(() => {
        setIsOpen(false);
        window.removeEventListener("click", closeFunc);
    }, []);

    const handleSelectClick = (evt: MouseEvent) => {
        if (isOpen) {
            closeFunc();
        } else {
            setIsOpen(true);
            setTimeout(() => {
                window.addEventListener("click", closeFunc);
            });
        }
    };

    const handleOptionClick = (item: OptionItem) => {
        setInternalValue(item.value);
        setTimeout(() => {
            onChange && onChange(item.value, item);
        });
    };

    const updateStyle = useCallback(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) {
            return;
        }

        const rect = wrapper.getBoundingClientRect();
        const { x, y, width, height } = rect;

        setOptionStyle({
            left: x,
            top: y + height + 8,
            width,
        });
    }, []);

    useEffect(() => {
        if (isOpen) {
            updateStyle();
            window.addEventListener("resize", updateStyle);
            return () => {
                window.removeEventListener("resize", updateStyle);
            };
        }
    }, [isOpen]);

    useLayoutEffect(() => {
        setInternalValue(options[0].value);
    }, [options]);

    const value = propsValue === undefined ? internalValue : propsValue;

    return (
        <div className={styles["select-wrapper"]} style={wrapperStyle}>
            <div
                ref={wrapperRef}
                className={classNames(
                    styles.select,
                    isOpen && styles["select-focus"],
                    className
                )}
                style={style}
                onClick={handleSelectClick}
            >
                {optionMap[value] && optionMap[value].text}
            </div>
            {isOpen && (
                <Portal>
                    <div className={styles.options} style={optionStyle}>
                        {options.map((item) => (
                            <div
                                className={classNames(
                                    styles.option,
                                    value === item.value &&
                                        styles["option-selected"]
                                )}
                                key={item.value}
                                onClick={() => handleOptionClick(item)}
                            >
                                {item.text}
                            </div>
                        ))}
                    </div>
                </Portal>
            )}
            <Icon type="icon-arrow-down" className={styles.arrow} />
        </div>
    );
}

export default Select;

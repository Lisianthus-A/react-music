import styles from "./index.module.scss";
import classNames from "classnames";
import { Icon } from "@/components";
import { CSSProperties, useRef } from "react";

interface Props {
    className?: string;
    style?: CSSProperties;
    value?: string;
    type?: "text" | "search" | "password";
    maxLength?: number;
    placeholder?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    onPressEnter?: (value: string) => void;
    onSearch?: (value: string) => void;
    onChange?: (value: string) => void;
}

function Input({
    className,
    style,
    value,
    type = "text",
    placeholder,
    maxLength,
    onFocus,
    onBlur,
    onChange,
    onSearch,
    onPressEnter,
}: Props) {
    const valueRef = useRef("");

    const doSearch = () => {
        if (type === "search") {
            onSearch && onSearch(valueRef.current);
        }
    };

    const handlePressEnter = () => {
        onPressEnter && onPressEnter(valueRef.current);
    };

    return (
        <div className={styles["input-wrapper"]}>
            <input
                type={type}
                className={classNames(
                    styles.input,
                    type === "search" && styles["with-icon"],
                    className
                )}
                placeholder={placeholder}
                maxLength={maxLength}
                style={style}
                value={value}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={(evt) => {
                    if (evt.key === "Enter") {
                        handlePressEnter();
                        doSearch();
                    }
                }}
                onChange={(evt) => {
                    valueRef.current = evt.target.value;
                    onChange && onChange(evt.target.value);
                    if (evt.target.value === "") {
                        doSearch();
                    }
                }}
            />
            {type === "search" && (
                <Icon
                    className={styles.icon}
                    type="icon-search"
                    onClick={doSearch}
                />
            )}
        </div>
    );
}

export default Input;

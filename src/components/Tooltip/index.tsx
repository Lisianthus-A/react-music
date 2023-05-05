import { useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "@/components";
import styles from "./index.module.scss";
import type { ReactElement, MouseEvent, CSSProperties } from "react";

interface Props {
    className?: string;
    style?: CSSProperties;
    visible?: boolean;
    position?: "top" | "bottom";
    text: string;
    children: ReactElement;
    onClick?: (evt: MouseEvent<HTMLDivElement>) => void;
}

function Tooltip({
    className,
    style,
    visible: propsVisible,
    position: propsPosition,
    text,
    children,
    onClick,
}: Props) {
    const elemRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const [position, setPosition] = useState<{ left: number; top: number }>({
        left: 0,
        top: 0,
    });

    const updatePosition = useCallback(() => {
        const elem = elemRef.current;
        if (!elem) {
            return;
        }

        setTimeout(() => {
            const { x, y, width, height } =
                elem.children[0].getBoundingClientRect();
            setPosition({
                left: x + width / 2,
                top: propsPosition === "bottom" ? y + height + 12 : y - 44,
            });
        });
    }, [propsPosition]);

    const handleMouseEnter = () => {
        setVisible(true);
    };

    const handleMouseLeave = () => {
        setVisible(false);
    };

    const isVisible = propsVisible === undefined ? visible : propsVisible;
    useEffect(() => {
        updatePosition();

        if (isVisible) {
            window.addEventListener("mousemove", updatePosition);
            window.addEventListener("mousedown", updatePosition);

            return () => {
                window.removeEventListener("mousemove", updatePosition);
                window.removeEventListener("mousedown", updatePosition);
            };
        }
    }, [isVisible]);

    const { left, top } = position;

    return (
        <div
            ref={elemRef}
            className={className}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {children}

            {isVisible && (
                <Portal>
                    <div className={styles.tooltip} style={{ left, top }}>
                        {text}
                    </div>
                </Portal>
            )}
        </div>
    );
}

export default Tooltip;

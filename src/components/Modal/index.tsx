import styles from "./index.module.scss";
import { useLayoutEffect, useRef } from "react";
import { Portal, Icon, Button } from "@/components";
import type { ReactNode, MouseEvent } from "react";
import classNames from "classnames";

interface Props {
    className?: string;
    visible: boolean;
    title?: string;
    noFooter?: boolean;
    children: ReactNode;
    onOk?: (evt: MouseEvent<HTMLDivElement>) => any;
    onCancel?: (evt: MouseEvent) => any;
}

function Modal({
    className,
    visible,
    title,
    noFooter = false,
    children,
    onCancel,
    onOk,
}: Props) {
    const modalRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const modalEl = modalRef.current;
        if (!modalEl || !visible) {
            return;
        }

        const onResize = () => {
            const rect = modalEl.getBoundingClientRect();
            const { innerWidth, innerHeight } = window;
            modalEl.style.setProperty(
                "left",
                `${(innerWidth - rect.width) / 2}px`
            );
            modalEl.style.setProperty(
                "top",
                `${(innerHeight - rect.height) / 2}px`
            );
        };

        window.addEventListener("resize", onResize);
        onResize();
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [visible]);

    return (
        <Portal>
            <style>{`body { overflow: hidden; }`}</style>
            <div
                className={styles.overlay}
                style={{ display: visible ? "block" : "none" }}
            >
                <div
                    className={classNames(styles.modal, className)}
                    ref={modalRef}
                >
                    <div className="modal-header">
                        <div className="modal-title">{title}</div>
                        <Icon
                            className="modal-close-icon"
                            type="icon-close"
                            onClick={onCancel}
                        />
                    </div>
                    <div className="modal-content">{children}</div>
                    {!noFooter && (
                        <div className="modal-footer">
                            <Button type="primary" onClick={onOk}>
                                确认
                            </Button>
                            <Button
                                style={{ marginLeft: 8 }}
                                onClick={onCancel}
                            >
                                取消
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </Portal>
    );
}

export default Modal;

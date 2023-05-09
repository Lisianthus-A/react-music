import styles from "./index.module.scss";
import classNames from "classnames";
import type { CSSProperties, MouseEvent } from "react";

export type IconType =
    | "icon-arrow-down"
    | "icon-file-text"
    | "icon-delete"
    | "icon-like"
    | "icon-sound"
    | "icon-github-fill"
    | "icon-plus"
    | "icon-cycle"
    | "icon-voice"
    | "icon-heart"
    | "icon-heart-fill"
    | "icon-user"
    | "icon-close"
    | "icon-loading"
    | "icon-search"
    | "icon-download"
    | "icon-list"
    | "icon-pause"
    | "icon-play"
    | "icon-prev"
    | "icon-next"
    | "icon-computer"
    | "icon-single"
    | "icon-random";

interface Props {
    type: IconType;
    className?: string;
    style?: CSSProperties;
    onClick?: (evt: MouseEvent<SVGSVGElement>) => any;
}

function Icon({ type, className: propsClassName, style, onClick }: Props) {
    const className = classNames(styles.icon, propsClassName);

    return (
        <svg className={className} style={style} onClick={onClick}>
            <use xlinkHref={`#${type}`} />
        </svg>
    );
}

export default Icon;

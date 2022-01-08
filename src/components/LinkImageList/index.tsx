import style from './index.module.scss';
import { Link } from 'react-router-dom';

import type { ReactNode } from 'react';

function LinkImageList({ children }: any) {
    return (
        <div className={style['link-image-list']}>
            {children}
        </div>
    );
}

interface Props {
    src: string;
    linkTo: string;
    text: ReactNode;
}

function Item({ src, linkTo, text }: Props) {
    return (
        <div className="item">
            <Link to={linkTo} className="item-image">
                <img src={`${src}?param=240y240`} loading="lazy" />
            </Link>
            <Link to={linkTo} className="item-info">
                {text}
            </Link>
        </div>
    );
}

LinkImageList.Item = Item;

export default LinkImageList;
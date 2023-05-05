import style from "./View.module.scss";
import { Link } from "react-router-dom";
import { Loading, Icon } from "@/components";
import { replaceHttpToHttps as rp } from "@/utils";

import type { PageState } from "../index";

interface Props {
    pageState: PageState | null;
    onDelete: (id: number, type: number) => void;
}

function View({ pageState, onDelete }: Props) {
    if (!pageState) {
        return <Loading />;
    }

    const { create, subscribe } = pageState;

    return (
        <div className={style.view}>
            <div className="title">我创建的歌单</div>
            {create.map(({ name, coverImgUrl, trackCount, id }) => (
                <Link className="item" key={id} to={`/Playlist?id=${id}`}>
                    <div className="image">
                        <img
                            src={`${rp(coverImgUrl)}?param=100y100`}
                            loading="lazy"
                        />
                    </div>
                    <div className="content">
                        <span>{name}</span>
                        <span>{trackCount}首</span>
                    </div>
                    <Icon
                        type="icon-delete"
                        className="delete"
                        onClick={(e) => {
                            e.preventDefault();
                            onDelete(id, 1);
                        }}
                    />
                </Link>
            ))}
            <div className="title">我收藏的歌单</div>
            {subscribe.map(({ name, coverImgUrl, trackCount, id }) => (
                <Link className="item" key={id} to={`/Playlist?id=${id}`}>
                    <div className="image">
                        <img
                            src={`${rp(coverImgUrl)}?param=100y100`}
                            loading="lazy"
                        />
                    </div>
                    <div className="content">
                        <span>{name}</span>
                        <span>{trackCount}首</span>
                    </div>
                    <Icon
                        type="icon-delete"
                        className="delete"
                        onClick={(e) => {
                            e.preventDefault();
                            onDelete(id, 2);
                        }}
                    />
                </Link>
            ))}
        </div>
    );
}

export default View;

import { useState, useEffect } from "react";
import style from "./index.module.scss";
import { Toast, Button, Select } from "@/components";
import { Loading } from "@/components";
import { userPlaylist, songlistTracks } from "@/apis/playlist";
import { getCookie } from "@/utils";

interface Props {
    id: number;
    onCollect?: () => void;
}

function CollectSong({ id, onCollect }: Props) {
    const [selectedId, setSelectedId] = useState<any>("");
    const [options, setOptions] = useState<{ value: any; text: string }[]>([]);

    //确认
    const handleClick = async () => {
        if (!selectedId) {
            return;
        }

        await songlistTracks("add", selectedId, id);
        Toast.show("已收藏");
        onCollect && onCollect();
    };

    useEffect(() => {
        const userid = window.localStorage.getItem("userid") || "";
        if (!userid) {
            return;
        }

        const getData = async () => {
            const listData = await userPlaylist(userid);
            // 我创建的歌单
            const createdList = listData.playlist.filter(
                ({ subscribed }) => !subscribed
            );

            setOptions(
                createdList.map(({ name, id }) => ({
                    value: id,
                    text: name,
                }))
            );
            setSelectedId(createdList[0]?.id);
        };
        getData();
    }, []);

    if (!getCookie()) {
        return <div>需要登录</div>;
    }

    if (options.length === 0) {
        return <Loading />;
    }

    return (
        <div className={style["collect-song"]}>
            <Select
                wrapperStyle={{ alignSelf: "stretch" }}
                options={options}
                onChange={(value) => setSelectedId(value)}
            />
            <Button
                onClick={handleClick}
                type="primary"
                style={{ marginTop: 30, width: 100 }}
            >
                确认
            </Button>
        </div>
    );
}

export default CollectSong;

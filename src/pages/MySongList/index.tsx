import { useState, useEffect } from "react";
import { userPlaylist, deleteSonglist } from "@/apis/playlist";
import { Modal } from "@/components";
import View from "./components/View";
import { hasToken } from "@/utils";

import type { UserSonglistRes } from "@/apis/playlist";

type Item = UserSonglistRes["playlist"][number];

export interface PageState {
    create: Item[];
    subscribe: Item[];
}

function MySongList() {
    const userid = window.localStorage.getItem("userid");

    if (!userid || !hasToken()) {
        return <div>需要登录使用</div>;
    }

    const [pageState, setPageState] = useState<PageState | null>(null);
    const [visible, setVisible] = useState(false);
    const [deleteInfo, setDeleteInfo] = useState({ id: 0, type: 0 });

    // 删除歌单
    const handleDelete = async () => {
        const { id, type } = deleteInfo;
        await deleteSonglist(id);
        let nextState;
        if (type === 1) {
            // 删除创建的歌单
            const idx = pageState!.create.findIndex((e) => e.id === id);
            const create = pageState!.create.slice();
            create.splice(idx, 1);
            nextState = {
                ...pageState,
                create,
            };
        } else {
            // 删除收藏的歌单
            const idx = pageState!.subscribe.findIndex((e) => e.id === id);
            const subscribe = pageState!.subscribe.slice();
            subscribe.splice(idx, 1);
            nextState = {
                ...pageState,
                subscribe,
            };
        }
        setVisible(false);
        setPageState(nextState as any);
    };

    // 改变标题
    useEffect(() => {
        document.title = "我的歌单";
    }, []);

    useEffect(() => {
        const getData = async () => {
            const listData = await userPlaylist(userid);
            const state: any = {
                create: [],
                subscribe: [],
            };
            listData.playlist.forEach((item) => {
                if (item.subscribed) {
                    // 收藏的歌单
                    state.subscribe.push(item);
                } else {
                    // 创建的歌单
                    state.create.push(item);
                }
            });
            setPageState(state);
        };
        getData();
    }, []);

    return (
        <>
            <View
                pageState={pageState}
                onDelete={(id, type) => {
                    setVisible(true);
                    setDeleteInfo({ id, type });
                }}
            />
            <Modal
                visible={visible}
                title="删除歌单"
                onOk={handleDelete}
                onCancel={() => setVisible(false)}
            >
                是否要删除该歌单？
            </Modal>
        </>
    );
}

export default MySongList;

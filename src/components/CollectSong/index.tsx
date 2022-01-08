import { useState, useEffect } from 'react';
import style from './index.module.scss';
import { TreeSelect, Button, Modal, message } from 'antd';
import Loading from 'Components/Loading';
import { userPlaylist, songlistTracks } from 'Apis/playlist';

interface Props {
    id: number;
}

function CollectSong({ id }: Props) {
    const [tree, setTree] = useState<any>(null);
    const [selectedId, setSelectedId] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const userid = window.localStorage.getItem('userid');

    if (!userid) {
        return <div>未找到 userid，请重新登录</div>;
    }

    //确认
    const handleClick = () => {
        if (!selectedId) {
            return;
        }

        setLoading(true);
        songlistTracks('add', selectedId, id).then(() => {
            Modal.destroyAll();
            message.success('已收藏歌曲');
        });
    }

    useEffect(() => {
        const getData = async () => {
            const listData = await userPlaylist(userid);
            // 我创建的歌单
            const create = listData.playlist.filter(({ subscribed }) => !subscribed);
            // 我收藏的歌单
            const subscribe = listData.playlist.filter(({ subscribed }) => subscribed);
            const treeData = [
                {
                    title: `我创建的歌单 (${create.length})`,
                    value: '0-0',
                    selectable: false,
                    children: create.map(({ name, id }) => ({ title: name, value: id })),
                },
                {
                    title: `我收藏的歌单 (${subscribe.length})`,
                    value: '0-1',
                    selectable: false,
                    children: subscribe.map(({ name, id }) => ({ title: name, value: id }))
                },
            ];
            setTree(treeData);
        }
        getData();
    }, []);

    if (!tree) {
        return <Loading />;
    }

    return (
        <div className={style['collect-song']}>
            <TreeSelect
                treeData={tree}
                style={{ width: '100%' }}
                onChange={(value) => setSelectedId(value)}
                treeDefaultExpandAll={true}
                placeholder="请选择歌单"
            />
            <Button
                onClick={handleClick}
                type="primary"
                loading={isLoading}
                style={{ marginTop: 30 }}
            >
                确认
            </Button>
        </div>
    );
}

export default CollectSong;
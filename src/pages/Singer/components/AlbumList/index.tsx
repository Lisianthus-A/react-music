import { LinkImageList } from '@/components';

interface Props {
    data: {
        id: number;
        name: string;
        singer: { id: number; name: string }[];
        picUrl: string;
    }[];
}

function AlbumList({ data }: Props) {
    return (
        <LinkImageList>
            {data.map(({ id, name, singer, picUrl }) => {
                const textNode = (
                    <>
                        <div>{name}</div>
                        <div>{singer.map(({ name }) => name).join(" / ")}</div>
                    </>
                );

                return (
                    <LinkImageList.Item
                        key={id}
                        linkTo={`/Album?id=${id}`}
                        src={picUrl}
                        text={textNode}
                    />
                );
            })}
        </LinkImageList>
    );
}

export default AlbumList;

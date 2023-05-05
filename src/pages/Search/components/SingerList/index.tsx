import { LinkImageList } from '@/components';

interface Props {
    data: {
        id: number;
        name: string;
        picUrl: string;
    }[];
}

function SingerList({ data }: Props) {
    return (
        <LinkImageList>
            {data.map(({ id, name, picUrl }) =>
                <LinkImageList.Item
                    key={id}
                    linkTo={`/Singer?id=${id}`}
                    src={picUrl}
                    text={name}
                />
            )}
        </LinkImageList>
    );
}

export default SingerList;
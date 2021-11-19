import React from 'react';
import LinkImageList from 'Components/LinkImageList';

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
                    linkTo={`/Singer/${id}`}
                    src={picUrl}
                    text={name}
                />
            )}
        </LinkImageList>
    );
}

export default SingerList;
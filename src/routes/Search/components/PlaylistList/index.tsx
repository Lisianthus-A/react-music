import React from 'react';
import LinkImageList from 'Components/LinkImageList';

interface Props {
  data: {
    id: number;
    name: string;
    // description: string;
    picUrl: string;
  }[];
}

function PlaylistList({ data }: Props) {
  return (
    <LinkImageList>
      {data.map(({ id, name, picUrl }) =>
        <LinkImageList.Item
          key={id}
          linkTo={`/Playlist?id=${id}`}
          src={picUrl}
          text={name}
        />
      )}
    </LinkImageList>
  );
}

export default PlaylistList;
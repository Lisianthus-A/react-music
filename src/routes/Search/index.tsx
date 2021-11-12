import React, { useEffect, useState } from 'react';
import { useQuery } from 'Utils/hooks';
import View from './components/View';
import { search } from 'Apis/search';

import type {
  SearchSongRes,
  SearchAlbumRes,
  SearchSingerRes,
  SearchPlaylistRes
} from 'Apis/search';

type Type = 'song' | 'album' | 'singer' | 'playlist';

// 类别对应的数字
const typeMap = {
  song: '1',
  album: '10',
  singer: '100',
  playlist: '1000'
}

function Search() {
  const keyword = useQuery('keyword');
  if (!keyword) {
    return <div>请输入搜索内容</div>;
  }

  const [type, setType] = useState<Type>('song');

  useEffect(() => {
    const getData = async () => {
      const res = await search(keyword, typeMap[type]);
      console.log(res);
      if (type === 'song') {

      } else if (type === 'album') {

      } else if (type === 'singer') {

      } else if (type === 'playlist') {

      }
    }

    getData();
  }, [type, keyword]);

  return (
    // <View />
    <div>{keyword}</div>
  );
}

export default Search;
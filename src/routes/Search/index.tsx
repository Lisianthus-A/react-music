import React, { useEffect, useState } from 'react';
import { useQuery } from 'Utils/hooks';
import View from './components/View';

type Type = 'song' | 'album' | 'singer' | 'playlist';

function Search() {
  const keyword = useQuery('keyword');
  if (!keyword) {
    return <div>请输入搜索内容</div>;
  }

  const [type, setType] = useState<Type>('song');

  useEffect(() => {

  }, []);

  return (
    // <View />
  <div>{keyword}</div>
  );
}

export default Search;
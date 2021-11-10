import React, { useEffect, useState } from 'react';
import { searchQuery } from 'Utils/index';
import View from './components/View';

type Type = 'song' | 'album' | 'singer' | 'playlist';

function Search() {
  const keywords = searchQuery('keywords');
  if (!keywords) {
    return <div>请输入搜索内容</div>;
  }

  const [type, setType] = useState<Type>('song');

  useEffect(() => {

  }, []);

  return (
    <View />
  );
}

export default Search;
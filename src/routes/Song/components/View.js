import React from 'react';
import { searchItem } from 'Utils';
import { useLocation } from 'react-router-dom';

const Song = () => {
    const { search } = useLocation();
    const id = searchItem(search, 'id');
    return (
        <div className='song'>
            Song Id={id}
        </div>
    );
}

export default Song;
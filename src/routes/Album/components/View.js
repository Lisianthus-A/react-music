import React from 'react';
import { searchItem } from 'Utils';
import { useLocation } from 'react-router-dom';

const Album = () => {
    const { search } = useLocation();
    const id = searchItem(search, 'id');
    return (
        <div className='song'>
            Album Id={id}
        </div>
    );
}

export default Album;
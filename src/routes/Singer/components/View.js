import React from 'react';
import { searchItem } from 'Utils';
import { useLocation } from 'react-router-dom';

const Singer = () => {
    const { search } = useLocation();
    const id = searchItem(search, 'id');
    return (
        <div className='singer'>
            Singer Id={id}
        </div>
    );
}

export default Singer;
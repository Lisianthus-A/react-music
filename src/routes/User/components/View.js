import React from 'react';
import { useLocation } from 'react-router-dom';
import { searchItem } from 'Utils';

const User = () => {
    const { search } = useLocation();
    const id = searchItem(search, 'id');

    return (
        <div className='user'>
            User Id={id}
        </div>
    );
}

export default User;
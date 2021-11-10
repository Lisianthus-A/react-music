import React from 'react';
import { useLocation } from 'react-router-dom';
import { searchQuery } from 'Utils/index';

const User = () => {
    const id = searchQuery('id');

    return (
        <div className='user'>
            User Id={id}
        </div>
    );
}

export default User;
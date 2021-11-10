import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchQuery } from 'Utils/index';

const Video = () => {
    const id = searchQuery('id');

    return (
        <div className='video'>
            Video Id={id}
        </div>
    );
}

export default Video;
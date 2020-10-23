import React from 'react';
import { useLocation } from 'react-router-dom';
import { searchItem } from 'Utils';

const Video = () => {
    const { search } = useLocation();
    const id = searchItem(search, 'id');

    return (
        <div className='video'>
            Video Id={id}
        </div>
    );
}

export default Video;
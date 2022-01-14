// import { useEffect } from 'react';
import { useQuery } from 'Utils/hooks';

const Video = () => {
    const id = useQuery('id');

    return (
        <div className='video'>
            Video Id={id}
        </div>
    );
}

export default Video;
// import { useEffect } from 'react';
import { useQuery } from '@/utils/hooks';

const Video = () => {
    const id = useQuery('id');

    return (
        <div className='video'>
            Video Id={id}
        </div>
    );
}

export default Video;
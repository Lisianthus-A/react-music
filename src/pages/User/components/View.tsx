import { useQuery } from '@/utils/hooks';

const User = () => {
    const id = useQuery('id');

    return (
        <div className='user'>
            User Id={id}
        </div>
    );
}

export default User;
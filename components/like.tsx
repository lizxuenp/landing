import { HeartIcon } from '@heroicons/react/solid';
import { User } from 'firebase/auth';
import { useState } from 'react';
type LikeProps = {
    like: boolean;
    user: User | null;
}

export default function Like({ like, user }: LikeProps) {
    const [liked, setLiked] = useState<boolean>(like);
    const handleClick = () => {
        setLiked(prev => !prev);
    }
    return (
        <div className='cursor-pointer' onClick={handleClick}>
            {
                liked ?
                    <HeartIcon className='h-6 text-rose-600' />
                    :
                    <HeartIcon className='h-6 text-gray-300' />
            }
        </div>
    );
}
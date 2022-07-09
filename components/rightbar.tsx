import { ArrowCircleLeftIcon, SunIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

type RightBarProps = {
    usePreviousRoute: () => string;
}
export default function RightBar({ usePreviousRoute }: RightBarProps) {
    const router = useRouter();
    const prevPath = usePreviousRoute();
    
    return (

        <div className='fixed z-50 top-[108px] right-[64px] flex'>
            <div className='flex flex-col gap-4'>
                {
                    prevPath === '/' &&
                    <div
                        className='bg-white w-16 h-12 border shadow-md rounded-xl flex items-center justify-center cursor-pointer text-gray-light-liz hover:text-blue-liz'
                        onClick={() => router.back()}
                    >
                        <ArrowCircleLeftIcon className='h-6' />
                    </div>
                }
                <div className='bg-white w-16 h-12 border shadow-md rounded-xl flex items-center justify-center cursor-pointer text-gray-light-liz hover:text-blue-liz'>
                    <SunIcon className='h-6' />
                </div>
            </div>

        </div>
    );
}
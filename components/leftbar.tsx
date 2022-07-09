import { HomeIcon, ArrowCircleLeftIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

type LeftBarProps = {
    usePreviousRoute: () => string;
}
export default function LeftBar({ usePreviousRoute }: LeftBarProps) {
    const router = useRouter();
    const prevPath = usePreviousRoute();

    return (
        <div className='fixed z-50 top-[108px] left-[64px]'>
            <div className='flex flex-col items-center justify-evenly bg-white w-16 py-8 border shadow-md rounded-xl h-[200px]'>
                {
                    prevPath === '/' &&
                    <div
                        className='w-14 h-14 flex items-center justify-center cursor-pointer text-gray-light-liz hover:text-blue-liz'
                        onClick={() => router.back()}
                    >
                        <ArrowCircleLeftIcon className='h-6' />
                    </div>
                }

                <div className='w-14 h-14 flex items-center justify-center cursor-pointer text-gray-light-liz hover:text-blue-liz'>
                    <HomeIcon className='h-6' />
                </div>
            </div>
        </div>
    );
}
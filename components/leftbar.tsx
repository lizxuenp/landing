import { HomeIcon, ArrowCircleLeftIcon, DotsHorizontalIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

type LeftBarProps = {
    usePreviousRoute: () => string;
}
export default function LeftBar({ usePreviousRoute }: LeftBarProps) {
    const router = useRouter();
    const prevPath = usePreviousRoute();

    return (
        <div className='fixed z-50 top-[108px] left-[64px]'>
            <div className='flex flex-col items-center justify-evenly w-16 py-8 shadow-md rounded-xl 
                bg-white dark:bg-gray-dark-liz'
            >
                {
                    prevPath === '/' && <LeftBarIcon Icon={ArrowCircleLeftIcon} onClick={() => router.back()} />
                }
                <LeftBarIcon Icon={HomeIcon} />
                <LeftBarIcon Icon={DotsHorizontalIcon} />
            </div>
        </div>
    );
}

type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;
type LeftBarIconProps = {
    Icon: HeroIcon;
    onClick?: () => void;
}

const LeftBarIcon = ({ Icon, onClick }: LeftBarIconProps) => {
    return (
        <div className='w-14 h-14 flex items-center justify-center cursor-pointer
                text-gray-light-liz hover:text-blue-liz dark:text-white-liz dark:hover:text-yellow-liz'
            onClick={onClick}
        >
            <Icon className='h-6' />
        </div>
    );
}
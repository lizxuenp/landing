import type { NextPage } from 'next';
import Image from 'next/image';
import sec from '../public/cyber-4511128_960_720.jpg';
import IOT from '../public/online.jpg';
import IMG4 from '../public/IMG4-removebg-preview.png';
import octocat from '../public/Octocat.png';
import quote from '../public/photo-1564410267841-915d8e4d71ea.avif';
import spin from '../public/spin.svg';

import { BeakerIcon, DotsCircleHorizontalIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Like from '../components/like';
import { useRouter } from 'next/router';
import Card from '../components/card';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className='space-y-6 pb-8'>
      <div className='flex flex-col lg:grid lg:grid-cols-5 gap-6 px-8'>
        <div className='h-64 lg:col-span-3 rounded-3xl bg-cyan-400 flex items-center justify-center'>

        </div>
        <div className='h-64 lg:col-span-2 rounded-3xl bg-gradient-to-r from-rose-200 to-rose-300 relative'>
          <div className='relative w-[190px] h-full left-0'>
            <Image src={IMG4} alt='IMG4' layout='fill' objectFit='contain' className='rounded-bl-3xl' />
          </div>
          <div className='z-30 absolute top-8 right-8 sm:right-16 md:top-16 md:right-32 lg:right-4 xl:top-16 xl:right-16 rotate-12'>
            <a href='https://github.com/lizxuenp' target='_blank' rel='noreferrer'>
              <Image src={octocat} alt='Octocat' height='70px' width='82px' />
            </a>
          </div>


        </div>
      </div>
      <div>
        <BeakerIcon className='h-8 pl-10 text-fuchsia-400' />
      </div>
      <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-8'>

        <Link href='/security'>
          <a className='bg-white dark:bg-gray-700 shadow-md dark:shadow-xl rounded-3xl h-[200px]'>
            <div className='h-[160px] w-full relative'>
              <Image src={sec} alt='sec' layout='fill' objectFit='cover' className='rounded-3xl' />
            </div>
          </a>
        </Link>

        <div className='bg-white rounded-3xl h-[200px]'>
          <div className='h-[160px] w-full relative'>
            <Image src={IOT} alt='IOT' layout='fill' objectFit='cover' className='rounded-3xl' />
          </div>
        </div>

        <div className='bg-white rounded-3xl h-[200px]'>
          <div className='bg-blue-liz rounded-3xl h-[160px]'>

          </div>
        </div>

        <div className='bg-white dark:bg-gray-700 shadow-md dark:shadow-xl rounded-3xl h-[200px]'>
          <div className='h-[160px] w-full relative cursor-pointer' onClick={() => router.push('/quote')}>
            <Image src={quote} alt='quote' layout='fill' objectFit='cover' className='rounded-3xl' />
          </div>
          <div className='flex items-center justify-between h-[40px] px-4'>
            <Like like={false} />
            <DotsCircleHorizontalIcon className='h-6 cursor-pointer text-gray-300 hover:text-yellow-liz' onClick={() => router.push('/quote')} />
          </div>
        </div>

        <div className='bg-white rounded-3xl h-[200px]'>
          <div className='bg-blue-liz rounded-3xl h-[160px]'>

          </div>
        </div>

        <Card />
      </div>

    </div>
  );
}

export default Home;

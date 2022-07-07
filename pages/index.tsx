import type { NextPage } from 'next';
import Image from 'next/image';
import vercel from '../public/vercel.svg';

const Home: NextPage = () => {
  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-5 gap-4 px-4'>
        <div className='h-64 col-span-3 rounded-3xl bg-cyan-400'>

        </div>
        <div className='col-span-2 rounded-3xl bg-gradient-to-r from-rose-200 to-rose-300'>

        </div>
      </div>
      <div className='grid grid-cols-3 gap-4 px-4'>
        <Image src={vercel} alt='V' />
        <Image src={vercel} alt='V' />
        <Image src={vercel} alt='V' />
        <Image src={vercel} alt='V' />
        <Image src={vercel} alt='V' />
        <Image src={vercel} alt='V' />
        <Image src={vercel} alt='V' />
        <Image src={vercel} alt='V' />
        <Image src={vercel} alt='V' />
        <Image src={vercel} alt='V' />
      </div>

    </div>
  );
}

export default Home;

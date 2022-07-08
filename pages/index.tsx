import type { NextPage } from 'next';
import Image from 'next/image';
import vercel from '../public/vercel.svg';
import IMG4 from '../public/IMG4-removebg-preview.png';
const Home: NextPage = () => {
  return (
    <div className='space-y-4'>
      <div className='flex flex-col md:grid md:grid-cols-5 gap-4 px-4'>
        <div className='h-64 md:col-span-3 rounded-3xl bg-cyan-400 flex items-center justify-center'>
x
        </div>
        <div className='h-64 md:col-span-2 rounded-3xl bg-gradient-to-r from-rose-200 to-rose-300 relative'>
          <div className='relative w-[190px] h-full left-0'>
            <Image src={IMG4} alt='IMG4' layout='fill' objectFit='contain' className='rounded-bl-3xl'/>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4 px-4'>
        <div>
          There is harmony in disagreement, brought to light only by sparks of passion.
        </div>
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

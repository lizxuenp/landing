import type { NextPage } from 'next';
import Image from 'next/image';
import IMG4 from '../public/IMG4-removebg-preview.png';
import { BeakerIcon } from '@heroicons/react/solid';

const Home: NextPage = () => {
  return (
    <div className='space-y-6 pb-8'>
      <div className='flex flex-col md:grid md:grid-cols-5 gap-6 px-4'>
        <div className='h-64 md:col-span-3 rounded-3xl bg-cyan-400 flex items-center justify-center'>
          x
        </div>
        <div className='h-64 md:col-span-2 rounded-3xl bg-gradient-to-r from-rose-200 to-rose-300 relative'>
          <div className='relative w-[190px] h-full left-0'>
            <Image src={IMG4} alt='IMG4' layout='fill' objectFit='contain' className='rounded-bl-3xl' />
          </div>
        </div>
      </div>
      <div>
        <BeakerIcon className='h-6 pl-6 text-fuchsia-400'/>
      </div>
      <div className='grid grid-cols-3 gap-6 px-4'>
        <div className='bg-white rounded-3xl h-[200px]'>
          <div className='bg-blue-liz rounded-3xl h-[160px]'>

          </div>
        </div>

        <div className='bg-white rounded-3xl h-[200px]'>
          <div className='bg-blue-liz rounded-3xl h-[160px]'>

          </div>
        </div>

        <div className='bg-white rounded-3xl h-[200px]'>
          <div className='bg-blue-liz rounded-3xl h-[160px]'>

          </div>
        </div>

        <div>
          There is harmony in disagreement, brought to light only by sparks of passion.
        </div>
        <div className='bg-white rounded-3xl h-[200px]'>
          <div className='bg-blue-liz rounded-3xl h-[160px]'>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;

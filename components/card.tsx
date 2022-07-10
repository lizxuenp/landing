import { DotsCircleHorizontalIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef } from "react";
import Like from "./like";
import { LayoutContext } from './layout';
import { getDownloadURL, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";

export default function Card() {
    const router = useRouter();
    const context = useContext(LayoutContext);
    const imgRef = useRef<HTMLImageElement>(null);
    const didRunRef = useRef(false);

    useEffect(() => {
        if (didRunRef.current === false) {
            didRunRef.current = true;
            const auth = getAuth();
            console.log(auth.currentUser);
            getDownloadURL(ref(context.storage, 'posts/photo-1492376791813-ee6dbb35caa3.avif'))
                .then((url) => {
                    console.log(url);
                    if (imgRef.current) imgRef.current.src = url;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    return (
        <>
            <div className='bg-white dark:bg-gray-700 shadow-md dark:shadow-xl rounded-3xl h-[200px]'>
                <div className='h-[160px] w-full relative cursor-pointer' onClick={() => router.push('/quote')}>
                    {/* <Image ref={imgRef} src={IOT} alt='quote' layout='fill' objectFit='cover' className='rounded-3xl' /> */}
                    <img ref={imgRef} alt='quote' className='rounded-3xl object-cover h-[160px] w-full' />
                </div>
                <div className='flex items-center justify-between h-[40px] px-4'>
                    <Like like={false} />
                    <DotsCircleHorizontalIcon className='h-6 cursor-pointer text-gray-300 hover:text-yellow-liz' onClick={() => router.push('/quote')} />
                </div>
            </div>
        </>

    );
}
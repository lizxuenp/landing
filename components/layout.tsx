import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import { HomeIcon, SunIcon } from '@heroicons/react/solid';

const firebaseConfig = {
    apiKey: "AIzaSyDbxrdE4Yh-4CVNrtcUT3jrGgn_uiOcmd8",
    authDomain: "liz-landing.firebaseapp.com",
    projectId: "liz-landing",
    storageBucket: "liz-landing.appspot.com",
    messagingSenderId: "341469303807",
    appId: "1:341469303807:web:ebe54e2b907425538ccdca",
    measurementId: "G-Y9SWCV2N0R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let analytics;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    analytics = getAnalytics(app);
}

const LayoutContext = React.createContext<{ app: FirebaseApp, db: Firestore }>({ app, db });

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    console.log('Layout');

    const didRunRef = useRef(false);

    useEffect(() => {
        if (didRunRef.current === false) {
            didRunRef.current = true;

            console.log('Layout/useEffect');

            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log('Layout/useEffect/onAuthStateChanged/logged-in', user);
                } else {
                    console.log('Layout/useEffect/onAuthStateChanged/logged-out');
                    if (!auth.currentUser) {
                        signInAnonymously(auth)
                            .then(() => {
                                console.log('Layout/useEffect/onAuthStateChanged/signInAnonymously', auth.currentUser);
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                console.log(errorCode, errorMessage);
                            });
                    }
                }
            });
        }
    }, []);

    return (
        <>
            <Head>
                <title>Liz Xuen</title>
                <meta name="description" content="My landing page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutContext.Provider value={{ app, db }}>
                <div className='container mx-auto flex flex-col'>
                    <div className='h-30 flex items-center'>
                        <div className='text-[60px] text-black-liz font-moo-lah-lah hover:text-yellow-liz cursor-pointer'>liz</div>
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col items-center justify-evenly bg-white w-16 py-8 border shadow-md rounded-xl h-[200px]'>
                            <div className='w-14 h-14 flex items-center justify-center cursor-pointer text-gray-light-liz hover:text-blue-liz'>
                                <HomeIcon className='h-6' />
                            </div>
                            <div className='w-14 h-14 flex items-center justify-center cursor-pointer text-gray-light-liz hover:text-blue-liz'>
                                <HomeIcon className='h-6' />
                            </div>
                        </div>

                        <div className='grow overflow-y-auto scrollbar-hide'>{children}</div>

                        <div className='flex flex-col'>
                            <div className='bg-white w-16 h-12 border shadow-md rounded-xl flex items-center justify-center cursor-pointer text-gray-light-liz hover:text-blue-liz'>
                                <SunIcon className='h-6' />
                            </div>
                        </div>
                    </div>

                </div>
            </LayoutContext.Provider>
        </>
    );
}

export { LayoutContext }
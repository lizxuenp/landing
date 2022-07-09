import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import Head from 'next/head';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import LeftBar from './leftbar';
import RightBar from './rightbar';

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
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const didRunRef = useRef(false);

    useEffect(() => {
        if (didRunRef.current === false) {
            didRunRef.current = true;

            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // console.log('Layout/useEffect/onAuthStateChanged/logged-in', user);
                } else {
                    // console.log('Layout/useEffect/onAuthStateChanged/logged-out');
                    if (!auth.currentUser) {
                        signInAnonymously(auth)
                            .then(() => {
                                // console.log('Layout/useEffect/onAuthStateChanged/signInAnonymously', auth.currentUser);
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

    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
        const didRunLERef = useRef(false);
        useLayoutEffect(() => {
            if (didRunLERef.current === false) {
                didRunLERef.current = true;
                // if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
                // }
            }
        }, []);
    };


    return (
        <>
            <Head>
                <title>Liz Xuen</title>
                <meta name="description" content="My landing page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LayoutContext.Provider value={{ app, db }}>
                <LeftBar />
                <RightBar />
                <div>
                    <div className='h-screen overflow-y-scroll scrollbar-hide'>
                        <div className='flex items-center pl-[64px]'>
                            <div className='text-[72px] text-black-liz hover:text-yellow-liz dark:text-white-liz dark:hover:text-yellow-liz font-moo-lah-lah  cursor-pointer'>liz</div>
                        </div>
                        <div className='px-[120px]'>
                            {children}
                        </div>
                    </div>
                </div>
            </LayoutContext.Provider>
        </>
    );
}

export { LayoutContext }
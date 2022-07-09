import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const usePreviousRoute = () => {
    const { asPath } = useRouter();
  
    const ref = useRef<string>('');
  
    useEffect(() => {
      ref.current = asPath;
    }, [asPath]);
  
    return ref.current;
  };

  return (
    <Layout usePreviousRoute={usePreviousRoute} >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

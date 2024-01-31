import Head from 'next/head';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Layout from '../components/layout';
// import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
        <Head>

        <link rel="icon" href="images/Logo.svg" />
        <link rel="icon" href="images/Logo.svg" sizes="16x16" type="image/png" />
        <link rel="icon" href="images/Logo.svg" sizes="32x32" type="image/png" />
        {/* Add more sizes if needed */}
        <link rel="apple-touch-icon" href="images/Logo.svg" />
        <link rel="canonical" href="https://www.subikshamcatering.com/"></link>
      </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
    );
}

export default MyApp;

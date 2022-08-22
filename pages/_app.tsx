import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Layout from '../components/layout';
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
        <Head>
        <title>Flintstones Bangalore- Leading Stones Manufacturer </title>
        <meta name="description" content="Flintstones Bangalore official website"/>
        <meta name="google-site-verification" content="pUMNcxdLDe57HiuLmq5c1gLv3qtmEzkaHn7s8E92z-M" />
        <link rel="icon" href="images/Logo.svg"/>
    </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
    );
}

export default MyApp;

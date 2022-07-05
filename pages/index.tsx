import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Logo from '../public/images/Logo.svg';
import AboutUs from '../components/landing-page/about-us';
import Categories from '../components/landing-page/categories';
import Testimonials from '../components/landing-page/testimonials';
import BrowseProducts from '../components/browse-products';
import Projects from '../components/landing-page/projects';
import ContactUs from '../components/landing-page/contact-us';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Flintstones</title>
                <meta name="description" content="Flintstones official website"/>
                <link rel="icon" href="images/Logo.svg"/>
            </Head>

            <section className={styles.hero}>
                <video className={styles.backgroundVideo} autoPlay loop muted>
                    <source src="/video/BackgroundVideo.mp4" type="video/mp4"/>
                </video>
                <div className={styles.heroContent}>
                    <div className={styles.headingContainer}>
                        <h1 className={`${styles.heading} raleway`}>Flintstones</h1>
                        <span className={styles.logoContainer}>
                            <Image className={styles.logo} alt="Logo" src={Logo}/>
                        </span>
                    </div>
                    <h2 className={styles.subHeading}>Live in luxury</h2>
                </div>
            </section>
            <AboutUs></AboutUs>
            <Categories></Categories>
            <Testimonials></Testimonials>
            <BrowseProducts></BrowseProducts>
            <Projects></Projects>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;

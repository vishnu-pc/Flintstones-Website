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
import {Link} from 'react-scroll';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Flintstones</title>
                <meta name="description" content="Flintstones official website"/>
                <meta name="google-site-verification" content="pUMNcxdLDe57HiuLmq5c1gLv3qtmEzkaHn7s8E92z-M" />
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
                <Link activeClass="active" to="about-us-section" spy={true} smooth={true}>
                    <div className={styles.mouse_scroll}>
                    <div className={styles.mouse}>
                        <div className={styles.wheel}></div>
                    </div>
                    <div>
                        <span className= {`${styles.m_scroll_arrows} ${styles.unu}`}></span>
                        <span className= {`${styles.m_scroll_arrows} ${styles.doi}`}></span>
                    </div>
                    </div>
                </Link>
                <div className={styles.backgroundVideoTint}></div>
            </section>
            <AboutUs></AboutUs>
            <Categories></Categories>
            <Testimonials></Testimonials>
            <div className="sketchfab-embed-wrapper"
            style={{height:"100vh"}}
            > <iframe title="Flinstones model" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="1800" height="600" src="https://sketchfab.com/models/b28c1cee103f4fe29cfd393bf825a3ec/embed?ui_theme=dark"> </iframe>
    
    
    </div>
    

            <BrowseProducts></BrowseProducts>
            <Projects></Projects>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;

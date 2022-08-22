import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Logo from '../public/images/Logo.svg';
import wasd from '../public/wasd.png';

import AboutUs from '../components/landing-page/about-us';
import Categories from '../components/landing-page/categories';
import Testimonials from '../components/landing-page/testimonials';
import BrowseProducts from '../components/browse-products';
import Projects from '../components/landing-page/projects';
import ContactUs from '../components/landing-page/contact-us';
import {Link} from 'react-scroll';
import { useState , useEffect} from 'react';
const Home: NextPage = () => {
    const [windowSize, setWindowSize] = useState({
        width: 1,
        height: 1,
      });
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); 
    return (
        <div className={styles.container}>
            <Head>
                <title>Flintstones Bangalore- Leading Stones Manufacturer </title>
                <meta name="description" content="Flintstones Bangalore official website"/>
                <meta name="google-site-verification" content="pUMNcxdLDe57HiuLmq5c1gLv3qtmEzkaHn7s8E92z-M" />
                <link rel="icon" href="images/Logo.svg"/>
            </Head>

            <section className={styles.hero}>
                {/* <video className={styles.backgroundVideo} autoPlay loop muted>
                    <source src="/video/BackgroundVideo.mp4" type="video/mp4"/>
                </video> */}

    <div className={styles.backgroundVideo}
    style={{height:"100vh"}}>
        
        {windowSize.width>760?
        <>
        <div className={styles.headingContainerOld}>
                        <h1 className={`${styles.headingOld} raleway`}>Flinstones</h1>
                        <span className={styles.logoContainerOld}>
                            <Image  alt="Logo"  src={Logo}/>
                        </span>
                    </div>
                    
                    </>
        :null}
       
            
           { windowSize.width>760?<iframe style={{height:"110%", width:"100%"}} title="Flinstones model" frameBorder="0" allowFullScreen  allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="auto" height="auto" src="https://sketchfab.com/models/ae54cd65533549ca83c60c9fd4d00929/embed?navigation=fps&camera=0&autostart=1">
            </iframe>://https://sketchfab.com/models/ae54cd65533549ca83c60c9fd4d00929/embed
            <video className={styles.backgroundVideo} autoPlay loop muted>
                    <source src="/video/BackgroundVideo.mp4" type="video/mp4"/>
                </video>
            //https://sketchfab.com/models/77ebd12971a5445e8b54f43f9eedc4db/embed?camera=0
            // <iframe style={{height:"110%", width:"100%"}} title="Flinstones model" frameBorder="0" allowFullScreen  allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="auto" height="auto" src="https://sketchfab.com/models/77ebd12971a5445e8b54f43f9eedc4db/embed?camera=0&autostart=1&navigation=fps">
            // </iframe>
                }
            
              </div>
    
                <div className={styles.heroContent}>
                    
                    {windowSize.width<760?
                    <>
                    <div className={styles.headingContainer}>
                        <h1 className={`${styles.heading} raleway`}>Flintstones</h1>
                        <span className={styles.logoContainer}>
                            <Image className={styles.logo} alt="Logo" src={Logo}/>
                        </span>
                    </div>
                    <h2 className={styles.subHeading}>Live in luxury</h2>
                    </>:null}
                   
                </div>
                <Link activeClass="active" to="about-us-section" spy={true} smooth={true}>
                
                    <div className={styles.mouse_scroll}>
                    
                   <div style={{fontWeight:"bolder", position:"absolute", left:"50%",bottom:"30%", transform:"translate(-50%,-50%)"}}>Scroll Down</div> 
                    <div className={styles.mouse}>
                        <div className={styles.wheel}>
                            
                        </div>
                    </div>
                   
                    {windowSize.width>760?<span style={{position:"absolute", top:"-30%", right:"6.5%"}}>
                            <Image width="200" height="200" className={styles.logo} alt="Logo" src={wasd} style={{filter:"invert(1)"}}/>
                        </span>:null}
                    <div style={{position:"absolute", left:"50%",bottom:"50%", transform:"translate(-50%,-50%)"}}>
                    
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
          
   
    

            <BrowseProducts></BrowseProducts>
            <Projects></Projects>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;

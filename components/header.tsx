import styles from '../styles/components/header.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../public/images/toplogo.png';
import { Navbar, Nav } from 'react-bootstrap';
import Script from 'next/script';
import Head from 'next/head';

export default function Header() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2CQV3MTXLC';
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-2CQV3MTXLC');
    };

    return () => {
      // Cleanup on unmount
      document.head.removeChild(script);
    };
  }, []);

  const [windowSize, setWindowSize] = useState({
    width: 1,
    height: 1,
  });

  const [isNavbarExpanded, setNavbarExpanded] = useState(false);

  function handleResize() {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    // only execute all the code below in the client-side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with the initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const WhiteNavbarToggle = () => (
    <Navbar.Toggle
      aria-controls="responsive-navbar-nav"
      onClick={() => setNavbarExpanded(!isNavbarExpanded)}
    >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="white" 
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path d="M1 0h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm0 1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1zM2 4h12v1H2V4zm0 2h12v1H2V6zm0 2h12v1H2V8zm0 2h12v1H2v-1zm0 2h12v1H2v-1z" />
    </svg>
    </Navbar.Toggle>
  );

  return (
    <div className='container-fluid'>
    <header className={styles.header}>
  <Navbar expand="lg" className={styles.nav + " navbar-light"}>
    <Link href={'/'}>
      <Navbar.Brand className={styles.navbarnd}>
        <Image alt="Logo" height="60" width="150" src={logo} />
      </Navbar.Brand>
    </Link>
    <WhiteNavbarToggle />
    <Navbar.Collapse className={`justify-content-center ${
              isNavbarExpanded ? styles.expandedNavbar : ''
            }`}
            onToggle={(expanded) => setNavbarExpanded(expanded)}
          >
      <Nav className="mr-auto align-items-center">
        <Link href={'/'}>
          <p className={styles.navLink}>Home</p>
        </Link>
        <Link href={'/about'}>
          <p className={styles.navLink}>About</p>
        </Link>
        <Link href={'/products'}>
          <p className={styles.navLink}>Products</p>
        </Link>
        <Link href={'/portfolio'}>
          <p className={styles.navLink}>Portfolio</p>
        </Link>
        <Link href={'/client_success'}>
          <p className={styles.navLink}>Client Success</p>
        </Link>
        <Link href={'/moodboard'}>
          <p className={styles.navLink}>Moodboard</p>
        </Link>

        {windowSize.width > 760 ? (
          <Link href={'/virtualTour'}>
            <p className={styles.navLink}>Virtual Tour</p>
          </Link>
        ) : null}
        <Link href={'/contact'}>
          <p className={styles.navLink}>Contact</p>
        </Link>
        <div className="d-flex align-items-center">
          {/* <u> */}
            <p className={styles.navLink}>+91 9880064325</p>
          {/* </u> */}
        </div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</header>
</div>


  );
}

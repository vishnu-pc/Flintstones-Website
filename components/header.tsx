import styles from '../styles/components/header.module.css';
import Link from 'next/link';
import { useState , useEffect} from 'react';

export default function Header() {
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
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href={'/'}><p className={styles.navLink}>Home</p></Link>
                <Link href={'/about'}><p className={styles.navLink}>About</p></Link>
                <Link href={'/products'}><p className={styles.navLink}>Products</p></Link>
                <Link href={'/portfolio'}><p className={styles.navLink}>Portfolio</p></Link>
                <Link href={'/moodboard'}><p className={styles.navLink}>Moodboard</p></Link>
                {windowSize.width>760? <Link href={'/virtualTour'}><p className={styles.navLink}>Virtual Tour</p></Link>:null}
                {/* <Link href={'/customTiles'}><p className={styles.navLink}>Custom Tiles</p></Link> */}
               
            </nav>
        </header>
    );
}
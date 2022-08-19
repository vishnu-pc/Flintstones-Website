import styles from '../styles/components/header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href={'/'}><p className={styles.navLink}>Home</p></Link>
                <Link href={'/about'}><p className={styles.navLink}>About</p></Link>
                <Link href={'/products'}><p className={styles.navLink}>Products</p></Link>
                <Link href={'/portfolio'}><p className={styles.navLink}>Portfolio</p></Link>
                <Link href={'/moodboard'}><p className={styles.navLink}>Moodboard</p></Link>
                {/* <Link href={'/customTiles'}><p className={styles.navLink}>Custom Tiles</p></Link> */}
               
            </nav>
        </header>
    );
}
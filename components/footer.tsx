import logo from '../public/images/Logo.svg';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin, Whatsapp } from 'react-bootstrap-icons';
import styles from '../styles/components/footer.module.css';
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.trademark}>@2022 <a href=''>Atliere Solutions</a></p>
            <span className={styles.logoContainer}>
                <Image alt="Logo" src={logo}></Image>
            </span>
            <div className={styles.socialLinks}>
                <Instagram />
                <Facebook />
                <Linkedin />
                <Whatsapp />
            </div>
        </footer>
    );
}
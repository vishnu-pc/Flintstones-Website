import logo from '../public/images/Logo.svg';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin, Whatsapp } from 'react-bootstrap-icons';
import styles from '../styles/components/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={styles.logoContainer}>
                <Image alt="Logo" src={logo}></Image>
            </span>
            <p className={styles.trademark}>Copyright &#169; 2022 Flintstones.
            {/* <br></br> */}
            <a href='/'> Powered by Atliere Solutions</a>
            </p>
            <div className={styles.socialLinksSection}>
                {/* <Instagram />
                <Facebook />
                <Linkedin />
                <Whatsapp /> */}
                <a href='https://www.instagram.com/_flintstones__/'>
                    <div className={styles.socialLinksNodes}>
                        <img src="./images/instagram-logo.jpg"></img><br />
                    </div> 
                </a>
                <a href='https://www.facebook.com/flintstones2/'>
                    <div className={styles.socialLinksNodes}>
                        <img src="./images/facebook-logo.png"></img><br />
                    </div>
                </a>
                <a href='https://www.linkedin.com/company/flintstones/about/'>
                    <div className={styles.socialLinksNodes}>
                        <img src="./images/linkedin-logo.webp"></img><br />
                    </div>
                </a>
                <a href='https://wa.me/919880064325'>
                    <div className={styles.socialLinksNodes}>
                        <img src="./images/WhatsApp.svg.webp"  style={{background: 'rgba(0,128,0,1)', padding: '10%'}}></img><br />
                    </div>
                </a>
            </div>
        </footer>
    );
}
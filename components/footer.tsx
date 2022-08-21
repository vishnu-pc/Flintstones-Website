import logo from '../public/images/Logo.svg';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin, Whatsapp } from 'react-bootstrap-icons';
import styles from '../styles/components/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            
            <p className={styles.trademark}>Copyright &#169; 2022 Flintstones.
            {/* <br></br> */}
            <br></br>
            <a> Powered by Tylt</a>
            </p>
            <span className={styles.logoContainer}>
                <Image alt="Logo" width="100" height="100" src={logo}></Image>
            </span>
            <div className={styles.socialLinksSection}>
                {/* <Instagram />
                <Facebook />
                <Linkedin />
                <Whatsapp /> */}
                <a href='https://www.instagram.com/_flintstones__/'>
                    <div className={styles.socialLinksNodes}>
                        {/* <img src="./images/instagram-logo.jpg"></img><br /> */}
                        <Instagram />
                    </div> 
                </a>
                <a href='https://www.facebook.com/flintstones2/'>
                    <div className={styles.socialLinksNodes}>
                        {/* <img src="./images/facebook-logo.png"></img><br /> */}
                        <Facebook/>
                    </div>
                </a>
                <a href='https://www.linkedin.com/company/flintstones/about/'>
                    <div className={styles.socialLinksNodes}>
                        {/* <img src="./images/linkedin-logo.webp"></img><br /> */}
                        <Linkedin/>
                    </div>
                </a>
                <a href='https://wa.me/919880064325'>
                    <div className={styles.socialLinksNodes}>
                        {/* <img src="./images/WhatsApp.svg.webp"  style={{background: 'rgba(0,128,0,1)', padding: '10%'}}></img><br /> */}
                        <Whatsapp/>
                    </div>
                </a>
            </div>
        </footer>
    );
}
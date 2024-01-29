import logo from '../public/images/flintstones_logo.png';

import Image from 'next/image';
import { Instagram, Facebook, Linkedin, Whatsapp } from 'react-bootstrap-icons';
import styles from '../styles/components/footer.module.css';
import Link from 'next/link';
export default function Footer() {
    return (
        
        <footer className={styles.footer}>
           
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                            <Image className={styles.logo} alt="Logo" src={logo}/>
                    <p className={styles.abtcont}>We at Flintstones celebrate this art with our designer collection of products. We specialise in aesthetic finishing- building materials which adds a luxurious touch to any architectural wonder.<br/></p>
                    </div>
                    <div className="col-md-4">
                    <h4 className={styles.footertitle}>Quick Links</h4>
                        <ul className={styles.footerlinks}>
                        <li><a href={'/'}>Home</a></li>
                        <li><a href={'/about'}>About</a></li>
                        <li><a href={'/products'}>Products</a></li>
                        <li><a href={'/portfolio'}>Portfolio</a></li>
                        <li><a href={'/moodboard'}>Moodboard</a></li>
                        </ul>
                        
                    </div>
                    <div className="col-md-4">
                    <h4 className={styles.footertitle}>Contact</h4>
                        <ul className={styles.footerlinks}>
                            <li>Address: 270, 3rd Cross Road, 2nd Stage Defence Colony Domlur, near Near Lavonne Cafe, Indiranagar, Bengaluru, Karnataka 560071.</li>
                            <li>Mobile: +91 9880064325</li>
                            <li>Email: sales@flitstones.in</li>
                            <li><br></br></li>
                            <li>
                               
                            <div className={styles.socialLinksSection}>
                            <a href='https://www.instagram.com/_flintstones__/'>
                                <div className={styles.socialLinksNodes}>
                                    <Instagram />
                                </div>
                            </a>
                            <a href='https://www.facebook.com/flintstones2/'>
                                <div className={styles.socialLinksNodes}>
                                    <Facebook />
                                </div>
                            </a>
                            <a href='https://www.linkedin.com/company/flintstones/about/'>
                                <div className={styles.socialLinksNodes}>
                                    <Linkedin />
                                </div>
                            </a>
                            <a href='https://wa.me/919880064325'>
                                <div className={styles.socialLinksNodes}>
                                    <Whatsapp />
                                </div>
                            </a>
                        </div>
                        
                            </li>
                        </ul>
                        
                    </div>
                </div>
                <hr></hr>
                <p className={styles.trademark}>
                        Copyright &#169; 2022 Flintstones. 
                        </p>
            </div>
        </footer>
    );
}

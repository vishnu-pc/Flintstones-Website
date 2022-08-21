import styles from '../../styles/components/landing-page/categories.module.css';
import Image from 'next/image';
import Bricks from '../../public/images/bricks.png';
import Murals from '../../public/images/murals.jpg';
import Coating from '../../public/images/ProductBackground2.jpg';
import Link from 'next/link';

export default function Categories() {
    return (
        <section className={styles.section}>
            <h2 className="landing-section-header">Categories</h2>
            <div className={styles.categories}>
            <Link href="/products/bricks">
                <div className={styles.category}>
               
                    <div className={styles.categoryImageWrapper}>
                        <Image
                            alt="Bricks category"
                            src={Bricks}
                            layout="fill"
                            objectFit="cover"
                        ></Image>
                    </div>
                    
                        <button className={styles.button}>Bricks</button>

                </div>
                </Link>
                <Link href="/products/murals">
                <div className={styles.category}>
                
                    <div className={styles.categoryImageWrapper}>
                        <Image
                        quality="5"
                            alt="Bricks category"
                            src={Murals}
                            layout="fill"
                            objectFit="cover"
                        ></Image>
                    </div>
                    
                        <button className={styles.button}>Luxury Products</button>
                   
                </div>
                </Link>
                <Link href="/products/coating">
                <div className={styles.category}>
                
                    <div className={styles.categoryImageWrapper}>
                        <Image 
                        quality="5"
                        alt="Bricks category"
                               src={Coating}
                               layout="fill"
                               objectFit="cover"
                        ></Image>
                    </div>
                   
                        <button className={styles.button}>Surface Coating</button>
                   
                </div>
                </Link>
            </div>
        </section>
    );
}

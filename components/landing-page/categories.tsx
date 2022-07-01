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
                <div className={styles.category}>
                    <div className={styles.categoryImageWrapper}>
                        <Image
                            alt="Bricks category"
                            src={Bricks}
                            layout="fill"
                            objectFit="cover"
                        ></Image>
                    </div>
                    <Link href="/products/bricks">
                        <button className={styles.button}>Bricks</button>
                    </Link>
                </div>
                <div className={styles.category}>
                    <div className={styles.categoryImageWrapper}>
                        <Image
                            alt="Bricks category"
                            src={Murals}
                            layout="fill"
                            objectFit="cover"
                        ></Image>
                    </div>
                    <Link href="/products/murals">
                        <button className={styles.button}>Luxury Products</button>
                    </Link>
                </div>
                <div className={styles.category}>
                    <div className={styles.categoryImageWrapper}>
                        <Image alt="Bricks category"
                               src={Coating}
                               layout="fill"
                               objectFit="cover"
                        ></Image>
                    </div>
                    <Link href="/products/coating">
                        <button className={styles.button}>Surface Coating</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

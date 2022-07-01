import styles from '../styles/components/landing-page/browse-products.module.css';
import Link from 'next/link';


export default function BrowseProducts() {
    return (
        <Link href="/products">
            <section className={styles.section}>
                <h1 className={styles.header}>Browse our products</h1>
            </section>
        </Link>
    )
}
import styles from '../styles/components/header-with-logo.module.css';
import Image from 'next/image';
import Logo from '../public/images/Logo.svg';

type Props = {
    header: string;
}
export default function HeaderWithLogo(props: Props) {
    return (
        <section className={styles.hero}>
            <h1 className={styles.heroHeader}>{props.header}</h1>
            <div className={styles.heroLogo}>
                <Image alt="Logo" src={Logo}/>
            </div>
        </section>
    );
}

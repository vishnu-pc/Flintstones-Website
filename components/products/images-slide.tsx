import styles from '../../styles/components/products/image-slide.module.css';
import Image from 'next/image';

type Props = {
    images: any[],
    title: string;
}
export default function ImagesSlide(props: Props) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.slider}>
                {
                    props.images.map(image => (
                        <div key={image.src} className={styles.imageWrapper}>
                            <Image layout="fill" objectFit="cover" src={image} alt={image.src}></Image>
                        </div>
                    ))
                }
            </div>
        </div>

    );
}
import ImagesSlide from '../../components/products/images-slide';
import styles from '../../styles/products/shared.module.css';

import brick1 from '../../public/images/bricks/brick1.jpg';
import brick2 from '../../public/images/bricks/brick2.jpg';
import brick3 from '../../public/images/bricks/brick3.jpg';
import brick4 from '../../public/images/bricks/brick4.jpg';
import brick5 from '../../public/images/bricks/brick5.jpg';
import brick6 from '../../public/images/bricks/brick6.jpg';
import brick7 from '../../public/images/bricks/brick7.jpg';
import brick8 from '../../public/images/bricks/brick8.jpg';
import brick9 from '../../public/images/bricks/brick9.jpg';

import concrete1 from '../../public/images/bricks2/concrete_brick1.jpg';
import concrete2 from '../../public/images/bricks2/concrete_brick2.jpg';
import concrete3 from '../../public/images/bricks2/concrete_brick3.jpg';
import concrete4 from '../../public/images/bricks2/concrete_brick4.jpg';
import concrete5 from '../../public/images/bricks2/concrete_brick5.jpg';
import concrete6 from '../../public/images/bricks2/concrete_brick6.jpg';
import concrete7 from '../../public/images/bricks2/concrete_brick7.jpg';
import concrete8 from '../../public/images/bricks2/concrete_brick8.jpg';
import concrete9 from '../../public/images/bricks2/concrete_brick9.jpg';

import natural1 from '../../public/images/bricks3/natural1.jpg';
import natural2 from '../../public/images/bricks3/natural2.jpg';
import natural3 from '../../public/images/bricks3/natural3.jpg';
import natural4 from '../../public/images/bricks3/natural4.jpg';
import natural5 from '../../public/images/bricks3/natural5.jpg';
import natural6 from '../../public/images/bricks3/natural6.jpg';
import natural7 from '../../public/images/bricks3/natural7.jpg';
import natural8 from '../../public/images/bricks3/natural8.jpg';
import natural9 from '../../public/images/bricks3/natural9.jpg';
import Head from 'next/head';
import exp from '../public/images/external-link-white.png'; 
const bricks = [
    brick1,
    brick2,
    brick3,
    brick4,
    brick5,
    brick6,
    brick7,
    brick8,
    brick9,
];

const concretes = [
    concrete1,
    concrete2,
    concrete3,
    concrete4,
    concrete5,
    concrete6,
    concrete7,
    concrete8,
    concrete9,
];

const naturals = [
    natural1,
    natural2,
    natural3,
    natural4,
    natural5,
    natural6,
    natural7,
    natural8,
    natural9,
];

export default function Bricks() {
    return (<>
        <div>
        <Head>
        <title>Discover the Best Bricks in Bangalore at Flintstones - Your Trusted Brick Supplier</title>
        <meta name="description" content="Explore a wide range of top-quality bricks in Bangalore at Flintstones. From the finest red bricks to durable cement and clay options, find the perfect solution for your construction needs. Visit us for artificial, concrete, and natural bricks in Bangalore. Serving Indira Nagar and beyond, Flintstones is your go-to brick construction company!"/>
        <meta name="google-site-verification" content="pUMNcxdLDe57HiuLmq5c1gLv3qtmEzkaHn7s8E92z-M" />
        <link rel="icon" href="images/Logo.svg"/>
        </Head>
      
        </div>
        
        <div className={styles.wrapper}>
      
            <div>
            
                <h1 className={styles.title}>Bricks</h1>
                <h1 className={styles.bigTitle}>Bricks</h1>
            </div>
            <div className={styles.slidesContainer}>
                <h1 className={styles.h1title}><strong>Premium Bricks in Bangalore for Every Construction Project</strong>
</h1>

<h2>Wide Variety, Trusted Quality: Choose <strong>Flintstones</strong> for Your Brick Needs
</h2><br />
                <ImagesSlide title="Artificial Bricks" images={bricks}></ImagesSlide>
                <ImagesSlide title="Concrete Bricks" images={concretes}></ImagesSlide>
                <ImagesSlide title="Natural Bricks" images={naturals}></ImagesSlide>
            </div>
        </div>
        </>);
}
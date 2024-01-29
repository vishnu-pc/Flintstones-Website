import ImagesSlide from '../../components/products/images-slide';
import styles from '../../styles/products/shared.module.css';

import concrete1 from "../../public/images/concretes/concrete1.jpg";
import concrete2 from "../../public/images/concretes/concrete2.jpg";
import concrete3 from "../../public/images/concretes/concrete3.jpg";
import concrete4 from "../../public/images/concretes/concrete4.jpg";
import concrete5 from "../../public/images/concretes/concrete5.jpg";
import concrete6 from "../../public/images/concretes/concrete6.jpg";
import concrete7 from "../../public/images/concretes/concrete7.jpg";
import concrete8 from "../../public/images/concretes/concrete8.jpg";

import concveneer1 from "../../public/images/concveneers/concveneer1.jpg";
import concveneer2 from "../../public/images/concveneers/concveneer2.jpg";
import concveneer3 from "../../public/images/concveneers/concveneer3.jpg";

import texture1 from "../../public/images/textures/texture1.jpg";
import texture2 from "../../public/images/textures/texture2.jpg";
import texture3 from "../../public/images/textures/texture3.jpg";
import texture4 from "../../public/images/textures/texture4.jpg";
import texture5 from "../../public/images/textures/texture5.jpg";
import texture6 from "../../public/images/textures/texture6.jpg";

import micro1 from "../../public/images/micros/micro1.jpg";
import micro2 from "../../public/images/micros/micro2.jpg";
import micro3 from "../../public/images/micros/micro3.jpg";
import micro4 from "../../public/images/micros/micro4.jpg";
import micro5 from "../../public/images/micros/micro5.jpg";
import micro6 from "../../public/images/micros/micro6.jpg";
import micro7 from "../../public/images/micros/micro7.jpg";
import Head from 'next/head';

const concretes = [
    concrete1,
    concrete2,
    concrete3,
    concrete4,
    concrete5,
    concrete6,
    concrete7,
    concrete8,
];

const concveneers = [
    concveneer1,
    concveneer2,
    concveneer3,
];

const textures = [
    texture1,
    texture2,
    texture3,
    texture4,
    texture5,
    texture6
];

const micros = [
    micro1,
    micro2,
    micro3,
    micro4,
    micro5,
    micro6,
    micro7
];

export default function Coating() {
    return (<>
        <div>
        <Head>
        <title>Flintstones: Pioneering Excellence in Surface Coating Solutions in Bangalore</title>
        <meta name="description" content="Transform surfaces with Flintstones' cutting-edge solutions - from waterproof concrete sealers to high gloss finishes. Explore our range of concrete, veneer, and texture surface coatings in Bangalore. Unleash the potential of Micros surface coating. Visit our Indira Nagar showroom for innovative solutions that redefine aesthetics and protection."/>
        <meta name="google-site-verification" content="pUMNcxdLDe57HiuLmq5c1gLv3qtmEzkaHn7s8E92z-M" />
        <link rel="icon" href="images/Logo.svg"/>
    </Head>
        </div>
    
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.title}>Coating</h1>
                <h1 className={styles.bigTitle}>Coating</h1>
            </div>
            <div className={styles.slidesContainer}>
            <h1 className={styles.h1title}><strong>Revolutionize Surfaces: Leading the Way in Bangalore Surface Coating Technology
</strong>
</h1>

<h2>Discover the Art of Protection and Elegance wit <strong>Flintstones</strong> Surface Coatings
</h2><br />
                <ImagesSlide title="Concretes" images={concretes}></ImagesSlide>
                <ImagesSlide title="Veneers" images={concveneers}></ImagesSlide>
                <ImagesSlide title="Textures" images={textures}></ImagesSlide>
                <ImagesSlide title="Micros" images={micros}></ImagesSlide>
            </div>
        </div>

        </>);
}
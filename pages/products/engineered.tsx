import ImagesSlide from '../../components/products/images-slide';
import styles from '../../styles/products/shared.module.css';

import threeD1 from "../../public/images/threeDs/threeD1.jpg";
import threeD2 from "../../public/images/threeDs/threeD2.jpg";
import threeD3 from "../../public/images/threeDs/threeD3.jpg";
import threeD4 from "../../public/images/threeDs/threeD4.jpg";
import threeD5 from "../../public/images/threeDs/threeD5.jpg";

import cladding1 from "../../public/images/claddings/cladding1.jpg";
import cladding2 from "../../public/images/claddings/cladding2.jpg";
import cladding3 from "../../public/images/claddings/cladding3.jpg";
import cladding4 from "../../public/images/claddings/cladding4.jpg";
import cladding5 from "../../public/images/claddings/cladding5.jpg";
import cladding6 from "../../public/images/claddings/cladding6.jpg";
import cladding7 from "../../public/images/claddings/cladding7.jpg";

const threeDs = [
    threeD1,
    threeD2,
    threeD3,
    threeD4,
    threeD5,
];

const claddings = [
    cladding1,
    cladding2,
    cladding3,
    cladding4,
    cladding5,
    cladding6,
    cladding7,
];

export default function Engineered() {
    return (
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.title}>Engineered</h1>
                <h1 style={{fontSize:"150px", top:"20%", position:"relative"}}className={styles.bigTitle}>Engineered</h1>
            </div>
            <div className={styles.slidesContainer}>
                <ImagesSlide title="3Ds" images={threeDs}></ImagesSlide>
                <ImagesSlide title="Claddings" images={claddings}></ImagesSlide>
            </div>
        </div>

    );
}
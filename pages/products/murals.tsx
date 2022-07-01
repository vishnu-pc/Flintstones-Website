import ImagesSlide from '../../components/products/images-slide';
import styles from '../../styles/products/shared.module.css';

import cnc1 from "../../public/images/cncs/cnc1.jpg";
import cnc2 from "../../public/images/cncs/cnc2.jpg";
import cnc3 from "../../public/images/cncs/cnc3.jpg";
import cnc4 from "../../public/images/cncs/cnc4.jpg";
import cnc5 from "../../public/images/cncs/cnc5.jpg";
import cnc6 from "../../public/images/cncs/cnc6.jpg";
import cnc7 from "../../public/images/cncs/cnc7.jpg";
import cnc8 from "../../public/images/cncs/cnc8.jpg";
import cnc9 from "../../public/images/cncs/cnc9.jpg";

import metal1 from "../../public/images/metals/metal1.jpg";
import metal2 from "../../public/images/metals/metal2.jpg";
import metal3 from "../../public/images/metals/metal3.jpg";
import metal4 from "../../public/images/metals/metal4.jpg";
import metal5 from "../../public/images/metals/metal5.jpg";

import fusion1 from "../../public/images/fusions/fusion1.jpg";
import fusion2 from "../../public/images/fusions/fusion2.jpg";
import fusion3 from "../../public/images/fusions/fusion3.jpg";
import fusion4 from "../../public/images/fusions/fusion4.jpg";
import fusion5 from "../../public/images/fusions/fusion5.jpg";
import fusion6 from "../../public/images/fusions/fusion6.jpg";
import fusion7 from "../../public/images/fusions/fusion7.jpg";
import fusion8 from "../../public/images/fusions/fusion8.jpg";

import inlay1 from "../../public/images/inlays/inlay1.jpg";
import inlay2 from "../../public/images/inlays/inlay2.jpg";
import inlay3 from "../../public/images/inlays/inlay3.jpg";

import slate1 from "../../public/images/slates/slate1.jpg";
import slate2 from "../../public/images/slates/slate2.jpg";
import slate3 from "../../public/images/slates/slate3.jpg";
import slate4 from "../../public/images/slates/slate4.jpg";
import slate5 from "../../public/images/slates/slate5.jpg";
import slate6 from "../../public/images/slates/slate6.jpg";
import slate7 from "../../public/images/slates/slate7.jpg";

const cncs = [
    cnc1,
    cnc2,
    cnc3,
    cnc4,
    cnc5,
    cnc6,
    cnc7,
    cnc8,
    cnc9,
];

const metals = [
    metal1,
    metal2,
    metal3,
    metal4,
    metal5
];

const fusions = [
    fusion1,
    fusion2,
    fusion3,
    fusion4,
    fusion5,
    fusion6,
    fusion7,
    fusion8,
];

const inlays = [
    inlay1,
    inlay2,
    inlay3/**/
];

const slates = [
    slate1,
    slate2,
    slate3,
    slate4,
    slate5,
    slate6,
    slate7
];

export default function Murals() {
    return (
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.title}>Murals</h1>
                <h1 className={styles.bigTitle}>Murals</h1>
            </div>
            <div className={styles.slidesContainer}>
                <ImagesSlide title="CNCs" images={cncs}></ImagesSlide>
                <ImagesSlide title="Metals" images={metals}></ImagesSlide>
                <ImagesSlide title="Fusions" images={fusions}></ImagesSlide>
                <ImagesSlide title="Inlays" images={inlays}></ImagesSlide>
                <ImagesSlide title="Slates" images={slates}></ImagesSlide>
            </div>
        </div>

    );
}
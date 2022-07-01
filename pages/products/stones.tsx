import ImagesSlide from '../../components/products/images-slide';
import styles from '../../styles/products/shared.module.css';

import basin1 from "../../public/images/basins/basin1.jpg";
import basin2 from "../../public/images/basins/basin2.jpg";
import basin3 from "../../public/images/basins/basin3.jpg";
import basin4 from "../../public/images/basins/basin4.jpg";
import basin5 from "../../public/images/basins/basin5.jpg";
import basin6 from "../../public/images/basins/basin6.jpg";

import floor1 from "../../public/images/flooring/floor1.jpg";
import floor2 from "../../public/images/flooring/floor2.jpg";
import floor3 from "../../public/images/flooring/floor3.jpg";

import lattice1 from "../../public/images/lattice/lattice1.jpg";
import lattice2 from "../../public/images/lattice/lattice2.jpg";
import lattice3 from "../../public/images/lattice/lattice3.jpg";
import lattice4 from "../../public/images/lattice/lattice4.jpg";
import lattice5 from "../../public/images/lattice/lattice5.jpg";
import lattice6 from "../../public/images/lattice/lattice6.jpg";

import mosiac1 from "../../public/images/mosiacs/mosiac1.jpg";
import mosiac2 from "../../public/images/mosiacs/mosiac2.jpg";
import mosiac3 from "../../public/images/mosiacs/mosiac3.jpg";
import mosiac4 from "../../public/images/mosiacs/mosiac4.jpg";
import mosiac5 from "../../public/images/mosiacs/mosiac5.jpg";
import mosiac6 from "../../public/images/mosiacs/mosiac6.jpg";
import mosiac7 from "../../public/images/mosiacs/mosiac7.jpg";

import veneer1 from "../../public/images/veneers/veneer1.jpg";
import veneer2 from "../../public/images/veneers/veneer2.jpg";
import veneer3 from "../../public/images/veneers/veneer3.jpg";
import veneer4 from "../../public/images/veneers/veneer4.jpg";
import veneer5 from "../../public/images/veneers/veneer5.jpg";
import veneer6 from "../../public/images/veneers/veneer6.jpg";
import veneer7 from "../../public/images/veneers/veneer7.jpg";

import stacking1 from "../../public/images/stackings/stacking1.jpg";
import stacking2 from "../../public/images/stackings/stacking2.jpg";
import stacking3 from "../../public/images/stackings/stacking3.jpg";
import stacking4 from "../../public/images/stackings/stacking4.jpg";
import stacking5 from "../../public/images/stackings/stacking5.jpg";
import stacking6 from "../../public/images/stackings/stacking6.jpg";
import stacking7 from "../../public/images/stackings/stacking7.jpg";
import stacking8 from "../../public/images/stackings/stacking8.jpg";
import stacking9 from "../../public/images/stackings/stacking9.jpg";

const basins = [
    basin1,
    basin2,
    basin3,
    basin4,
    basin5,
    basin6,
];

const floors = [
    floor1,
    floor2,
    floor3,
];

const lattices = [
    lattice1,
    lattice2,
    lattice3,
    lattice4,
    lattice5,
    lattice6,
];

const mosiacs = [
    mosiac1,
    mosiac2,
    mosiac3,
    mosiac4,
    mosiac5,
    mosiac6,
    mosiac7
];

const veneers = [
    veneer1,
    veneer2,
    veneer3,
    veneer4,
    veneer5,
    veneer6,
    veneer7
];

const stackings = [
    stacking1,
    stacking2,
    stacking3,
    stacking4,
    stacking5,
    stacking6,
    stacking7,
    stacking8,
    stacking9
];


export default function Stones() {
    return (
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.title}>Stones</h1>
                <h1 className={styles.bigTitle}>Stones</h1>
            </div>
            <div className={styles.slidesContainer}>
                <ImagesSlide title="Basins" images={basins}></ImagesSlide>
                <ImagesSlide title="Floors" images={floors}></ImagesSlide>
                <ImagesSlide title="Lattices" images={lattices}></ImagesSlide>
                <ImagesSlide title="Mosaics" images={mosiacs}></ImagesSlide>
                <ImagesSlide title="Veneers" images={veneers}></ImagesSlide>
                <ImagesSlide title="Stackings" images={stackings}></ImagesSlide>
            </div>
        </div>

    );
}
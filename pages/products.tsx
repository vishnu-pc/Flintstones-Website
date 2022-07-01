import styles from '../styles/Products.module.css';
import HeaderWithLogo from '../components/header-with-logo';
import Image from 'next/image';

import Brick from '../public/images/Brick_main.jpg';
import NaturalStone from '../public/images/natural_stone.jpg';
import SurfaceCoating from '../public/images/surface_coating.jpg';
import EngineeredStone from '../public/images/engineered-stone.jpg';
import Murals from '../public/images/murals.jpg';

import NaturalStoneCat from '../public/images/natural_catalogue.jpg';
import StampedConcreteCat from '../public/images/stamped_catalogue.jpg';
import MetalConceptCat from '../public/images/metal_catalogue.jpg';
import FlooringStoneCat from '../public/images/flooring_catalogue.jpg';
import EngineeredStoneCat from '../public/images/engineered_catalogue.jpg';
import ConcreteFacadesCat from '../public/images/concrete_catalogue.jpg';
import BricksCat from '../public/images/bricks_catalogue.jpg';
import Link from 'next/link';


const catalogues = [
    {
        title: 'Natural Stones',
        image: NaturalStoneCat,
        link: '/catalogues/catalogue1.pdf',
        text: 'Experience the look of a natural stone chiselled in the form of a sheet-like derivative, but with enhanced' +
            ' flexibility and durability, we call it Natural Stone Veneers. These sprightly finishes can be decorated on' +
            ' walls, furniture, and a number surfaces as laminates. They come in two forms- opaque and translucent' +
            ' (for lighting to pass by).',
    },
    {
        title: 'Stamped Concrete',
        image: StampedConcreteCat,
        link: '/catalogues/catalogue2.pdf',
        text: 'Malleable to incalculable designs and styles, with sturdy, resistive properties, stamped concrete finishes' +
            ' comes in various colours, demonstrating an arrogantly rustic, yet authentic cement finish. Browse through' +
            ' our extensive collection of existing references for a better understanding.',
    },
    {
        title: 'Metal Concepts',
        image: MetalConceptCat,
        link: '/catalogues/catalogue3.pdf',
        text: 'A unique blend of metal and natural stone, the metal series is a very distinctive artistic piece of ours.' +
            ' The numerous possibilities with murals never ceases to amaze, providing sophistication to the applicant\'s space.',
    },
    {
        title: 'Flooring Stone',
        image: FlooringStoneCat,
        link: '/catalogues/catalogue4.pdf',
        text: 'A classic never goes out of fashion. Natural stone flooring is a perfect choice when one looks for' +
            ' minimalism and earthy flooring representation. Explore our vast collection of stone flooring designs and' +
            ' with us be rest assured you will find the right pick for you.',
    },
    {
        title: 'Engineered Stone',
        image: EngineeredStoneCat,
        link: '/catalogues/catalogue5.pdf',
        text: 'For the connoisseurs of the yesteryear, our collection of Engineered stones provide an array of options.' +
            ' From Victorian fireplaces to Roman castles, go all out mediaeval with our diverse range of Engineered Stones.',
    },
    {
        title: 'Concrete facades',
        image: ConcreteFacadesCat,
        link: '/catalogues/catalogue6.pdf',
        text: 'The poster child for minimalism, a material built on the grounds of sturdiness with an indefinite range ' +
            'of possibilities, is a bridal definition of sleek-luxury. Browse through our collection of designs and let ' +
            'the world of personalization take you on the ride of a lifetime.',
    },
    {
        title: 'Bricks',
        image: BricksCat,
        link: '/catalogues/catalogue7.pdf',
        text: 'For the connoisseurs of the yesteryear, our collection of Engineered stones provide an array of options.' +
            ' From Victorian fireplaces to Roman castles, go all out mediaeval with our diverse range of Engineered Stones.',
    },
];

const categories = [
    {
        title: 'Bricks',
        image: Brick,
        link: 'bricks'
    },
    {
        title: 'Natural Stones',
        image: NaturalStone,
        link: 'stones'
    },
    {
        title: 'Surface coating',
        image: SurfaceCoating,
        link: 'coating'
    },
    {
        title: 'Engineered Stone',
        image: EngineeredStone,
        link: 'engineered'
    },
    {
        title: 'Murals',
        image: Murals,
        link: 'murals'
    },
];

export default function Products() {
    return (
        <>
            <section className={styles.categoriesSection}>
                <h1 className={styles.header}>Categories</h1>
                <div className={styles.categoriesWrapper}>
                    {
                        categories.map(category => (
                            <Link key={category.title} href={`/products/${category.link}`}>
                                <div className={styles.categoryWrapper} >
                                    <div className={styles.categoryImageWrapper}>
                                        <Image objectFit="cover" layout="fill" src={category.image}
                                               alt={category.title}
                                               className={styles.categoryImage}></Image>
                                    </div>
                                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </section>
            <section>
                <HeaderWithLogo header="COULD NOT FIND WHAT YOU'RE LOOKING FOR?"></HeaderWithLogo>
                <section className={styles.catalogues}>
                    {
                        catalogues.map(catalogue => (
                            <a className={styles.catalogueLink}
                               rel="noopener noreferrer" target="_blank"
                               key={catalogue.title + 'catalaogue'}
                               href={catalogue.link}>
                                <div className={styles.catalogueWrapper}>
                                    <div className={styles.catalogueImageWrapper}>
                                        <Image objectFit="cover" layout="fill" src={catalogue.image}
                                               alt={catalogue.title}></Image>
                                    </div>
                                    <div className={styles.catalogueDescriptionWrapper}>
                                        <h2 className={styles.catalogueDescriptionHeader}>{catalogue.title}</h2>
                                        <p className={styles.catalogueDescriptionText}>{catalogue.text}</p>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </section>
            </section>
            <div className={styles.quoteWrapper}>
                <p className={styles.quote}>
                    &quot; For a house to feel successfully like home, the objects in it must
                    communicate with one another, respond and balance one another out. &quot; -
                    Andree Putman
                </p>
            </div>
        </>
    );
}
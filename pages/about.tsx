import type {NextPage} from 'next';
import styles from '../styles/About.module.css';
import HeaderWithLogo from '../components/header-with-logo';

const About: NextPage = () => {
    return (
        <>
            <HeaderWithLogo header="About us"></HeaderWithLogo>
            <section>
                <div className={styles.aboutCard}>
                    <div className={styles.flipCard} tabIndex={0}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <div className={styles.heading}>Who we are</div>
                            </div>
                            <div className={styles.flipCardBack}>
                                <div className={styles.cardBody}>
                                    We are connoisseurs of the world of artisans and craftsmanship.
                                    The art of sculpting has been a very important and an integral
                                    part of our history. From the marble sculptures at the Vatican
                                    to the carvings on the temples of Hampi, artistic installations
                                    are an essential ornament used to enhance the aesthetics of any
                                    architecture. We at Flintstones celebrate this art with our
                                    designer collection of products. We specialise in aesthetic
                                    finishing- building materials which adds a luxurious touch to
                                    any architectural wonder. We wish to transform one’s living
                                    space into a home, and the place of work into a place of comfort
                                    with materials that represent and compliment the personality and
                                    vision of our clients.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutCard}>
                    <div className={styles.flipCard} tabIndex={0}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <div className={styles.heading}>Our Vision</div>
                            </div>
                            <div className={styles.flipCardBack}>
                                <div className={styles.cardBody}>
                                    We hope to be the name on everyone’s mind when they think of
                                    murals, concrete, stone finishes and other underlying
                                    mind-bending products that we frequently wish to adopt and add
                                    to our collection. We wish to be the go-to brand for architects
                                    and interior designers and pretty much anybody with an eye for
                                    design. We hope to bring a more nuanced, organised and
                                    customer-centric approach to the industry, also providing our
                                    clients with an unbiased after-sales service.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutCard}>
                    <div className={styles.flipCard} tabIndex={0}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <div className={styles.heading}>Our Values</div>
                            </div>
                            <div className={styles.flipCardBack}>
                                <div className={styles.cardBody}>
                                    Transparency is what builds trust, and that’s what we’d like to
                                    exhibit towards our customers. For us, our clients come first.
                                    We want to ensure that they have a seamless and welcoming
                                    experience throughout their journey with us. We want to make
                                    sure that any obstacle that may arise during the whole process
                                    will be our responsibility to handle. Here at Flintstones, we
                                    carry out our projects with a comprehensive sense of
                                    responsibility by making sure our clients are content with our
                                    deliveries throughout the entire process, keeping an open mind
                                    about feedback or criticism.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutCard}>
                    <div className={styles.flipCard} tabIndex={0}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <div className={styles.heading}>Our USP</div>
                            </div>
                            <div className={styles.flipCardBack}>
                                <div className={styles.cardBody}>
                                    As we have mentioned before, our priority is to make sure our
                                    clients receive what they come looking for. While our collection
                                    is diverse and exclusive, we also encourage personalisation in
                                    order to better be able to meet our clients needs. We provide
                                    design solutions and suggestions that best compliment their
                                    vision. In the sense that if our client has a design he is
                                    specifically inspired by, we enjoy bringing that inspiration to
                                    life. We also try to provide quick and seamless customer support
                                    post-delivery and take pride in helping our customers out, in
                                    every way possible.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;

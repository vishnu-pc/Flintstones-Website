import styles from '../../styles/components/landing-page/about-us.module.css';

export default function AboutUs() {
    return (
        <section className={styles.aboutUs} id='about-us-section'>
            <h2 className="landing-section-header">About us</h2>
            <p className={styles.aboutUsText}>
                We bring luxury and diversity to the construction industry with our versatile and highly
                customisable ranges of finishing materials. Pivoting around quality and sauve craftsmanship, our
                designs are engineered to project an aesthetic that is tailored to best fit your vibe. We at
                Flintstones aim to be a one-stop shop for all-exclusive aesthetic finishing - building materials. We
                are also well aware of how distressed the industry is and thus you can be assured that your
                experience with us will be nothing short of delightful. Visit us at our store in Indiranagar,
                Bangalore to experience true luxury in reality.
            </p>
        </section>
    );
}
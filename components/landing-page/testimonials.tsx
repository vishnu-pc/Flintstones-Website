//import {Carousel} from 'react-bootstrap';
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from '../../styles/components/landing-page/testimonials.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Testimonials() {
    
    return (
        <section className={styles.section}>
            <h2 className="landing-section-header">Testimonials</h2>
            
         <Carousel  >
         <div className={styles.carouselItem} >
                    &quot;Amazing collection Plenty of New Designs and Good quality of
                    products. Best price&&quot; - Ashwin S
                </div>
                <div className={styles.carouselItem} >
                    &quot;Amazing Place.The rates are reasonable and the staff there is so
                    welcoming and professional A one stop destination for all your decor
                    needs&quot; - Gaurav B
                </div>
                <div className={styles.carouselItem} >
                    &quot;We were looking for a marble washbasin and backsplash design for
                    our house interiors, and Deepak @ Flintstones helped us with his
                    ideas. The backsplash has come very beautiful, and enhances the
                    beauty of our common vanity. I recommend Flintstones.&quot; - Prashanth P
                </div>
              </Carousel>
        </section>
    );
}
import styles from '../styles/Portfolio.module.css';
//import {Carousel} from 'react-bootstrap';
import img1 from '../public/images/portfolio/portfolio1.jpg';
import img2 from '../public/images/portfolio/portfolio2.jpg';
import img3 from '../public/images/portfolio/portfolio3.jpg';
import img4 from '../public/images/portfolio/portfolio4.jpg';
import img5 from '../public/images/portfolio/portfolio5.jpg';
import img6 from '../public/images/portfolio/portfolio6.jpg';
import img7 from '../public/images/portfolio/portfolio7.jpg';
import img8 from '../public/images/portfolio/portfolio8.jpg';
import img9 from '../public/images/portfolio/portfolio9.jpg';
import img10 from '../public/images/portfolio/portfolio10.jpg';
import img11 from '../public/images/portfolio/portfolio11.jpg';
import img12 from '../public/images/portfolio/portfolio12.jpg';
import img13 from '../public/images/portfolio/portfolio13.jpg';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    {
        image: img1,
        caption: 'Aster RV',
    },
    {
        image: img2,
        caption: 'CRED,Banglore',
    },
    {
        image: img3,
        caption: 'Gerald,Hossur',
    },
    {
        image: img4,
        caption: 'Google,Bangalore',
    },
    {
        image: img5,
        caption: 'Google,Bangalore',
    },
    {
        image: img6,
        caption: 'Google,Hyderabad',
    },
    {
        image: img7,
        caption: 'Residential,Bangalore',
    },
    {
        image: img8,
        caption: 'Manoj,HSR layout',
    },
    {
        image: img9,
        caption: 'Oracale,Bangalore',
    },
    {
        image: img10,
        caption: 'Saswati,HSR layout',
    },
    {
        image: img11,
        caption: 'Soumya,Banashankri',
    },
    {
        image: img12,
        caption: 'Sumadura Group,Bangalore',
    },
    {
        image: img13,
        caption: 'Vinay,Yelahanka',
    },
];
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export default function Portfolio() {
    
    return (
        <>
            <section className={styles.section}  style={{height:"120vh", paddingTop:"1%"}}>
            <h1 style={{position:"absolute", top:"10%"}}className={styles.header}>Our projects</h1>
              <div style={{height:"50vh", position:"absolute", top:"25%"}}>
                  
                <Carousel  >
                
                            
                    {
                        images.map((img, idx) => (
                           <>
                           <h3>{img.caption}</h3>
                            <div key={idx} className={styles.carouselItem} >
                                <div className={styles.imageWrapper}>
                                    <Image  width="1000" height="1000"objectFit="cover" src={img.image} alt={img.caption}/>
                                </div>
                                
                            </div>
                            <br/>
                            <br/>
                             
                           </>
                        ))
                    }
      
                     
                </Carousel>
                </div>

                
                
            </section>
            {/* <div  style={{position:"absolute", top:"150%"}}className={styles.quotePage}>
            <div className={styles.quoteWrapper}>
                <p className={styles.quote}>
                    &quot; For a house to feel successfully like home, the objects in it must
                    communicate with one another, respond and balance one another out. &quot; -
                    Andree Putman
                </p>
            </div>
                </div> */}
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
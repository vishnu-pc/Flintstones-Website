import styles from '../../styles/components/products/image-slide.module.css';
import Image from 'next/image';
// import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { BookmarkStarFill, List } from 'react-bootstrap-icons';
import Moodboard from '../../pages/moodboard';
import Cookie from "js-cookie"
import React from 'react';
 //import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
// import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
type Props = {
    images: any[],
    title: string;
}
export default function ImagesSlide(props: Props) {
  
    const storeImage=(a:string,b:number)=>{
       var name="favs"+b.toString()
       
       Cookie.set(name,a)
        localStorage.setItem(name,a)
    }
    
    
    return (
        <div className={styles.container}>
            
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.slider}>
                {
                    props.images.map(image => (
                        <>
                        <div  className={styles.dropdown} style={{position:"relative", zIndex:"10"}}>
                        <button className={styles.dropbtn} >
                            
                            <div className={styles.dropdownContent}>
                                <a onClick={()=>storeImage(image.src,1)}>1</a>
                                <a onClick={()=>storeImage(image.src,2)}>2</a>
                                <a onClick={()=>storeImage(image.src,3)}>3</a>
                                <a onClick={()=>storeImage(image.src,4)}>4</a>
                                <a onClick={()=>storeImage(image.src,5)}>5</a>
                                <a onClick={()=>storeImage(image.src,6)}>6</a>
                                </div>
                        </button>

                        </div>
                        <div key={image.src} className={styles.imageWrapper}>
                            <Image quality="80" width="100" height="100"layout="fill" objectFit="cover" src={image} alt={image.src} ></Image>
                            
                        </div>
                        
                        </>
                    ))
                }
            </div>
        </div>
    
    );
    
}
import styles from '../../styles/components/products/image-slide.module.css';
import Image from 'next/image';
 import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { BookmarkStarFill, List } from 'react-bootstrap-icons';
import Moodboard from '../../pages/moodboard';
import Cookie from "js-cookie"
import React from 'react';
 import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
 import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
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
                        <div style={{position:"relative", zIndex:"10"}}>
                        <Dropdown as={ButtonGroup} id="dropdown-basic-button" title="Favourites" style={{position:"absolute", color:"black"}}  >
                            <DropdownToggle ><BookmarkStarFill /></DropdownToggle>
                            <DropdownMenu>
                                <Dropdown.Item onClick={()=>storeImage(image.src,1)}>1</Dropdown.Item>
                                <Dropdown.Item onClick={()=>storeImage(image.src,2)}>2</Dropdown.Item>
                                <Dropdown.Item onClick={()=>storeImage(image.src,3)}>3</Dropdown.Item>
                                <Dropdown.Item onClick={()=>storeImage(image.src,4)}>4</Dropdown.Item>
                                <Dropdown.Item onClick={()=>storeImage(image.src,5)}>5</Dropdown.Item>
                                <Dropdown.Item onClick={()=>storeImage(image.src,6)}>6</Dropdown.Item>
                                </DropdownMenu>
                        </Dropdown>
                        </div>
                        <div key={image.src} className={styles.imageWrapper}>
                            <Image layout="fill" objectFit="cover" src={image} alt={image.src} ></Image>
                            
                        </div>
                        
                        </>
                    ))
                }
            </div>
        </div>
    
    );
    
}
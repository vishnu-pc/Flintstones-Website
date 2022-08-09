import styles from '../styles/Products.module.css';
import HeaderWithLogo from '../components/header-with-logo';
import Image from 'next/image';
//import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import first from '../components/products/images-slide';
import { getCookieParser } from 'next/dist/server/api-utils';


export default function CustomTiles() {
  //localStorage.getItem("favs1")
  
  const [selectedImage, setSelectedImage] = useState<any>();
  
 
      

      
      function uploadImage(e:any) {
      
      setSelectedImage(URL.createObjectURL(e.target.files[0]))

       }
         
      
    return (
        <>
        
        <br/>
        <br/>
        <br/>
        <br/>
           <div style={{height:"70vh"}}>
                     <div id="uploadPreview" style={{width:"50vh", height:"50vh", position:"absolute", left:"40%", top:"20%"}} >
                     <img
              src={selectedImage}
              style={{maxHeight:"100%", maxWidth:"100%"}}
              
            />
                     </div>
                     <input type="file" style={{position:"absolute", left:"30%", top:"75%"}}id="file"onChange={(e)=>uploadImage(e)}/>
                     </div>
            <br/>
        <br/>
        <br/>
        <br/>
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
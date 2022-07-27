import styles from '../styles/Products.module.css';
import HeaderWithLogo from '../components/header-with-logo';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import first from '../components/products/images-slide';
import { getCookieParser } from 'next/dist/server/api-utils';


export default function Moodboard() {
  //localStorage.getItem("favs1")
  
  const[path1,setpath1]=useState<string>()
  const[path2,setpath2]=useState<string>()
  const[path3,setpath3]=useState<string>()
  const[path4,setpath4]=useState<string>()
  const[path5,setpath5]=useState<string>()
  const[path6,setpath6]=useState<string>()
   
  const[div1,setdiv1]=useState<any>()
  const[div2,setdiv2]=useState<any>()
  const[div3,setdiv3]=useState<any>()
  const[div4,setdiv4]=useState<any>()
  const[div5,setdiv5]=useState<any>()
  const[div6,setdiv6]=useState<any>()

    useEffect(() => {
        let x= document.cookie.split(";")
        setdiv1(document.getElementById("div1"))
        setdiv2(document.getElementById("div2"))
        setdiv3(document.getElementById("div3"))
        setdiv4(document.getElementById("div4"))
        setdiv5(document.getElementById("div5"))
        setdiv6(document.getElementById("div6"))
        let y=x[0].split("=")
        setpath1(y[1])
        let z=x[1].split("=")
        setpath2(z[1])
        let a=x[2].split("=")
        setpath3(a[1])
        let b=x[3].split("=")
        setpath4(b[1])
        let c=x[4].split("=")
        setpath5(c[1])
        let d=x[5].split("=")
        setpath6(d[1])
      }, []);
 
      

      function dragElement(elmnt:any) {
          console.log(elmnt)
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        // if (document.getElementById(elmnt.id + "header")) {
        //   // if present, the header is where you move the DIV from:
        //   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        // } else {
          // otherwise, move the DIV from anywhere inside the DIV:
          if(elmnt){elmnt.onmousedown = dragMouseDown;}
        
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
      
        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
     
    return (
        <>
        
        <br/>
        <br/>
        <br/>
        <br/>
            <section className={styles.categoriesSection}>
                
               
                   <Row style={{height:"70vh"}}>
                       {/* <Col >
                      <img src={path1}width="100%"/>
                       </Col>
                       <Col >
                      <img src={path2}width="100%"/>
                       </Col>
                       <Col >
                      <img src={path3}width="100%"/>
                       </Col> */}

                       <div id="div1"style={{height:"40vh", width:"20vw", left:"40%",position:"absolute" }} onDrag={dragElement(div1)}>
                       <img src={path1}width="100%" style={{maxWidth:"100%", maxHeight:"100%",border:" "}}/>
                       </div>
                       <div  id="div2"style={{height:"30vh", width:"20vw", left:"20%",position:"absolute", borderRadius:"50%"}}onDrag={dragElement(div2)}>
                       <img src={path2}width="100%" style={{maxWidth:"100%", maxHeight:"100%", borderRadius:"50%",border:" "}}/>
                       </div>
                       <div  id="div3"style={{height:"20vh", width:"30vw", left:"20%",top:"50%", position:"absolute"}}onDrag={dragElement(div3)}>
                       <img src={path3}width="100%" style={{maxWidth:"100%", maxHeight:"100%",border:" "}}/>
                       </div>
                       <div  id="div4"style={{height:"20vh", width:"30vw", left:"50%",top:"50%", position:"absolute"}} onDrag={dragElement(div4)}>
                       <img src={path4}width="100%" style={{maxWidth:"100%", maxHeight:"100%",border:" "}}/>
                       </div>
                       <div  id="div5"style={{height:"30vh", width:"20vw", left:"40%",top:"60%",position:"absolute", }}onDrag={dragElement(div5)}>
                       <img src={path5}width="100%" style={{maxWidth:"100%", maxHeight:"100%", borderRadius:"50%",border:" "}}/>
                       </div>
                       <div  id="div6"style={{height:"40vh", width:"20vw", left:"60%",position:"absolute", borderRadius:"50%"}}onDrag={dragElement(div6)}>
                       <img src={path6}width="100%" style={{maxWidth:"100%", maxHeight:"100%",border:" "}}/>
                       </div>
                   </Row>
             
            </section>
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
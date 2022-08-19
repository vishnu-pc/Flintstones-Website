import styles from '../styles/Products.module.css';
import HeaderWithLogo from '../components/header-with-logo';
import Image from 'next/image';
//import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import first from '../components/products/images-slide';
import { getCookieParser } from 'next/dist/server/api-utils';
import Draggable from 'react-draggable';


export default function Moodboard() {
  //localStorage.getItem("favs1")
  
  const[path1,setpath1]=useState<any>()
  const[path2,setpath2]=useState<any>()
  const[path3,setpath3]=useState<any>()
  const[path4,setpath4]=useState<any>()
  const[path5,setpath5]=useState<any>()
  const[path6,setpath6]=useState<any>()
   

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
       
        let y=x[0]?x[0].split("="):"null"
        x[0]?setpath1(y[1]):null
        let z=x[1]?x[1].split("="):"null"
        x[1]?setpath2(z[1]):null
        let a=x[2]?x[2].split("="):"null"
        x[2]?setpath3(a[1]):null
        let b=x[3]?x[3].split("="):"null"
        x[3]?setpath4(b[1]):null
        let c=x[4]?x[4].split("="):"null"
        x[4]?setpath5(c[1]):null
        let d=x[5]?x[5].split("="):"null"
        x[5]?setpath6(d[1]):null
    
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
        
      
        function dragMouseDown(e:any) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e:any) {
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
                
               
                  { path1?<div style={{height:"70vh"}}>
                      
                      <Draggable>
                       <div id="div1"style={{height:"40vh", width:"20vw", left:"40%",position:"absolute" }}  >
                      <img src={path1}width="100%" style={{maxWidth:"100%", maxHeight:"100%",border:" "}}/>
                       </div>
                       </Draggable>
                       <Draggable>
                       <div  id="div2"style={{height:"30vh", width:"20vw", left:"20%",position:"absolute", borderRadius:"50%"}}>
                       <img src={path2}width="100%" style={{maxWidth:"100%", maxHeight:"100%", borderRadius:"50%",border:" "}}/>
                       </div>
                       </Draggable>
                       <Draggable>
                       <div  id="div3"style={{height:"20vh", width:"30vw", left:"20%",top:"50%", position:"absolute"}}>
                       <img src={path3}width="100%" style={{maxWidth:"100%", maxHeight:"100%",border:" "}}/>
                       </div>
                       </Draggable>
                       <Draggable>
                       <div  id="div4"style={{height:"20vh", width:"30vw", left:"50%",top:"50%", position:"absolute"}} >
                       <img src={path4}width="100%" style={{maxWidth:"100%", maxHeight:"100%",border:" "}}/>
                       </div>
                       </Draggable>
                       <Draggable>
                       <div  id="div5"style={{height:"30vh", width:"20vw", left:"40%",top:"60%",position:"absolute", }}>
                       <img src={path5}width="100%" style={{maxWidth:"100%", maxHeight:"100%", borderRadius:"50%",border:" "}}/>
                       </div>
                       </Draggable>
                       <Draggable>
                       <div  id="div6"style={{height:"40vh", width:"20vw", left:"60%",position:"absolute", borderRadius:"50%"}}>
                       <img src={path6}width="100%" style={{maxWidth:"100%", maxHeight:"100%",border:" "}}/>
                       </div>
                       </Draggable>
                   </div>:
                  <div style={{height:"40vh", position:"relative"}}>
                   <h1 style={{position:"absolute", top:"30%", left:"13%"}}>Please select Products from the Product page</h1>
                   </div>
}
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
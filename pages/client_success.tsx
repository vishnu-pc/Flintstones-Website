import styles from '../styles/Client.module.css';
//import {Carousel} from 'react-bootstrap';
import cimage1 from '../public/images/Logo/Corporates/Wipro-Logo.png';
import cimage2 from '../public/images/Logo/Corporates/Google-Logo.png';
import cimage3 from '../public/images/Logo/Corporates/Infosys-Logo.png';
import cimage4 from '../public/images/Logo/Corporates/Dell-Logo.png';
import cimage5 from '../public/images/Logo/Corporates/EY-Logo.png';
import cimage6 from '../public/images/Logo/Corporates/Pwc-Logo.png';
import cimage7 from '../public/images/Logo/Corporates/Accenture-logo.png';
import cimage8 from '../public/images/Logo/Corporates/gokaldasexports-logo.png';
import cimage9 from '../public/images/Logo/Corporates/Targray-logo.png';
import cimage10 from '../public/images/Logo/Corporates/IBM-logo.png';
import cimage11 from '../public/images/Logo/Corporates/Microsoft-logo.png';
import cimage12 from '../public/images/Logo/Corporates/Apple-logo.png';
import cimage13 from '../public/images/Logo/Corporates/CRED-logo.png';
import cimage14 from '../public/images/Logo/Corporates/Bosch-logo.png';
import cimage15 from '../public/images/Logo/Corporates/Intel-logo.png';
import cimage16 from '../public/images/Logo/Corporates/Societe-Generale-logo.png';
import cimage17 from '../public/images/Logo/Corporates/Marvell-logo.png';
import cimage18 from '../public/images/Logo/Corporates/Stibo-Systems-logo.png';
import cimage19 from '../public/images/Logo/Corporates/Apptio-logo.png';
import cimage20 from '../public/images/Logo/Corporates/Linkedin-Logo.png';
import cimage21 from '../public/images/Logo/Corporates/Koch-Industries-logo.png';
import cimage22 from '../public/images/Logo/Corporates/Payal-logo.png';
import cimage23 from '../public/images/Logo/Corporates/Verizon-logo.png';
import cimage24 from '../public/images/Logo/Corporates/Mckinsey-logo.png';
import cimage25 from '../public/images/Logo/Corporates/Qualcomm-logo.png';
import cimage26 from '../public/images/Logo/Corporates/Sutherland-logo.png';
import cimage27 from '../public/images/Logo/Corporates/Shell-logo.png';
import cimage28 from '../public/images/Logo/Corporates/Comcast-India-Engineering-logo.png';
import cimage29 from '../public/images/Logo/Corporates/DE-Shaw-logo.png';
import cimage30 from '../public/images/Logo/Corporates/Suntec-Business-logo.png';
import cimage31 from '../public/images/Logo/Corporates/DSM-Shared-Services-logo.png';
import cimage32 from '../public/images/Logo/Corporates/Warner-Brothers-logo.png';
import cimage33 from '../public/images/Logo/Corporates/TE-Connectivity-logo.png';
import cimage34 from '../public/images/Logo/Corporates/Wells-Fargo-logo.png';
import cimage35 from '../public/images/Logo/Corporates/Xiaomi-logo.png';
import cimage36 from '../public/images/Logo/Corporates/Ogilvy-logo.png';
import cimage37 from '../public/images/Logo/Corporates/Amazon-logo.png';
import cimage38 from '../public/images/Logo/Corporates/Akamai-logo.png';
import cimage39 from '../public/images/Logo/Corporates/Micron-electricals-Logo.png';
import cimage40 from '../public/images/Logo/Corporates/Synechron-Logo.png';
import cimage41 from '../public/images/Logo/Corporates/Standard-Chartered-logo.png';
import cimage42 from '../public/images/Logo/Corporates/Manhattan-logo.png';
import cimage43 from '../public/images/Logo/Corporates/Vikas-Telecom-logo.png';


import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
            <section className={styles.section} style={{ height: "auto", paddingTop: "1%" }}>
            <div className='bottom-setction-landing'>
             <div className="row align-items-lg-center mt-4">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12 hiro-text pl-md-5 pt-5 pt-md-0 text-center">
        <h1 className="hiro-title font-uxl font-xxxl-onMobile font-weight-medium mb-4 font-weight-bold te">
          Our results are second to none!
        </h1>
        <p className="font-weight-light font-regular-onMobile">
        Many of India&apos;s most respected hyper growth startups and unicorn brands trust us to grow their digital businesses.

        </p>
      </div>
    </div>

    <div className="container mb-2" style={{ background: "#fff", paddingTop: "1%",borderRadius: "20px" }}>
      <div className="about-slide-heading-section-op2">
        <h1 style={{ color: "#000", padding: "1%",textAlign: "center",fontWeight:"bold" }}>Corporates</h1>
      </div>
      <div>
        <div className="container">
        <div className="row" style={{ paddingBottom: "5%" }}>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Wipro-Logo.png' alt="Partner 1" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Google-Logo.png' alt="Partner 2" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Infosys-Logo.png' alt="Partner 3" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Dell-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/EY-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Pwc-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Accenture-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/gokaldasexports-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Targray-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/IBM-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Microsoft-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Apple-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/CRED-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Bosch-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Intel-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Societe-Generale-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Marvell-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Stibo-Systems-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Apptio-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Linkedin-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Koch-Industries-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Payal-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Verizon-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Mckinsey-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Qualcomm-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Sutherland-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Shell-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Comcast-India-Engineering-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/DE-Shaw-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Suntec-Business-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/DSM-Shared-Services-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Warner-Brothers-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/TE-Connectivity-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                       <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Wells-Fargo-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Xiaomi-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Ogilvy-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Amazon-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Akamai-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Micron-electricals-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Synechron-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Standard-Chartered-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Manhattan-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Corporates/Vikas-Telecom-logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                    </div>
        </div>
      </div>
      </div>

    <div className="container mb-2" style={{ background: "#fff", paddingTop: "1%",borderRadius: "20px" }} >
      <div className="about-slide-heading-section-op2">
        <h1 style={{ color: "#000", padding: "1%",textAlign: "center",fontWeight:"bold" }}>Developers</h1>
      </div>
      <div>
        <div className="container">
        <div className="row" style={{ paddingBottom: "5%" }}>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Developers/JLL-Logo.png' alt="Partner 1" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Developers/Nesta-Logo.png' alt="Partner 2" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Developers/Prestige-Group-Logo.png' alt="Partner 3" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Developers/Salarpuria-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Developers/Sumadhura-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Developers/Zonasha-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                    </div>
        </div>
      </div>
      <br />
    </div>
    <div className="container mb-2" style={{ background: "#fff", paddingTop: "1%",borderRadius: "20px" }}>
      <div className="about-slide-heading-section-op2">
        <h1 style={{ color: "#000", padding: "1%",textAlign: "center",fontWeight:"bold" }}>Co Working Spaces</h1>
      </div>
      <div>
        <div className="container">
        <div className="row" style={{ paddingBottom: "5%" }}>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Co Working Spaces/Awfis-Space-Logo.png' alt="Partner 1" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Co Working Spaces/BizzHub-Logo.png' alt="Partner 2" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Co Working Spaces/Indiqube-Logo.png' alt="Partner 3" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Co Working Spaces/The-Executive-Centre-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Co Working Spaces/Wework-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                    </div>
        </div>
      </div>
      <br />
    </div>

    <div className="container mb-2" style={{ background: "#fff", paddingTop: "1%",borderRadius: "20px" }}>
      <div className="about-slide-heading-section-op2">
        <h1 style={{ color: "#000", padding: "1%",textAlign: "center",fontWeight:"bold" }}>Pharma &amp; Hospitals
</h1>
      </div>
      <div>
        <div className="container">
        <div className="row" style={{ paddingBottom: "5%" }}>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Pharma & Hospitals/Alcon-Logo.png' alt="Partner 1" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Pharma & Hospitals/Allergan-Logo.png' alt="Partner 2" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Pharma & Hospitals/Aster-Logo.png' alt="Partner 3" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Pharma & Hospitals/Athenahealth-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Pharma & Hospitals/Eli-Lilly-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Pharma & Hospitals/Ferring-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Pharma & Hospitals/Novo-Nordisk-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                    </div>
        </div>
      </div>
      <br />
    </div>

    <div className="container mb-2" style={{ background: "#fff", paddingTop: "1%",borderRadius: "20px" }}>
      <div className="about-slide-heading-section-op2">
        <h1 style={{ color: "#000", padding: "1%",textAlign: "center",fontWeight:"bold" }}>Hospitality</h1>
      </div>
      <div>
        <div className="container">
        <div className="row" style={{ paddingBottom: "5%" }}>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Hospitality/Brahma-Brews-Logo.png' alt="Partner 1" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Hospitality/Brooks-&-Bonds-Brewery-Logo.png' alt="Partner 2" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Hospitality/Femento-Logo.png' alt="Partner 3" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Hospitality/Indian-Bierre-House-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Hospitality/Kartik-Mitahi-Shop-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Hospitality/lg.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Hospitality/Meghana-Foods-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div><div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Hospitality/Street-1522-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div><div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Hospitality/Taj-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div><div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Hospitality/Tandoori-Taal-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div><div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Hospitality/The-Kind-Roastery-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Hospitality/White-Garden-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                    </div>
        </div>
      </div>
      <br />
    </div>

    <div className="container mb-2" style={{ background: "#fff", paddingTop: "1%",borderRadius: "20px" }}>
      <div className="about-slide-heading-section-op2">
        <h1 style={{ color: "#000", padding: "1%",textAlign: "center",fontWeight:"bold" }}>Retail</h1>
      </div>
      <div>
        <div className="container">
        <div className="row" style={{ paddingBottom: "5%" }}>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Retail/Bhima-Logo.png' alt="Partner 1" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Retail/Fazal-Logo.png' alt="Partner 2" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Retail/Lanzon-Logo.png' alt="Partner 3" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Retail/Rockstar-Logo.png' alt="Partner 4" height={100}/>
                            </div>
                        </div>
                        
                    </div>
        </div>
      </div>
      <br />
    </div>

    <div className="container mb-2" style={{ background: "#fff", paddingTop: "1%",borderRadius: "20px" }}>
      <div className="about-slide-heading-section-op2">
        <h1 style={{ color: "#000", padding: "1%",textAlign: "center",fontWeight:"bold" }}>Education</h1>
      </div>
      <div>
        <div className="container">
        <div className="row" style={{ paddingBottom: "5%" }}>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Education/Headstart-Academy-Logo.png' alt="Partner 1" height={100}/>
                            </div>
                        </div>
                        <div className='col-6 col-md-3 trusted-partner-col'>
                            <div className='trusted-partner-logo' style={{  paddingTop: "10%",textAlignLast: "center"}}>
                                <img src= 'images/Logo/Education/Max-Learning-Ventures-Logo.png' alt="Partner 2" height={100}/>
                            </div>
                        </div>
                    </div>
        </div>
      </div>
      <br />
    </div>


    </div>
            </section>
        </>
    );
}
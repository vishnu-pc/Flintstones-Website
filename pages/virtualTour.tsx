import type {NextPage} from 'next';
import styles from '../styles/About.module.css';
import HeaderWithLogo from '../components/header-with-logo';

const VirtualTour: NextPage = () => {
    return (
        <div style={{height:"100vh"}}>
        <iframe style={{height:"100%", width:"100%"}} title="Flinstones model" frameBorder="0" allowFullScreen  allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="auto" height="auto" src="https://sketchfab.com/models/ae54cd65533549ca83c60c9fd4d00929/embed?navigation=fps&camera=0&autostart=1">
            </iframe>
            </div>
    );
};

export default VirtualTour;

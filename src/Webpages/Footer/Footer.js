import Logo from '../logo.png';
import './Footer.css';
import Inlogo from './inlogo.png';
import Instalogo from './instalogo.png';

export default function Footer() {
    return (
        <div className='footer'>
            <div>
            <img src={Logo} alt="Logo" className='top-image footerlogo'/>
            <p>Privacy Policy © 2022 Cloud Recruitment. All rights reserved.</p>
            </div>
            <div className='socialmedia'>
                <img src={Inlogo} alt="Logo" className='inlogo'/>
                <img src={Instalogo} alt="Logo" className='instalogo'/>
            </div>
        </div>
    )
}
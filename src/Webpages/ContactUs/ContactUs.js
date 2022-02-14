import { Link } from "react-router-dom";
import './Contact.css';
import '../Webpages.css';
import 'tachyons';
import { Helmet } from "react-helmet";
import Logo from '../logo.png';
import Logo3 from './logo3.png';


export default function ContactUs() {
    return (
      <div  className="all">
       <Helmet>
          <body style={`background-color: #333`} />
        </Helmet>
        <div className='top pa3'>
        <nav className='links'>
            <Link to='/'><img src={Logo} alt="Logo" className='top-image'/></Link>
            <p className='fr selected-link'>Contact Us</p>
            <Link to="/services" className='fr paddingtop'>Services</Link>
            <Link to="/" className='fr paddingtop'>Home</Link>     
        </nav>
        </div>
        <div className='container'>
        <div  className='why3'>
            <h2 className='pa3'>Contact Us</h2>
            <div className="contacttext">
              <p className='firstp'>For more information,</p>
              <p className='secondp'>or to find out more about working with us,</p>
              <p className='thirdp'>please do not hesitate to get in contact using the form.</p>
            </div>
        </div>
        <div className='who3'>
            <img src={Logo3} alt="Logo3" className='top-image maillogo'/>
            <p className='number pa3'>09876543298</p>
            <p className='email pa3'>example@gmail.com</p>
        </div>
        </div>
      </div>
    ) 
  }
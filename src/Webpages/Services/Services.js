import { Link } from "react-router-dom";
import '../Webpages.css';
import 'tachyons';
import './Services.css';
import Logo from '../logo.png';
import ArrowDown from './arrowdown.png';
import { fadeInDown } from 'react-animations';
import { StyleRoot } from 'radium/lib';
import Radium from 'radium';

const styles = {
    fadeInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
      }
}

export default function Services() {
    return (
      <div>
      <div className='top pa3'>
          <nav className='links'>
          <Link to='/'><img src={Logo} alt="Logo" className='top-image'/></Link>
              <Link to="/contactus" className='fr paddingtop'>Contact Us</Link>
              <p className='fr selected-link'>Services</p>     
              <Link to="/" className='fr paddingtop'>Home</Link>
          </nav>
          <h2 className="wwo">What We Offer</h2>
          <StyleRoot>
          <img src={ArrowDown} alt="ArrowDown" className="arrow" style={styles.fadeInDown}/>
          </StyleRoot>
      </div>
      <div className='container'>
      <div  className='why1'>
          <p className='wwdtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='who1'>
          <p className='wwdtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      </div>
      <div className='container2'>
      <div  className='why2'>
          <p className='wwdtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      </div>
  </div>
    )
  }
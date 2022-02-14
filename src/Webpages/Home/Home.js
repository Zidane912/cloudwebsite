import Logo from '../logo.png';
import './Home.css';
import '../Webpages.css';
import 'tachyons';
import { Link } from "react-router-dom";
import { fadeInRight, fadeInLeft } from 'react-animations';
import { StyleRoot } from 'radium/lib';
import Radium from 'radium';
 
const styles = {
    fadeInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
  },
  fadeInL1: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  },
  fadeInL2: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  },
  fadeInL3: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  }
}


export default function Home() {
    return (
    <div>
        <div className='top pa3'>
            <nav className='links'>
            <Link to='/'><img src={Logo} alt="Logo" className='top-image'/></Link>
                <Link to="/contactus" className='fr paddingtop'>Contact Us</Link>
                <Link to="/services" className='fr paddingtop'>Services</Link>
                <p className='fr selected-link'>Home</p>     
            </nav>
        <div className='hometop'>     
            <div className='titlemain'>
            <StyleRoot>
            <p style={styles.fadeInL1}>Hi We Are Cloud Recruitment</p>
            <p style={styles.fadeInL2}>We Build Teams</p>
            <p style={styles.fadeInL3}>We Unlock Potential</p>
            </StyleRoot>
            </div>
            <div>
            <StyleRoot>
            <img src={Logo} alt="Logo" className='logo' style={styles.fadeInRight}/>
            </StyleRoot>
        </div>
        </div>
        
        </div>
        <div className='what pa3'>
            <h2>What We Do</h2>
            <p className='wwdtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='container'>
        <div  className='why'>
            <h2 className='pa3'>Why We Do It</h2>
            <p className='wwdtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='who'>
            <h2 className='pa3'>Who We Do It For And How</h2>
            <p className='wwdtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
    </div>
    )
}
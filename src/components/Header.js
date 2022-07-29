// State
import React, {useState} from 'react'
// Css
import '../scss/style.css';
// Image
import logo from '../images/logo.svg' // Tell webpack this JS file uses this image

const Header = () => {
  const [isActive, setActive] = useState("false");

  const hamburgerToggle = () => {
    setActive(!isActive);
  };

  return (
    <header className='yot-header yot-padding-a-24 yot-z-index-2'>
      <nav className='yot-flex yot-flex-ai-c-jc-sb'>
        <img src={logo} alt="Logo" style={{width: '130px', height:'30px'}}/>

        <div className='yot-hide-for-mobile'>
          <span>About</span>
          <span className='yot-margin-lr-24'>Services</span>
          <span>Projects</span>
          <button className='yot-btn yot-margin-l-24'>
            <b>CONTACTS</b>
          </button>
        </div>

        <div className={`yot-hamburger yot-hide-for-desktop ${!isActive ? "yot-hamburger-open" : ''}`} onClick={hamburgerToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`yot-overlay-header-1 yot-arrow-top ${!isActive ? "yot-overlay-header-2" : ''}`}>
        <span>About</span>
        <span className='yot-margin-tb-24'>Services</span>
        <span>Projects</span>
        <button className='yot-btn yot-margin-t-24'>
          <b>CONTACTS</b>
        </button>
      </div>
    </header>
  )
}

export default Header
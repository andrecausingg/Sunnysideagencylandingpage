import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagram, faTwitter, faPinterest} from '@fortawesome/free-brands-svg-icons'

// Css
import '../scss/style.css';

// Image
import logo from '../images/logo.svg' // Tell webpack this JS file uses this image

const Footer = () => {

  return (
    <footer className='yot-bg-moderate-cyan '>
        <div className='yot-container yot-flex yot-flex-fd-c-ai-c-jc-c yot-content-space-padding-tb-80'>
            <div className='yot-text-center yot-margin-b-48'>
                <img src={logo} alt='Logo' style={{width: '173px', height:'38px'}}/>
            </div>
            <div>
                <span className='hover-links'>About</span>
                <span className='yot-margin-lr-48 hover-links'>Services</span>
                <span className='hover-links'>Project</span>
            </div>
            <div className='yot-margin-t-48'>
              <FontAwesomeIcon 
                icon={faFacebookSquare} 
                className='hoverIcon'
              />

              <FontAwesomeIcon 
                  icon={faInstagram} 
                  className='yot-margin-lr-24 hoverIcon' 
              />

              <FontAwesomeIcon 
                  icon={faTwitter} 
                  className='yot-margin-r-24 hoverIcon' 
              />

              <FontAwesomeIcon 
                  icon={faPinterest} 
                  className='hoverIcon'
              />
            </div>
        </div>
    </footer>
  )
}

export default Footer
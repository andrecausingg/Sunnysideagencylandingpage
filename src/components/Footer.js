import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagram, faTwitter, faPinterest} from '@fortawesome/free-brands-svg-icons'

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
                <span>About</span>
                <span className='yot-margin-lr-48'>Services</span>
                <span>Project</span>
            </div>
            <div className='yot-margin-t-48 '>
              <FontAwesomeIcon 
                  icon={faFacebookSquare} 
                  style={{fontSize:'36px', color:'hsl(167, 40%, 24%)'}}
              />

              <FontAwesomeIcon 
                  icon={faInstagram} className='yot-margin-lr-24' 
                  style={{fontSize:'36px', color:'hsl(167, 40%, 24%)'}}
              />

              <FontAwesomeIcon 
                  icon={faTwitter} className='yot-margin-r-24' 
                  style={{fontSize:'36px', color:'hsl(167, 40%, 24%)'}}
              />

              <FontAwesomeIcon 
                  icon={faPinterest} 
                  style={{fontSize:'36px', color:'hsl(167, 40%, 24%)'}}
              />
            </div>
        </div>
    </footer>
  )
}

export default Footer
// Css
import '../scss/style.css';

// Image
import arrow from '../images/icon-arrow-down.svg'

const Hero = () => {
  return (
    <section className='yot-hero'>
      <div className='yot-hero-title yot-content-space-margin-t-200 yot-container'>
        <h1 className='yot-resize-font-80 yot-margin-b-24'>WE ARE CREATIVES</h1>
        <img src={arrow} alt="Logo" style={{width: '40px', height:'117px'}}/>
      </div>
    </section>
  )
}

export default Hero
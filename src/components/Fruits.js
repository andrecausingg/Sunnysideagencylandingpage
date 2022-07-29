import React from 'react'

import egg from '../images/mobile/image-transform.jpg' // Tell webpack this JS file uses this image
import cup from '../images/mobile/image-stand-out.jpg' // Tell webpack this JS file uses this image
import cherry from '../images/mobile/image-graphic-design.jpg' // Tell webpack this JS file uses this image
import orange from '../images/mobile/image-photography.jpg' // Tell webpack this JS file uses this image

const Fruits = () => {
  return (
    <>
        {/* Egg */}
        <section className='yot-row yot-flex-fd-rr-ai-c'>
            <div className='yot-col-50-l egg-container'>
                <img src={egg} alt="Egg"/>
            </div>

            <div className='yot-col-50-l yot-flex yot-flex-fd-c-ai-c-jc-c yot-text-center yot-padding-lr-24' style={{height:"436px"}}>
                <h1 className='title-font-fraunces'>
                    Transform your brand
                </h1>
                <p className='yot-margin-tb-24'>
                    We are a full-service creative agency specializing in helping brands grow fast. 
                    Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <h4 className='title-font-fraunces'>
                    LEARN MORE
                </h4>
            </div>
        </section>
    
        {/* Cup */}
        <section className='yot-row yot-flex-ai-c'>
            <div className='yot-col-50-l cup-container'>
                <img src={cup} alt="Cup"/>
            </div>

            <div className='yot-col-50-l yot-flex yot-flex-fd-c-ai-c-jc-c yot-text-center yot-padding-lr-24' style={{height:"436px"}}>
                <h1 className='title-font-fraunces'>
                    Stand out to the right audience
                </h1>
                <p className='yot-margin-tb-24'>
                    Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
                </p>
                <h4 className='title-font-fraunces'>
                    LEARN MORE
                </h4>
            </div>
        </section>

        {/* Cherry | Orange */}
        <section className='yot-row yot-flex-ai-c'>
            <div className='yot-col-50-l cherry-container'>
                <img src={cherry} alt="Cherry"/>
                <div className='yot-text-center cherry-content yot-z-index-1'>
                    <h1 className='title-font-fraunces'>
                        Graphic design
                    </h1>
                    <p className='yot-margin-a-24'>
                        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                    </p>
                </div>
            </div>

            <div className='yot-col-50-l orange-container'>
                <img src={orange} alt="Orange"/>
                <div className='yot-text-center orange-content yot-z-index-1'>
                    <h1 className='title-font-fraunces'>
                        Photography
                    </h1>
                    <p className='yot-margin-a-24'>
                        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </section>
    </>

  )
}

export default Fruits
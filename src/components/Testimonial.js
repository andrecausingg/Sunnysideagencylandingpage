// Css
import '../scss/style.css';


// Image
import emilyR from '../images/image-emily.jpg'
import thomasS from '../images/image-thomas.jpg'
import jennieF from '../images/image-jennie.jpg'


const Testimonial = () => {
  return (
    <section className='yot-content-space-margin-t-120  yot-container'>
        <div className='yot-text-center'>
          <h4 style={{color:'grey'}}>CLIENT TESTIMONIAL</h4>
        </div>

        <div className='yot-row'>
          {/* Emily R. */}
          <div className='yot-text-center'>
            <div className='yot-flex yot-flex-fd-c-ai-c yot-padding-lr-48'>
                <div className='yot-img-circle yot-margin-tb-48'>
                  <img src={emilyR} alt='Emily R.' />
                </div>
                <p className='yot-margin-b-48'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <h4>Emily R.</h4>
                <span style={{color:'grey'}}>Marketing Director</span>
            </div>
          </div>

          {/* Thomas */}
          <div className='yot-text-center'>
            <div className='yot-flex yot-flex-fd-c-ai-c yot-padding-lr-48'>
                <div className='yot-img-circle yot-margin-tb-48'>
                  <img src={thomasS} alt='Thomas S.' />
                </div>
                <p className='yot-margin-b-48'>  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                <h4>Thomas S.</h4>
                <span style={{color:'grey'}}>Chief Operating Officer</span>
            </div>
          </div>

          {/* Jennie F. */}
          <div className='yot-text-center'>
            <div className='yot-flex yot-flex-fd-c-ai-c yot-padding-lr-48'>
                <div className='yot-img-circle yot-margin-tb-48'>
                  <img src={jennieF} alt='Jennie F.' />
                </div>
                <p className='yot-margin-b-48'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <h4>Jennie F.</h4>
                <span style={{color:'grey'}}>Business Owner</span>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Testimonial
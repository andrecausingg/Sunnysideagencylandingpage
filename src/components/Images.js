// Css
import '../scss/style.css';


// Image
import bottle from '../images/mobile/image-gallery-milkbottles.jpg'
import plate from '../images/mobile/image-gallery-orange.jpg'
import cone from '../images/mobile/image-gallery-cone.jpg'
import cubes from '../images/mobile/image-gallery-sugar-cubes.jpg'

const Images = () => {
  return (
    <section className='yot-content-space-margin-t-120'>
        <div className='yot-row'>
            <div className='yot-flex'>
                <div className='yot-w-50'>
                    <img src={bottle} alt='gallery-milkbottles'/>
                </div>
                <div className='yot-w-50'>
                    <img src={plate} alt='gallery-orange'/>
                </div>
            </div>

            <div className='yot-flex'>
                <div className='yot-w-50'>
                    <img src={cone} alt='gallery-cone.jpg'/>
                </div>
                <div className='yot-w-50'>
                    <img src={cubes} alt='gallery-sugar-cubes.jpg'/>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Images
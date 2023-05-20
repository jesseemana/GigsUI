import './Slide.scss'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Slide = ({children, slidesToShow, slidesToScroll}) => {
  const settings = {
    arrows: true,
    infinite: true,
    draggable: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    className: 'slides'
  }

  return (
    <div className="slide">
        <div className="container">
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    </div>
  )
}

export default Slide    
import React from 'react'
import Slider from "react-slick";

const ClientBand = ({rtl = false}) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 4,
    cssEase: "linear",
    rtl: rtl,
    slidesToScroll: 1,
};
  return (
    <div className="clientband">
      <Slider {...settings}>
        <div className="clientband-client">
          <div className="clientband-client-box">
            &nbsp;
          </div>
        </div>
        <div className="clientband-client">
          <div className="clientband-client-box">
            &nbsp;
          </div>
        </div>
        <div className="clientband-client">
          <div className="clientband-client-box">
            &nbsp;
          </div>
        </div>
        <div className="clientband-client">
          <div className="clientband-client-box">
            &nbsp;
          </div>
        </div>
        <div className="clientband-client">
          <div className="clientband-client-box">
            &nbsp;
          </div>
        </div>
        <div className="clientband-client">
          <div className="clientband-client-box">
            &nbsp;
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default ClientBand
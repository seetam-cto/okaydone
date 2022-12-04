import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import arrow from "../../assets/images/arrow.svg"
import slide1 from "../../assets/images/slider1.jpg"
import slide2 from "../../assets/images/slider2.jpg"
import slide3 from "../../assets/images/slider3.jpg"

const slides = [
    {
        bg: slide1,
        link: '',
        title: '',
        client: ''
    },
    {
        bg: slide2,
        link: '',
        title: '',
        client: ''
    },
    {
        bg: slide3,
        link: '',
        title: '',
        client: ''
    }
]

const HomeSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Image src={arrow.src} width={80} height={80} className="homeslider-arrow-prev"/>,
        nextArrow: <Image src={arrow.src} width={80} height={80} className="homeslider-arrow-next"/>,
        className: 'homeslider-slider'
    };
    return (
        <div className="homeslider">
            <Slider {...settings}>
                {slides.map((slide, i) => (
                    <div className="homeslider-slide" key={i}>
                        <div className="homeslider-slide-background">
                            <Image style={{objectFit: 'cover'}} src={slide.bg.src} width={500} height={600} />
                        </div>
                        <div className="homeslider-slide-content">
                            <h2>{slide.title}</h2>
                            <p>{slide.client}</p>
                            <a href={slide.link} target="_blank" className="homeslider-slide-content-link">
                                LEARN MORE
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default HomeSlider
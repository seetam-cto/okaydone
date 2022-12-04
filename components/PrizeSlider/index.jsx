import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import arrow from "../../assets/images/arrow.svg"
import slide1 from "../../assets/images/ach1.png"
import slide2 from "../../assets/images/ach2.png"
import Link from 'next/link';

const slides = [
    {
        bg: slide1.src,
        link: '',
        title: 'ACHIEVEMENT TITLE1',
        subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
    },
    {
        bg: slide2.src,
        link: '',
        title: 'ACHIEVEMENT TITLE2',
        subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
    },
    {
        bg: slide1.src,
        link: '',
        title: 'ACHIEVEMENT TITLE1',
        subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
    },
    {
        bg: slide2.src,
        link: '',
        title: 'ACHIEVEMENT TITLE2',
        subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
    },
    {
        bg: slide1.src,
        link: '',
        title: 'ACHIEVEMENT TITLE1',
        subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
    },
    {
        bg: slide2.src,
        link: '',
        title: 'ACHIEVEMENT TITLE2',
        subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
    }
]

const PrizeSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Image src={arrow.src} width={80} height={80} className="prizeslider-arrow-prev"/>,
        nextArrow: <Image src={arrow.src} width={80} height={80} className="prizeslider-arrow-next"/>,
        
    };
    return (
        <div className="prizeslider">
            <Slider {...settings}>
                {slides.map((slide, i) => (
                    <div className="prizeslider-slide" key={i}>
                        <Image src={slide.bg} width={600} height={500} className='prizeslider-slide-bg' />
                        <div className="prizeslider-slide-content">
                            <h3>{slide.title}</h3>
                            <p>{slide.subtitle}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default PrizeSlider
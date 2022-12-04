import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import arrow from "../../assets/images/arrow.svg"
import slide1 from "../../assets/images/media1.png"
import slide2 from "../../assets/images/media2.png"
import slide3 from "../../assets/images/media3.png"
import Link from 'next/link';

const slides = [
    {
        bg: slide1.src,
        link: '',
        title: '',
        client: ''
    },
    {
        bg: slide2.src,
        link: '',
        title: '',
        client: ''
    },
    {
        bg: slide3.src,
        link: '',
        title: '',
        client: ''
    },
    {
        bg: slide1.src,
        link: '',
        title: '',
        client: ''
    },
    {
        bg: slide2.src,
        link: '',
        title: '',
        client: ''
    },
    {
        bg: slide3.src,
        link: '',
        title: '',
        client: ''
    }
]

const HomeMedia = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <Image src={arrow.src} width={80} height={80} className="homemedia-arrow-prev"/>,
        nextArrow: <Image src={arrow.src} width={80} height={80} className="homemedia-arrow-next"/>,
        
    };
    return (
        <div className="homemedia">
            <Slider {...settings}>
                {slides.map((slide, i) => (
                    <div className="homemedia-slide" key={i}>
                        <Image src={slide.bg} width={600} height={480} className='homemedia-slide-bg' />
                        <Link href="/">LEARN MORE</Link>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default HomeMedia
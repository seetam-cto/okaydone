import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import arrow from "../../assets/images/arrow.svg"
import services from "../../assets/images/services.png"
import { motion } from 'framer-motion';

const HomeServices = () => {
    const [curSlide, setCurSlide] = useState(0)
    const serSlider = useRef()
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        ref: serSlider,
        beforeChange: (current, next) => setCurSlide(next),
        prevArrow: <Image src={arrow.src} width={80} height={80} className="home-services-arrow-prev"/>,
        nextArrow: <Image src={arrow.src} width={80} height={80} className="home-services-arrow-next"/>,
        className: 'homeslider-slider'
    };
  return (
    <div className="home-services-slider">
        <motion.div
        key="home-services-texts"
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        exit={{ opacity: 0}}
        className="home-services-texts">
            <h3 onClick={() => serSlider.current.slickGoTo(0)} className={`line1 ${curSlide === 0 && 'active'}`} data-text={(" VISUAL & AUDIO ").repeat(5)}>VISUAL & AUDIO</h3>
            <h3 onClick={() => serSlider.current.slickGoTo(1)} className={`line2 ${curSlide === 1 && 'active'}`} data-text={(" EXPERIENCE DESIGN & WEB DEVELOPMENT ").repeat(2)}>EXPERIENCE DESIGN & WEB DEVELOPMENT</h3>
            <h3 onClick={() => serSlider.current.slickGoTo(2)} className={`line3 ${curSlide === 2 && 'active'}`} data-text={(" CONTENT STRATEGY & BRAND STRATEGY ").repeat(2)}>CONTENT STRATEGY & BRAND STRATEGY</h3>
            <h3 onClick={() => serSlider.current.slickGoTo(3)} className={`line4 ${curSlide === 3 && 'active'}`} data-text={(" INFLUENCERS & MICRO-INFLUENCERS ").repeat(3)}>INFLUENCERS & MICRO-INFLUENCERS</h3>
        </motion.div>
        <motion.div
        key="home-services-slider-container"
        initial={{x: '-100%', opacity: 0}}
        whileInView={{x: '0%', opacity: 1}}
        exit={{x: '-100%', opacity: 0}}
        transition={{delay: 0.5}}
        className="home-services-slider-container">
            <Slider {...settings}>
                <div className='home-services-slider-container-slide'>
                    <Image src={services.src} width={500} height={550} className="service-img" />
                    <a href="#" className='service-link'>LEARN MORE</a>
                </div>
                <div className='home-services-slider-container-slide'>
                    <Image src={services.src} width={500} height={550} className="service-img" />
                    <a href="#" className='service-link'>LEARN MORE</a>
                </div>
                <div className='home-services-slider-container-slide'>
                    <Image src={services.src} width={500} height={550} className="service-img" />
                    <a href="#" className='service-link'>LEARN MORE</a>
                </div>
                <div className='home-services-slider-container-slide'>
                    <Image src={services.src} width={500} height={550} className="service-img" />
                    <a href="#" className='service-link'>LEARN MORE</a>
                </div>
            </Slider>
        </motion.div>
    </div>
  )
}

export default HomeServices
import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import arrow from "../../assets/images/arrow.svg"
import user from "../../assets/images/user.svg"
import commentPointer from "../../assets/images/comment-pointer.svg"

const slides = [
    {
        user: {
            pic: user.src,
            name: "KIRAN MENDONCA",
            work: "ABBEY ROADS PRODUCTIONS",
        },
        comment: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.”“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
    },
    {
        user: {
            pic: user.src,
            name: "KIRAN MENDONCA",
            work: "ABBEY ROADS PRODUCTIONS",
        },
        comment: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.”“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
    },
    {
        user: {
            pic: user.src,
            name: "KIRAN MENDONCA",
            work: "ABBEY ROADS PRODUCTIONS",
        },
        comment: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.”“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.",
    },
]

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Image src={arrow.src} width={80} height={80} className="homeslider-arrow-prev"/>,
        nextArrow: <Image src={arrow.src} width={80} height={80} className="homeslider-arrow-next"/>,
        className: 'testimonial-slider'
    };
    return (
        <div className="testimonial">
            <Slider {...settings}>
                {slides.map((slide, i) => (
                    <div className="testimonial-slide" key={i}>
                        <div className="testimonial-slide-commentbox">
                        “{slide.comment}”
                        <Image src={commentPointer.src} width={50} height={200} className="testimonial-slide-commentbox-point" />
                        </div>
                        <div className="testimonial-slide-userbox">
                            <Image src={slide.user.pic} width={100} height={100} className="testimonial-slide-userbox-pic" />
                            <h4>{slide.user.name}</h4>
                            <h4>{slide.user.work}</h4>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Testimonials
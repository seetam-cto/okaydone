import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import footerbulb from "../../assets/images/footer-bulb.svg"
import fullLogo from "../../assets/images/full-logo.svg"
import facebook from "../../assets/images/facebook.svg"
import instagram from "../../assets/images/instagram.svg"
import twitter from "../../assets/images/twitter.svg"
import youtube from "../../assets/images/youtube.svg"
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <motion.div
            key="footer-bulb"
            initial={{x: '100%', opacity: 0}}
            whileInView={{x: '0%', opacity: 1}}
            exit={{x: '100%', opacity: 0}}
            className="footer-explore">
                <Image src={footerbulb.src} width={100} height={200} className="footer-explore-bulb" />
                <h2>EXPLORE OUR SERVICES</h2>
                <Link href="/">SOLUTIONS</Link>
            </motion.div>
            <div className="footer-okaydone">
                <div className="footer-okaydone-content">
                <Image alt='okaydone logo' src={fullLogo.src} width={400} height={200} className="footer-okaydone-content-logo" />
                <h1>Okay Done is a digital media agency that focuses on millennial marketing methods to help brands & organizations reach their optimum potential in the digital space.</h1>
                </div>
            </div>
            <div className="row footer-links">
                <div className="col-3">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <Link  href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">Solutions</Link>
                        </li>
                        <li>
                            <Link href="/">About Us</Link>
                        </li>
                        <li>
                            <Link href="/">Work</Link>
                        </li>
                        <li>
                            <Link href="/">Blogs</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <h3>Know Us</h3>
                    <ul>
                        <li>
                            <Link href="/">Contact</Link>
                        </li>
                        <li>
                            <Link href="/">Careers</Link>
                        </li>
                        <li>
                            <Link href="/">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link href="/">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-2"></div>
                <div className="col-4 footer-newsletter">
                    <h3>Sign up for our Newsletter</h3>
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <div className="footer-newsletter-box">
                            <input type="text" placeholder='Enter Email' />
                            <button className="footer-newsletter-button">
                                SUBSCRIBE
                            </button>
                        </div>
                    </form>
                    <div className="footer-socials">
                        <ul>
                            <li>
                                <a href="#">
                                    <Image src={facebook.src} width={30} height={30} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={instagram.src} width={30} height={30} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={twitter.src} width={30} height={30} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={youtube.src} width={30} height={30} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
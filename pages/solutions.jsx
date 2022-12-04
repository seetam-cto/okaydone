import React from 'react'
import Head from 'next/head'
import bulb from "../assets/images/bulb.svg"
import aboutbg from "../assets/images/about-bg.png"
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import content1 from "../assets/images/content-1.png"
import content2 from "../assets/images/content-2.png"
import content3 from "../assets/images/content-3.png"
import content from "../assets/images/content.svg"

import prod1 from "../assets/images/prod-1.png"
import prod2 from "../assets/images/prod-2.png"
import prod3 from "../assets/images/prod-3.png"
import production from "../assets/images/production.svg"

import inf1 from "../assets/images/inf-1.png"
import inf2 from "../assets/images/inf-2.png"
import inf3 from "../assets/images/inf-3.png"
import influencer from "../assets/images/influencer.svg"

import web1 from "../assets/images/web-1.png"
import web2 from "../assets/images/web-2.png"
import web3 from "../assets/images/web-3.png"
import web from "../assets/images/web.svg"

import mark1 from "../assets/images/mark-1.png"
import mark2 from "../assets/images/mark-2.png"
import mark3 from "../assets/images/mark-3.png"
import marketing from "../assets/images/marketing.svg"

import Link from 'next/link'
import Footer from '../components/Footer'

const Solutions = () => {
  return (
    <div className="solutions">
        <Head>
            <title>Okay Done | Solutions</title>
            <meta name="description" content="OkayDone" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="solutions-background"/>
        <AnimatePresence>
            <div className="container">
                <section className="solutions-hero">
                <motion.h2
                key="solutions-hero-title1"
                initial={{x: '-100%', opacity: 0}}
                whileInView={{x: '0%', opacity: 1}}
                exit={{x: '-100%', opacity: 0}}
                className='solutions-hero-title1'>
                    OUR <br />
                    SERVICES
                </motion.h2>
                <motion.h2
                key="solutions-hero-title2"
                initial={{x: '100%', opacity: 0}}
                whileInView={{x: '0%', opacity: 1}}
                exit={{x: '100%', opacity: 0}}
                transition={{delay: 1}}
                className='solutions-hero-title2'>
                    LOREM IPSUM DOLOR SIT <br />
                    AMET, CONSETETUR.
                </motion.h2>
                </section>
                <section className="solutions-content mtop">
                    <div className="row">
                        <div className="col-7 solutions-content-container">
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '-20%', y: '-25%', scale: 1}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 1.1, x: '-22%', y: '-27%'}}
                            transition={{ type: "spring", bounce: 0.6}}
                            className="solutions-content-image pic1" src={content1.src} />
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '0%', y: '30%', scale: 0.9}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 1, x: '-2%', y: '32%'}}
                            transition={{type: "spring", delay: 0.3, bounce: 0.6}}
                            className="solutions-content-image pic2" src={content2.src} />
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '35%', y: '0%', scale: 0.8}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 0.9, x: '37%', y: '2%'}}
                            transition={{type: "spring", delay: 0.6, bounce: 0.6}}
                            className="solutions-content-image pic3" src={content3.src} />
                            <Link href="/">VIEW PORTFOLIO</Link>
                        </div>
                        <div className="col-5 solutions-content-text">
                            <img src={content.src} className="solutions-content-text-img" />
                            <h3>SOCIAL MEDIA <br />MARKETING</h3>
                            <ul>
                                <li>Content Strategy</li>
                                <li>Brand Strategy</li>
                                <li>Digital Strategy</li>
                                <li>Design Strategy</li>
                                <li>Creative Copy</li>
                                <li>Blogs</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="solutions-content">
                    <div className="row">
                        <div className="col-5 solutions-content-text left">
                            <img src={production.src} className="solutions-content-text-img prod" />
                            <h3>PRODUCTION<br />HOUSE</h3>
                            <ul>
                                <li>Visuals</li>
                                <li>Audio</li>
                                <li>Scripting</li>
                                <li>Commercials</li>
                                <li>Ad Films</li>
                                <li>Short Movies</li>
                            </ul>
                        </div>
                        <div className="col-7 solutions-content-container">
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '-20%', y: '-25%', scale: 1}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 1.1, x: '-22%', y: '-27%'}}
                            transition={{ type: "spring", bounce: 0.6}}
                            className="solutions-content-image pic1" src={prod1.src} />
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '0%', y: '30%', scale: 0.9}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 1, x: '-2%', y: '32%'}}
                            transition={{type: "spring", delay: 0.3, bounce: 0.6}}
                            className="solutions-content-image pic2" src={prod3.src} />
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '35%', y: '0%', scale: 0.8}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 0.9, x: '37%', y: '2%'}}
                            transition={{type: "spring", delay: 0.6, bounce: 0.6}}
                            className="solutions-content-image pic3" src={prod2.src} />
                            <Link href="/">VIEW PORTFOLIO</Link>
                        </div>
                    </div>
                </section>
                <section className="solutions-content">
                    <div className="row">
                        <div className="col-7 solutions-content-container">
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '-20%', y: '-25%', scale: 1}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 1.1, x: '-22%', y: '-27%'}}
                            transition={{ type: "spring", bounce: 0.6}}
                            className="solutions-content-image pic1" src={inf1.src} />
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '0%', y: '30%', scale: 0.9}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 1, x: '-2%', y: '32%'}}
                            transition={{type: "spring", delay: 0.3, bounce: 0.6}}
                            className="solutions-content-image pic2" src={inf3.src} />
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '35%', y: '0%', scale: 0.8}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 0.9, x: '37%', y: '2%'}}
                            transition={{type: "spring", delay: 0.6, bounce: 0.6}}
                            className="solutions-content-image pic3" src={inf2.src} />
                            <Link href="/">VIEW PORTFOLIO</Link>
                        </div>
                        <div className="col-5 solutions-content-text">
                            <img src={influencer.src} className="solutions-content-text-img mark" />
                            <h3>INFLUENCER <br />MARKETING</h3>
                            <ul>
                                <li>Influencers</li>
                                <li>Micro Influencers</li>
                                <li>Bloggers</li>
                                <li>Youtubers</li>
                                <li>Blog Listings</li>
                                <li>Celebrities</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="solutions-content">
                    <div className="row">
                        <div className="col-5 solutions-content-text left">
                            <img src={web.src} className="solutions-content-text-img web" />
                            <h3>EXPERIENCE <br />DESIGN & WEB <br />DEVELOPMENT</h3>
                            <ul>
                                <li>UI/UX Design</li>
                                <li>Web Development</li>
                                <li>Mobile App Development</li>
                                <li>Full Stack Development</li>
                                <li>Web & Software Maintenance</li>
                            </ul>
                        </div>
                        <div className="col-7 solutions-content-container">
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '-20%', y: '-25%', scale: 1}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 1.1, x: '-22%', y: '-27%'}}
                            transition={{ type: "spring", bounce: 0.6}}
                            className="solutions-content-image pic1" src={web1.src} />
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '0%', y: '30%', scale: 0.9}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 1, x: '-2%', y: '32%'}}
                            transition={{type: "spring", delay: 0.3, bounce: 0.6}}
                            className="solutions-content-image pic2" src={web3.src} />
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '35%', y: '0%', scale: 0.8}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 0.9, x: '37%', y: '2%'}}
                            transition={{type: "spring", delay: 0.6, bounce: 0.6}}
                            className="solutions-content-image pic3" src={web2.src} />
                            <Link href="/">VIEW PORTFOLIO</Link>
                        </div>
                    </div>
                </section>
                <section className="solutions-content">
                    <div className="row">
                        <div className="col-7 solutions-content-container">
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '-20%', y: '-25%', scale: 1}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 1.1, x: '-22%', y: '-27%'}}
                            transition={{ type: "spring", bounce: 0.6}}
                            className="solutions-content-image pic1" src={mark1.src} />
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '0%', y: '30%', scale: 0.9}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 1, x: '-2%', y: '32%'}}
                            transition={{type: "spring", delay: 0.3, bounce: 0.6}}
                            className="solutions-content-image pic2" src={mark3.src} />
                            <motion.img 
                            initial={{x: 0, y: 0, scale: 0}}
                            whileInView={{x: '35%', y: '0%', scale: 0.8}}
                            exit={{x: 0, y: 0, scale: 0}}
                            whileHover={{scale: 0.9, x: '37%', y: '2%'}}
                            transition={{type: "spring", delay: 0.6, bounce: 0.6}}
                            className="solutions-content-image pic3" src={mark2.src} />
                            <Link href="/">VIEW PORTFOLIO</Link>
                        </div>
                        <div className="col-5 solutions-content-text">
                            <img src={marketing.src} className="solutions-content-text-img mark" />
                            <h3>PERFORMANCE <br />MARKETING</h3>
                            <ul>
                                <li>Lead Generation</li>
                                <li>Data Management</li>
                                <li>Analytics/Report</li>
                                <li>ROI Tracking</li>
                                <li>SEO</li>
                                <li>SEM</li>
                                <li>Email Marketing</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="solutions-about">
                    <motion.h2
                    key="solutions-about-h2"
                    initial={{x: '-100%', opacity: 0}}
                    whileInView={{x: '0%', opacity: 1}}
                    exit={{x: '-100%', opacity: 0}}
                    >
                        ABOUT US
                    </motion.h2>
                    <div className="solutions-about-content">
                        <Image className="solutions-about-bg" src={aboutbg.src} width={900} height={900} />
                        <div className="row">
                        <div className="col-6">
                            <motion.img
                            key="solutions-about-bulb"
                            initial={{y: '30vh', x: '-10vw', rotate: '60deg'}}
                            whileInView={{y: '10vh', x: '0vw', rotate: '0deg', scale: 0.6}}
                            exit={{y: '30vh', x: '-10vw', rotate: '60deg'}}
                            transition={{delay: 0.5, duration: 1, type: "spring", bounce: 0.6}}
                            src={bulb.src} className="solutions-about-bulb" />
                        </div>
                        <div className="col-6">
                            <p>
                            Okay Done is a digital media agency that focuses on millennial marketing methods to help brands & organisations reach their optimum potential in the digital space.
                            <br />
                            <span>We leverage the power of Performance Marketing, Social Media Marketing, Media Production, Experience Design, Influencer Marketing & Web Development to Create something truly amazing</span>
                            </p>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        </AnimatePresence>
        <Footer />
    </div>
  )
}

export default Solutions
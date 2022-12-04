import React from 'react'
import Head from 'next/head'
import bulb from "../assets/images/bulb.svg"
import history from "../assets/images/history.svg"
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '../components/Footer'
import PrizeSlider from '../components/PrizeSlider'
import numbers from "../assets/images/numbers.svg"

const AboutUs = () => {
    return (
      <div className="about">
        <Head>
            <title>Okay Done | Solutions</title>
            <meta name="description" content="OkayDone" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="about-background-color"/>
        <motion.img
          key="about-hero-bulb"
          initial={{y: 0, rotate: 0, opacity: 0}}
          whileInView={{y: '25%', rotate: -40, opacity: 1}}
          exit={{opacity: 0}}
          transition={{delay: 1}}
          src={bulb.src}
          className="about-hero-bulb" />
        <div className="about-background"/>
        <AnimatePresence>
          <div className="container about-container">
            <section className="about-hero">
                <motion.h2
                key="about-hero-title1"
                initial={{x: '-100%', opacity: 0}}
                whileInView={{x: '0%', opacity: 1}}
                exit={{x: '-100%', opacity: 0}}
                className='about-hero-title1'>
                    ABOUT <br />
                    US
                </motion.h2>
                <motion.h2
                key="about-hero-title2"
                initial={{x: '-100%', opacity: 0}}
                whileInView={{x: '0%', opacity: 1}}
                exit={{x: '-100%', opacity: 0}}
                transition={{delay: 1}}
                className='about-hero-title2'>
                    LOREM IPSUM DOLOR SIT <br />
                    AMET, CONSETETUR.
                </motion.h2>
            </section>
            <section className="about-content">
              <motion.h1
              key="about-content-h1"
              initial={{y: 100, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              exit={{y: 100, opacity: 0}}
              transition={{delay: 0}}
              >WHO WE ARE</motion.h1>
              <motion.h3
              key="about-content-h3"
              initial={{y: 100, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              exit={{y: 100, opacity: 0}}
              transition={{delay: 0.3}}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
              </motion.h3>
              <motion.p
              key="about-content-subtext"
              initial={{y: 100, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              exit={{y: 100, opacity: 0}}
              transition={{delay: 0.6}}
              className='about-content-subtext'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              </motion.p>
              <motion.p
              key="about-content-subsubtext"
              initial={{y: 100, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              exit={{y: 100, opacity: 0}}
              transition={{delay: 0.9}}
              className='about-content-subtext sub'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              </motion.p>
            </section>
            <section className="about-history">
              <motion.h2
              key="about-history-h2"
              initial={{y: -100, scale: 0, opacity: 0}}
              whileInView={{y: 0, scale: 1, opacity: 1}}
              exit={{y: -100, scale: 0, opacity: 0}}
              transition={{delay: 0}}
              >HISTORY</motion.h2>
              <motion.h4
              key="about-history-h4"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{delay: 0.3}}
              >LOREM IPSUM DOLOR SIT</motion.h4>
              <img className='about-history-image' src={history.src} />
            </section>
            <section className="about-achievement">
              <motion.h2
              key="about-achievement-h2"
              initial={{x: '-100%', opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              exit={{x: '-100%', opacity: 0}}
              >ACHIEVEMENTS</motion.h2>
              <PrizeSlider />
            </section>
            <section className="about-numbers">
              <motion.h2
              key="about-numbers-h2"
              initial={{x: '100%', opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              exit={{x: '100%', opacity: 0}}
              >
                THE <br />
                NUMBERS
              </motion.h2>
              <img src={numbers.src} className="about-numbers-image" />
            </section>
          </div>
        </AnimatePresence>
        <Footer />
      </div>
    )
}

export default AboutUs
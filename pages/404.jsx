import Head from 'next/head'
import Image from 'next/image'
import HomeSlider from '../components/HomeSlider'
import aboutbg from "../assets/images/about-bg.png"
import bulb from "../assets/images/bulb.svg"
import yellowbg from "../assets/backgrounds/yellow-bg.svg"
import yellowband from "../assets/backgrounds/yellow-band.svg"
import testBg from "../assets/backgrounds/testimonial.svg"
import { motion, AnimatePresence } from 'framer-motion'
import HomeServices from '../components/HomeServices'
import CaseStudies from '../components/CaseStudy'
import ClientBand from '../components/ClientBand'
import Link from 'next/link'
import HomeMedia from '../components/HomeMedia'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
export default function Nopage() {
  return (
    <div className='home'>
      <Head>
        <title>Okay Done</title>
        <meta name="description" content="OkayDone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-background-blur" />
      <AnimatePresence>
      <div className="container">
        <section className="home-hero error">
          <motion.h2
          key="home-hero-404"
          initial={{x: '-100%', opacity: 0}}
          whileInView={{x: '0%', opacity: 1}}
          exit={{x: '-100%', opacity: 0}}
          className='home-hero-404'>
            <span>OOPS! 404</span><br />
            LOOKS LIKE YOU <br />
            WONDERED OFF ON <br />
            OUR WEBSITE
          </motion.h2>
        </section>
      </div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

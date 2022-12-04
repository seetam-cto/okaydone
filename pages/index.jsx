import Head from 'next/head'
import Image from 'next/image'
import HomeSlider from '../components/HomeSlider'
import aboutbg from "../assets/images/about-bg.png"
import bulb from "../assets/images/bulb.svg"
import yellowbg from "../assets/backgrounds/yellow-bg.svg"
import yellowband from "../assets/backgrounds/yellow-band.svg"
import testBg from "../assets/backgrounds/testimonial.svg"
import whitelogo from "../assets/images/whitelogo.svg"
import { motion, AnimatePresence } from 'framer-motion'
import HomeServices from '../components/HomeServices'
import CaseStudies from '../components/CaseStudy'
import ClientBand from '../components/ClientBand'
import Link from 'next/link'
import HomeMedia from '../components/HomeMedia'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>Okay Done</title>
        <meta name="description" content="OkayDone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-background"/>
      <AnimatePresence>
      <div className="container">
        <section className="home-hero">
          <motion.h2
          key="home-hero-title1"
          initial={{x: '-100%', opacity: 0}}
          whileInView={{x: '0%', opacity: 1}}
          exit={{x: '-100%', opacity: 0}}
          className='home-hero-title1'>
            WE DON&apos;T THINK <br />
            OUTSIDE THE BOX.
          </motion.h2>
          <motion.h2
          key="home-hero-title2"
          initial={{x: '100%', opacity: 0}}
          whileInView={{x: '0%', opacity: 1}}
          exit={{x: '100%', opacity: 0}}
          transition={{delay: 1}}
          className='home-hero-title2'>
            WE BELIEVE <br />
            THERE IS <br />
            NO BOX
          </motion.h2>
          <motion.img
          key="home-hero-whitelogo"
          className="home-hero-whitelogo"
          initial={{x: '100%', opacity: 0}}
          whileInView={{x: '60vw', y: '60vh', opacity: 0.2}}
          exit={{x: '100%', opacity: 0}}
          src={whitelogo.src} alt="" />
        </section>
        <section className="home-subtext">
          <motion.h2>
            AND WE ENSURE YOUR BRAND <br />
            IS SEEN AND HEARD LIKE <br />
            NEVER BEFORE
          </motion.h2>
        </section>
        <section className="home-latest">
          <motion.h2
          key="home-latest-title"
          initial={{x: '100%'}}
          whileInView={{x: '0%'}}
          exit={{x: '100%'}}
          className='home-latest-title'>Latest Work</motion.h2>
          <HomeSlider />
        </section>
        <section className="home-about">
          <motion.h2
          key="home-about-h2"
          initial={{x: '-100%', opacity: 0}}
          whileInView={{x: '0%', opacity: 1}}
          exit={{x: '-100%', opacity: 0}}
          >
            ABOUT US
          </motion.h2>
          <div className="home-about-content">
            <Image className="home-about-bg" src={aboutbg.src} width={900} height={900} />
            <div className="row">
              <div className="col-6">
                <motion.img
                key="home-about-bulb"
                initial={{y: '30vh', x: '-10vw', rotate: '60deg'}}
                whileInView={{y: '10vh', x: '0vw', rotate: '0deg', scale: 0.6}}
                exit={{y: '30vh', x: '-10vw', rotate: '60deg'}}
                transition={{delay: 0.5, duration: 1, type: "spring", bounce: 0.6}}
                src={bulb.src} className="home-about-bulb" />
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
        <section className="home-services">
          <motion.h2
          key="home-services-h2"
          initial={{x: '100%', opacity: 0}}
          whileInView={{x: '0%', opacity: 1}}
          exit={{x: '100%', opacity: 0}}
          >WHAT WE DO</motion.h2>
          <HomeServices />
        </section>
        <section className="home-cases">
          <img src={yellowbg.src} className="home-cases-bg" />
          <div className="home-cases-content">
            <motion.h2
            key="home-cases-content-h2"
            initial={{x: '-100%', opacity: 0}}
            whileInView={{x: '0%', opacity: 1}}
            exit={{x: '-100%', opacity: 0}}
            >CASE STUDIES</motion.h2>
            <CaseStudies />
          </div>
        </section>
        <section className="home-clients">
          <motion.h2
          key="home-clients-h2"
          initial={{x: '100%', opacity: 0}}
          whileInView={{x: '0%', opacity: 1}}
          exit={{x: '100%', opacity: 0}}
          >OUR CLIENTS</motion.h2>
          <div className="home-clients-bands">
            <div className="home-clients-bands-band">
              <ClientBand />
            </div>
            <div className="home-clients-bands-band">
              <ClientBand rtl={true}/>
            </div>
            <div className="home-clients-bands-band">
              <ClientBand />
            </div>
          </div>
          <motion.div 
          key="home-clients-cta"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{delay: 1}}
          className="home-clients-cta">
            <Image src={bulb.src} width={150} height={250} className="home-clients-cta-img" />
            <h3>
              Have a crazy Idea? <br />
              We&apos;ll help you <br />
              make it reality!
            </h3>
            <Link href={"/"}>GET IN TOUCH</Link>
          </motion.div>
        </section>
        <section className="home-media">
        <img src={yellowband.src} className="home-media-bg" />
        <div className="home-media-content">
          <motion.h2
          key="home-media-h2"
          initial={{x: '100%', opacity: 0}}
          whileInView={{x: '0%', opacity: 1}}
          exit={{x: '100%', opacity: 0}}
          >IN THE MEDIA</motion.h2>
          <HomeMedia />
        </div>
        </section>
        <section className="home-testimonials">
          <Image src={testBg.src} width={1080} height={720} className="home-testimonials-bg" />
          <motion.div
          key="home-testimonials"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          exit={{opacity: 0}}
          className="home-testimonials-content">
            <motion.h2
            key="home-testimonials-h2"
            initial={{x: '-100%', opacity: 0}}
            whileInView={{x: '0%', opacity: 1}}
            exit={{x: '-100%', opacity: 0}}
            transition={{delay: 0.4}}
            >TESTIMONIALS</motion.h2>
            <Testimonials />
          </motion.div>
        </section>
      </div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

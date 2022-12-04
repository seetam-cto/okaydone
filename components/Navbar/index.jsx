import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/logo.svg"
import backtop from "../../assets/images/back-to-top.png"
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import BackToTop from "react-back-to-top-button";

const Navbar = () => {
  const router = useRouter()
  const [curLink, setCurLink] = useState("")
  useEffect(() => {
    setCurLink(router.pathname)
  },[router]) 
  return (
    <header className="navbar">
        <AnimatePresence>
        <motion.div
        key="logo"
        initial={{y: -200, rotate: -180}}
        animate={{y: 0, rotate: 0}}
        transition={{delay: 1.5}}
        className="logo">
            <Link href="/"><Image src={logo.src} width={200} height={125} /></Link>
        </motion.div>
        <motion.div
        key="navbar-menu"
        initial={{y: -400, scaleY: 0, opacity: 0}}
        animate={{y: 0, scaleY: 1, opacity: 1}}
        transition={{delay: 2}}
        className="navbar-menu">
          <ul>
            <motion.li className={`${curLink === "/" && "active"}`}>
              <Link href="/">Home</Link>
            </motion.li>
            <motion.li className={`${curLink === "/solutions" && "active"}`}>
              <Link href="/solutions">Solutions</Link>
            </motion.li>
            <motion.li className={`${curLink === "/about-us" && "active"}`}>
              <Link href="/about-us">About Us</Link>
            </motion.li>
            <motion.li>
              <Link href="/">Work</Link>
            </motion.li>
            <motion.li>
              <Link href="/">Contact</Link>
            </motion.li>
            <motion.li>
              <Link href="/">Careers</Link>
            </motion.li>
          </ul>
          <motion.ul
          key="navbar-menu-blog"
          initial={{y: -100, scaleY: 0, opacity: 0}}
          animate={{y: 0, scaleY: 1, opacity: 1}}
          transition={{delay: 2.3}}
          >
            <motion.li>
              <Link href="/">Blog</Link>
            </motion.li>
          </motion.ul>
        </motion.div>
        <BackToTop
          showOnScrollUp={false}
          showAt={120}
          speed={1500}
          easing="easeInOutSine"
        >
          <motion.img
          initial={{scale: 1}}
          whileHover={{scale: 1.1}}
          transition={{type: "spring", bounce: 0.6}}
          className='backtop' src={backtop.src} />
        </BackToTop>
        </AnimatePresence>
    </header>
  )
}

export default Navbar
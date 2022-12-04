import React, {useEffect} from "react"
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import '../styles/App.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextNProgress from 'nextjs-progressbar';
import Overlay from "../components/Overlay";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
      if (typeof window !== 'undefined') {
              const loader = document.getElementById('globalLoader');
          if (loader)
              loader.style.display = 'none';
      }
  }, []);
  return (
    <>
      <Background />
      <NextNProgress height={4} color="#FFAD00" />
      <Navbar />
      <Component {...pageProps} />
      {/* <Overlay /> */}
    </>
  )
}

export default MyApp
import React, { useEffect, useState } from 'react'
import mouse from "../../assets/images/mouse.svg"
import { motion } from 'framer-motion'

const Overlay = () => {
    const [poss, setPoss] = useState({
        x: 0,
        y: 0
    })
    const onMouseMove = (e) => {
        setPoss({
            x: e.clientX,
            y: e.clientY
        })
    }
    return (
        <div className="overlay" onMouseMove={(e) => onMouseMove(e)}>
            {poss && <motion.img
            initial={{x: 0, y: 0}}
            whileInView={{x: poss.x, y: poss.y}}
            src={mouse.src}  />}
        </div>
    )
}

export default Overlay
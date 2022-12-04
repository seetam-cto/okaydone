import React, { useEffect } from 'react'
// import gradient from '../../assets/extras/gradient'

const Background = () => {
    // useEffect(() => {
    //     gradient.initGradient('#gradient-canvas')
    // },[])
    return (
        <div className="background">
            <video width="100%" height="100%" muted={true} autoPlay={true} loop={true}>
                <source src="/bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <canvas id="gradient-canvas" data-transition-in /> */}
        </div>
    )
}

export default Background
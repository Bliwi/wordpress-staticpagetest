"use client"

import { motion } from "motion/react"
/*
const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    init: { pathLength: 1, opacity: 1 },
    // very interesting, you can set the animation on the parent and apply it automatically to the child
    visible: (i: number) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
    pathOffset: {
        pathLength: [0.9, 0.9, 0.9], // Animation for horizontal movement
        pathOffset: [0.2, 0.2, 0.2], // Animation for vertical movement
        // rotate: [0, 360], // Animation for opacity
        transition: {
          //pathLength: { duration: 5, repeat: Infinity },
          pathOffset: { duration: 5, repeat: Infinity },
          // rotate: { duration: 2, repeat: Infinity, ease: "linear" }
        }
    }
}
*/
const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.3 + 1
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "ease-in-out", duration: 2, bounce: 0 },
                opacity: { duration: 0.01 },
                repeat: Infinity,
                ease: "linear"
            },
        }
    },
    visibleLogo: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { delay: 3, duration: 5},
            opacity: { duration: 0.01 },
            ease: "linear"
        },
    }
}
export default function PathDrawing() {
    return (
        <div id="aboutpage">
            
            <div className="container aboutcontainer">
                <div id="firstrowabout">
                    <div id="aboutblerb">
                    <h1>bliwi</h1>
                        <p>Hello, my name is bliwi and I have a passion for creating art
                            and exploring new subjects.
                            Since childhool I always enjoyed understanding how the things around be work and be able to replicate them to improve my skils.</p>
                    </div>
                <div style={framelogo}>
                    <motion.svg
                        viewBox="0 0 1076.05 1215.13"
                        style={logo}
                        width="600"
                        height="600"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.circle variants={draw} style={shape} custom={1} className="circle-path" cx="581.58" cy="721.36" r="246.09" />
                        <motion.circle variants={draw} style={shape} custom={3} className="circle-path" cx="921.44" cy="721.36" r="93.76" />
                        <motion.circle variants={draw} style={shape} custom={4} className="circle-path" cx="675.34" cy="509.25" r="400.4" />
                        <motion.circle variants={draw} style={shape} custom={5} className="circle-path" cx="671.99" cy="815.62" r="94.27" />
                        <motion.circle variants={draw} style={shape} custom={6} className="circle-path" cx="425.56" cy="631.28" r="246.09" />
                        <motion.circle variants={draw} style={shape} custom={7} className="circle-path" cx="719.89" cy="461.35" r="93.76" />
                        <motion.circle variants={draw} style={shape} custom={8} className="circle-path" cx="550.99" cy="667.71" r="94.27" />
                        <motion.circle variants={draw} style={shape} custom={9} className="circle-path" cx="400.71" cy="400.71" r="400.4" />
                        <motion.circle variants={draw} style={shape} custom={10} className="circle-path" cx="241.72" cy="1061.8" r="152.09" />
                        <motion.line animate="visibleLogo" variants={draw} style={shape} initial="hidden" x1="335.49" y1="721.36" x2="335.49" y2="1213.55" />
                        <motion.line animate="visibleLogo" variants={draw} style={shape} initial="hidden" x1="89.39" y1="967.45" x2="581.58" y2="967.45" />
                        <motion.line animate="visibleLogo" variants={draw} style={shape} initial="hidden" x1="393.81" y1="1061.8" x2="89.64" y2="1061.8" />
                        <motion.line animate="visibleLogo" variants={draw} style={shape} initial="hidden" x1="241.72" y1="1213.88" x2="241.72" y2="910.12" />
                        <motion.path animate="visibleLogo" variants={draw} style={shapeStrong} initial="hidden" d="M335.55,720.83c-135.73,0-245.76,110-245.76,245.76v1.59l.24,92.63a151.88,151.88,0,0,0,151.88,151.88l93.64-.34c135.73,0,245.76-110,245.76-245.76a245.59,245.59,0,0,0-10.47-71.17,400.17,400.17,0,0,0,104.1,13.69c143.15,0,268.74-75.21,339.39-188.28Zm-47.11,340a47.11,47.11,0,1,1,47.11-47.11A47.11,47.11,0,0,1,288.44,1060.81Z" />
                        <motion.path animate="visibleLogo" variants={draw} style={shapeStrong} initial="hidden" d="M800.51,414.37c-3.68,105.37-49,207.43-129.06,280.9H335.55q-11.71,0-23.28,1Z" />
                    </motion.svg>
                </div>
                </div>
                <div>
                        <h1>Hello!</h1>
                        <h1>Hello!</h1>
                        <h1>Hello!</h1>
                        <h1>Hello!</h1>
                        <h1>Hello!</h1>
                        <h1>Hello!</h1>
                        <h1>Hello!</h1>
                        <h1>Hello!</h1>
                        <h1>Hello!</h1>
                        <h1>Hello!</h1>
                        <h1>Hello!</h1>
                </div>
            </div>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
const framelogo: React.CSSProperties = {
    width: "30rem",
    position: "relative",
    height: "30rem",
    borderRadius: "2rem",
    backgroundColor: "#fff",
    overflow: "hidden",
}
const logo: React.CSSProperties = {
    width: "100%",
    transform: "translate(-1%, -25%)",
}
const shape: React.CSSProperties = {
    strokeWidth: 2,
    stroke: "#00000059",
    fill: "transparent",
}
const shapeStrong: React.CSSProperties = {
    strokeWidth: 2,
    stroke: "#000",
    fill: "transparent",
}
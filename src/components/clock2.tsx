"use client"
// import { useState } from "react";
import { motion } from "motion/react"
import React ,{ useState } from 'react';


/*
const initialAnimation = { duration: 8, ease: "easeInOut"}
const LoopAnimation = { duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
*/
const ClockAnim: React.FC = () => {
    const [isFinishedBig, setIsFinishedBig] = useState<boolean>(false);
    const [isFinishedsmall, setIsFinishedsmall] = useState<boolean>(false);
    const [isFinishedsmall2, setIsFinishedsmall2] = useState<boolean>(false);
        
    const draw = {
        hidden: {
            pathLength: 0,
            rotate: 0
    
        },
        visible: {
            pathLength: 1,
            transition: { delay: 0.8, duration: 5, ease: "easeInOut" }
        },
        hiddenrect: {
            rotate: 45,
            pathLength: 0,
    
        },
        visiblerect: {
            rotate: 45,
            pathLength: 1,
            transition: { delay: 0.8, duration: 5, ease: "easeInOut" }
        },
        loopingAnimation: {
            pathLength: 0.5,
            rotate: 0,
            repeatType: "reverse",
        },
        visiblespin: {
            pathLength: 1,
            rotate: 270,
            transition: {
                pathLength: { delay: 0.8, duration: 10},
                rotate: { delay: 0.8, duration: 10, ease: "linear" },
                // rotate: { duration: 2, repeat: Infinity, ease: "linear" }
            }
        },
        animate: {
            pathLength: [1, 0.9, 1], // Animation for horizontal movement
            rotate: [270, 630], // Animation for vertical movement
            // rotate: [0, 360], // Animation for opacity
            transition: {
              pathLength: { duration: 10, repeat: Infinity },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              // rotate: { duration: 2, repeat: Infinity, ease: "linear" }
            }
        },
        visiblespinsmall: {
            pathLength: 1,
            rotate: 270,
            transition: {
                pathLength: { delay: 0.8, duration: 8},
                rotate: { delay: 0.8, duration: 8, ease: "linear" },
                // rotate: { duration: 2, repeat: Infinity, ease: "linear" }
            }
        },
        animatesmall: {
            pathLength: [1, 0.9, 1], // Animation for horizontal movement
            rotate: [270, 630], // Animation for vertical movement
            // rotate: [0, 360], // Animation for opacity
            transition: {
              
              pathLength: { duration: 8, repeat: Infinity },
              rotate: {duration: 6, repeat: Infinity, ease: "linear" },
              // rotate: { duration: 2, repeat: Infinity, ease: "linear" }
            }
        }
       
    
    }
    return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.49 322.73">
                            <motion.polygon style={circle} variants={draw} className="reactclock" points="61.8 61.8 82.35 82.35 41.24 123.45 0.14 82.35 41.24 41.24 61.8 61.8 82.35 41.24 41.24 0.14 0.14 41.24 41.24 82.35 61.8 61.8" initial="hidden" animate="visible"/>
                            <motion.circle style={circle} variants={draw} className="reactclock" cx="41.24" cy="137.35" r="41.1"  animate={isFinishedBig? "animate":"visiblespin"} onAnimationComplete={() => setIsFinishedBig(true)}/>
                            <motion.path style={circle} variants={draw} className="reactclock" d="M41.24,311.61l5.49,5.49-5.49,5.49-5.49-5.49,5.49-5.49V143.27a5.67,5.67,0,1,0-5.67-5.67h0a5.67,5.67,0,0,0,5.67,5.67" initial="hidden" animate="visible"/>
            </svg>
    )
}


export default ClockAnim;
/**
 * ==============   Styles   ================
 */
const circle: React.CSSProperties = {
    strokeWidth: 0.3,
    stroke: "var(--dark)",
    fill: "transparent",
}
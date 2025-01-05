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
        },
        visiblespinsmall2: {
            pathLength: 1,
            rotate: 270,
            transition: {
                pathLength: { delay: 0.8, duration: 5},
                rotate: { delay: 0.8, duration: 5, ease: "linear" },
                // rotate: { duration: 2, repeat: Infinity, ease: "linear" }
            }
        },
        animatesmall2: {
            pathLength: [1, 0.9, 1], // Animation for horizontal movement
            rotate: [270, 630], // Animation for vertical movement
            // rotate: [0, 360], // Animation for opacity
            transition: {
              
              pathLength: { duration: 5, repeat: Infinity },
              rotate: {duration: 4, repeat: Infinity, ease: "linear" },
              // rotate: { duration: 2, repeat: Infinity, ease: "linear" }
            }
        }
    
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274.96 399.36">
                <motion.rect 
                className="reactclockrect" 
                x="94.36" y="37.67" 
                width="58.13" 
                height="58.13" 
                variants={draw}
                initial="hiddenrect"
                whileInView="visiblerect"
                />
                <motion.circle style={circle} variants={draw} cx="167.13" cy="107.83" r="107.72" initial="hidden" whileInView={isFinishedBig? "animate":"visiblespin"} onAnimationComplete={() => setIsFinishedBig(true)}/>
                <motion.circle style={circle} variants={draw} cx="96.4" cy="214.23" r="66.61" initial="hidden" whileInView={isFinishedsmall? "animatesmall":"visiblespinsmall"} onAnimationComplete={() => setIsFinishedsmall(true)}/>
                <motion.circle style={circle} variants={draw} cx="41.21" cy="121.73" r="41.1" initial="hidden" whileInView={isFinishedsmall2? "animatesmall2":"visiblespinsmall2"} onAnimationComplete={() => setIsFinishedsmall2(true)}/>
                <motion.path className="reactclock" variants={draw} d="M96.4,388.24l5.49,5.49-5.49,5.49-5.49-5.49,5.49-5.49V219.9a5.67,5.67,0,1,0-5.67-5.67h0a5.67,5.67,0,0,0,5.67,5.67" initial="hidden" whileInView="visible"/>
                <motion.path className="reactclock" variants={draw} d="M41.21,295.74l5.49,5.49-5.49,5.49-5.49-5.49,5.49-5.49V127.4a5.67,5.67,0,1,0-5.67-5.67h0a5.67,5.67,0,0,0,5.67,5.67" initial="hidden" whileInView="visible"/>
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
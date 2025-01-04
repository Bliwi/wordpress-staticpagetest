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
        
    const draw = {
        hidden: {
            pathLength: 0,
            rotate: 0
    
        },
        visible: {
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.14 327.99">
            
            <motion.path className="reactclock"
                variants={draw}
                initial="hidden"
                onAnimationComplete={() => setIsFinishedBig(true)}
                animate={isFinishedBig? "animate":"visiblespin"}
                d="M107.82,11.44A107.72,107.72,0,1,1,.1,119.16,107.71,107.71,0,0,1,107.82,11.44" />
            <motion.path className="reactclock"
                variants={draw}
                initial="hidden"
                onAnimationComplete={() => setIsFinishedsmall(true)}
                animate={isFinishedsmall? "animatesmall":"visiblespinsmall"}
                d="M174.43.1a66.62,66.62,0,1,1-66.61,66.61A66.61,66.61,0,0,1,174.43.1" />
            <motion.path className="reactclock"
                variants={draw}
                initial="hidden"
                animate="visible"
                d="M174.43,240.72l5.49,5.49-5.49,5.49-5.49-5.49,5.49-5.49V72.38a5.67,5.67,0,1,0-5.67-5.67,5.67,5.67,0,0,0,5.67,5.67" />
            <motion.path className="reactclock"
                variants={draw}
                initial="hidden"
                animate="visible"
                d="M39.63,148.22l-5.49-5.49,5.49-5.49,5.49,5.49-5.49,5.49V316.55a5.67,5.67,0,1,0,5.67,5.67,5.67,5.67,0,0,0-5.67-5.67" />
            <motion.polygon className="reactclock"
                variants={draw}
                initial="hidden"
                animate="visible"
                points="113.31 210.59 107.82 216.09 102.33 210.59 113.31 199.62 102.33 188.65 107.82 183.16 113.31 188.65 102.33 199.62 113.31 210.59" />
            <motion.path className="reactclock"
                variants={draw}
                initial="hidden"
                animate="visible"
                d="M19.25,81a5.68,5.68,0,1,1-7.54,2.81A5.67,5.67,0,0,1,19.25,81,96.81,96.81,0,0,1,63.87,33.31h0A5.67,5.67,0,1,0,66,25.56a5.69,5.69,0,0,0-2.08,7.74" />
            <motion.polyline className="reactclock"
                variants={draw}
                initial="hidden"
                animate="visible"
                points="107.82 23.53 148.92 64.63 107.82 105.73 66.71 64.63 107.82 23.53" />
        </svg>
    )
}


export default ClockAnim;
/**
 * ==============   Styles   ================
 */
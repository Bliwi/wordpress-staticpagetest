import { useState } from "react";
import { useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react"
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import useMeasure from "react-use-measure";
import ClockAnim from './clock';
import ClockAnim2 from './clock2';
import ClockAnim3 from './clock3';
import IconHero from './commissionshero/IconHero';
import HbHero from './commissionshero/HbHero';
import FbHero from './commissionshero/FbHero';
import SceneHero from './commissionshero/SceneHero';
import RefSheetHero from './commissionshero/RefSheetHero';
import mask from '../assets/square-corner2.svg';

export default function Home() {
  
  const [activeComp, setActiveComp] = useState('/portfolio/icons');
  const renderActiveComponent = () => {
    switch (activeComp) {
      case '/portfolio/icons':
        return <IconHero />;
      case '/portfolio/halfbody':
        return <HbHero />;
      case '/portfolio/fullbody':
        return <FbHero />;
      case '/portfolio/scene':
        return <SceneHero />;
      case '/portfolio/refsheet':
        return <RefSheetHero />;
      default:
        return null;
    }
  };
  

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollAmount = window.scrollY;
      const scrollAmmountcap = Math.min(scrollAmount / 10, 100);
      document.documentElement.style.setProperty('--scroll-amount', `${scrollAmount}px`);
      document.documentElement.style.setProperty('--scroll-amount-splash', `${scrollAmmountcap}px`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //info panel 
  
  
  const [activeInfo, setActiveInfo] = useState('minimized');
  const expandedmoreinfo = activeInfo !== 'minimized';

  const renderActiveInfo = () => {
    switch (activeInfo) {
      case 'minimized':
        return (
          <AnimatePresence mode="wait">
                  <motion.div
                    key={words[index]}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.5 }}
                  >
                    {words[index]}
                  </motion.div>
          </AnimatePresence>
        );
      case 'expanded':
        return (<div id="expandedmoreinfoInner">
          <div className="wrapper">Payments
          </div>
          <div className="wrapper">Standard Procedure
            
            <motion.div
            onClick={() => viewFulltos(!fulltos)}
            layout
            transition={{linear: 1, duration: 0.3}}
            data-ison={fulltos} 
            className="fulltosbutton"
            
            >View full tos</motion.div>
          </div>
          <div className="wrapper corner2">basic Info</div>
        </div>
        );
      case 'tos':
        return (
          <h1>TOS TEMP</h1>
        )
      case 'faq':
        return (
          <h1>FAQ TEMP</h1>
        )
      case 'queue':
        return (
          <iframe src="https://trello.com/b/ZoRYiegO.html"></iframe>
        );
    }
  };

  const contact = useRef(null);
  const container2 = useRef(null);
  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  //Info panel expanding animation
  const words = ["Info", "Payment Methods", "Standard Procedure"];
  const [index, setIndex] = React.useState(0);
  const [fulltos, viewFulltos] = React.useState(false);
  const [performance, setPerformance] = React.useState(true);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const c2vars = {
    minimized: {
      height: "50rem",
    },
    expanded: {
      height: "80rem",
    },
    tos: {
      height: "100rem",
    },
    faq: {
      height: "100rem",
    },
    queue: {
      height: "78rem",
    }
  }
  const ivars = {
    minimized: {
      width: '12rem',
      height: "2rem"
    },
    expanded: {
      width: '100%',
      height: '32rem',
    },
    tos: {
      width: '100%',
      height: '50rem',
    },
    faq: {
      width: '100%',
      height: '50rem',
    },
    queue: {
      width: '100%',
      height: '30rem',
    }
  }
  const animationvars = {
    hiddenblur: {
      filter: 'blur(20px)',
      opacity: 0,
    },
    visibleblur: {
      filter: 'blur(0px)',
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    },
  }
  let [refpageheight, pageheight ] = useMeasure();
  return (
    <motion.div
      variants={animationvars}
      initial="hidden"
      animate="visible"
      ref={refpageheight}
    > 
      {performance ? (
        <div id="backgroundelements"
        style={{
          height: `${pageheight.height}px`,
        }}>
          <div id="spash" />
          <div className="clock" id="clock3">

            <ClockAnim />
          </div>
          <div className="clock" id="clock4">
            <ClockAnim3 />
          </div>
          <div className="clock" id="clock5">

            <ClockAnim2 />
          </div>
        </div>
      ) : null}
      <div id="home" className="page">
        
        <div id="ct1wrapper" className="wrapper">
          <div
            id="container1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1881 1624.19" id="herologo">
              <path d="M500,623.51c-276.14,0-500,223.86-500,500v3.23L.5,1315.19c0,170.66,138.35,309,309,309l190.5-.68c337.81,0,570.8-325,478.71-644.79,341.92,92,709.71-47,902.29-355.21ZM308.32,1219.35c0-126.35,191.68-126.55,191.68,0C500,1354.27,308.32,1349.57,308.32,1219.35Z" />
              <path d="M1446,0c-7.49,214.39-99.61,422-262.58,571.51,0,0-715.08.66-730.75,2Z" />
            </svg>
            <div id="heroInner">
              
              <div id="clock1" className="clock">
                <ClockAnim />
              </div>
              <div id="clock2" className="clock">
                <ClockAnim />
              </div>
              <div id="socialstack">
                <svg xmlns="http://www.w3.org/2000/svg" className="stackIcon" viewBox="0 0 512 512"><path d="M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="stackIcon" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="stackIcon" viewBox="0 0 40 40"><path d="M17.7,8.7c4.3,0,8.6,0,12.9,0c4.2,0,8,3.1,8.7,7.3c0.7,4.4-1.4,8.3-5.6,9.8c-1.2,0.4-2.5,0.5-3.8,0.7 c-0.5,0.1-0.8,0.2-0.8,0.8c0,0.6-0.2,1.3-0.4,1.9c-0.7,2-2.4,3.1-4.5,3.1c-5.7,0-11.3,0-17,0c-2.9,0-4.8-1.9-4.8-4.7 c0-5.6,0-11.2,0-16.7c0-1.6,0.4-2.1,2-2.1C8.9,8.7,13.3,8.7,17.7,8.7z M23.1,18.2c0-2.2-1.4-3.6-3.5-3.7c-1.3,0-2.4,0.5-3.3,1.3 c-0.4,0.4-0.7,0.3-1.2,0c-0.7-0.5-1.5-0.9-2.3-1.2c-1.8-0.5-4.2,0.4-4.5,2.7c-0.2,1.7,0.4,3.2,1.6,4.3c1.7,1.7,3.6,3.4,5.4,5.1 c0.3,0.3,0.6,0.3,0.9,0c1.7-1.7,3.5-3.4,5.2-5.1C22.5,20.7,23.2,19.6,23.1,18.2z M29.1,17.7c0,0.9,0,1.8,0,2.7 c0,1.6-0.3,1.5,1.5,1.5c1.6,0,2.9-0.7,3.6-2.2c0.7-1.6,0.8-3.2-0.3-4.7c-1-1.4-2.4-1.6-4-1.5c-0.6,0-0.8,0.2-0.8,0.8 C29.1,15.4,29.1,16.5,29.1,17.7z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="stackIcon" viewBox="0 0 512 512"><path d="M373 138.6c-25.2 0-46.3-17.5-51.9-41l0 0c-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3c12.6-9.7 28.4-15.5 45.5-15.5c41.3 0 74.7 33.4 74.7 74.7c0 29.8-17.4 55.5-42.7 67.5c-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4C17.6 311.5 0 285.7 0 255.7c0-41.3 33.4-74.7 74.7-74.7c17.2 0 33 5.8 45.7 15.6c34-21.1 76.8-34.4 123.7-36.4l0-.3c0-44.3 33.7-80.9 76.8-85.5C325.8 50.2 347.2 32 373 32c29.4 0 53.3 23.9 53.3 53.3s-23.9 53.3-53.3 53.3zM157.5 255.3c-20.9 0-38.9 20.8-40.2 47.9s17.1 38.1 38 38.1s36.6-9.8 37.8-36.9s-14.7-49.1-35.7-49.1zM395 303.1c-1.2-27.1-19.2-47.9-40.2-47.9s-36.9 22-35.7 49.1c1.2 27.1 16.9 36.9 37.8 36.9s39.3-11 38-38.1zm-60.1 70.8c1.5-3.6-1-7.7-4.9-8.1c-23-2.3-47.9-3.6-73.8-3.6s-50.8 1.3-73.8 3.6c-3.9 .4-6.4 4.5-4.9 8.1c12.9 30.8 43.3 52.4 78.7 52.4s65.8-21.6 78.7-52.4z" /></svg>
              </div>
              <button id="callforactionCommissions" className="cta" onClick={() => handleScroll(container2)}>Commissions</button>
              <div id="contactCommissions" onClick={() => handleScroll(contact)}>
                <svg id="contactCommissionsIconSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <circle id="contactCommissionsIconbg" cx="50" cy="50" r="50" />
                  <path id="contactCommissionsIconInner" d="M50,29.11h0A27.57,27.57,0,0,0,70.89,50h0A27.57,27.57,0,0,0,50,70.89h0A27.57,27.57,0,0,0,29.11,50h0A27.57,27.57,0,0,0,50,29.11Z" />
                </svg>
                <button id="contactCommissionsInner">Contact</button>
                
              </div>
              
            </div>
          </div>
        </div>
        <button onClick={() => setPerformance(!performance)}>togglePerformance</button>
        <div ref={container2}></div>
        <motion.div id="container2" className="container"
        layout="position"
        transition={{ duration: 0.5, ease: "easeInOut"}}
        variants={c2vars}
        animate={activeInfo}
        >
          <LayoutGroup>
          <div className="containerHeader" onClick={() => handleScroll(container2)}>
            <h1>Commissions</h1>
          </div>
          <div className="commissionsHeroContainer">
            <div className="commissionsHeroSidebar">
              <div
                className="itemHeroCommissions"
                style={{ backgroundImage: "url('../snipets/kagogi icon.png')", marginTop: 0 }}
                onClick={() => setActiveComp('/portfolio/icons')}
              >
                icon
              </div>
              <div
                className="itemHeroCommissions half-bodyCommission"
                style={{ backgroundImage: "url('../snipets/archie_lowres watermarked.png')" }}
                onClick={() => setActiveComp('/portfolio/halfbody')}
              >
                half body
              </div>
              <div
                className="itemHeroCommissions full-bodyCommission"
                style={{ backgroundImage: "url('../snipets/milo.png')" }}
                onClick={() => setActiveComp('/portfolio/fullbody')}
              >
                full body
              </div>
              <div
                className="itemHeroCommissions"
                style={{ backgroundImage: "url('../snipets/proto-fisheye-no-ovelay.png')" }}
                onClick={() => setActiveComp('/portfolio/scene')}
              >
                scene
              </div>
              <div
                className="itemHeroCommissions"
                style={{ backgroundImage: "url('../snipets/Iralikesentinel_Ira.png')", marginBottom: 0 }}
                onClick={() => setActiveComp('/portfolio/refsheet')}
              >
                ref-sheet
              </div>
            </div>
            <div className="commissionsHeroBackground" id="heroparallaxContainer">
              <div id="ActiveComponentWrapper">
              {renderActiveComponent()}
              </div>
              <Link to={activeComp} id="callForActionPortfolioWrapper">
                <a id="callForActionPortfolio">More Examples</a>
                <div id="callForActionPortfolioCircle"></div>
              </Link>
            </div>
          </div>
          <div id="commissionsbuttonrow"
          >
              <motion.div
                onClick={() => setActiveInfo('expanded')}
                transition={{ duration: 0.3, linear: 1 }}
                id="expandedmoreinfobutton"
                
                style={{mask: expandedmoreinfo ? `url("${mask}")` : 'none',
                maskPosition: expandedmoreinfo ? 'top right' : 'none',
                maskSize: expandedmoreinfo ? '120rem' : 'none',
                }}
                variants={ivars}
                animate={activeInfo}
              >
                {renderActiveInfo()}
                </motion.div>
                <AnimatePresence initial={false}>
                {expandedmoreinfo && (<motion.div initial={{ opacity: 0, right: '40rem'}} animate={{ opacity: 1, right: '9rem'}} exit={{ opacity: 0, right: '40rem'}} transition={{ linear: 1, duration: 0.5}} id="commissionbuttonsclose"><motion.button className="cbcbutton" layout transition={{ linear: 1, duration: 0.1 }} onClick={() => setActiveInfo('expanded')}>#</motion.button><motion.button className="cbcbutton" layout transition={{ linear: 1, duration: 0.1 }} onClick={() => setActiveInfo('minimized')}>X</motion.button></motion.div>)}
                </AnimatePresence>
              <motion.div
                id="commissionsbuttonrowother"
                style={{flexDirection: expandedmoreinfo ? "column" : "row" }}
                transition={{ linear: 1, duration: 0.1 }}
                layout data-expanded={expandedmoreinfo}
              > 
                <motion.button layout className="cbrbutton" transition={{ linear: 1, duration: 0.1 }} onClick={() => setActiveInfo('tos')}>TOS</motion.button>
                <motion.button layout className="cbrbutton" transition={{ linear: 1, duration: 0.1 }} onClick={() => setActiveInfo('faq')}>FAQ</motion.button>
                <motion.button layout className="cbrbutton" transition={{ linear: 1, duration: 0.1 }} onClick={() => setActiveInfo('queue')}>Queue</motion.button>
              </motion.div>
          </div>
          </LayoutGroup>
        </motion.div>
        <div ref={contact}></div>
        <div id="container3" className="container wrapper">
          <div onClick={() => handleScroll(contact)} className="containerHeader">
            <h1>Contact</h1>
          </div>
            <div id="contactBlurbwrapper" className="wrapper">
              <div id="contactBlurb" className="wrapper">
                <h2>Tell me about your next <br/>project!</h2>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1881 1624.19" id="contactblurblogo">
                <path d="M500,623.51c-276.14,0-500,223.86-500,500v3.23L.5,1315.19c0,170.66,138.35,309,309,309l190.5-.68c337.81,0,570.8-325,478.71-644.79,341.92,92,709.71-47,902.29-355.21ZM308.32,1219.35c0-126.35,191.68-126.55,191.68,0C500,1354.27,308.32,1349.57,308.32,1219.35Z" />
                <path d="M1446,0c-7.49,214.39-99.61,422-262.58,571.51,0,0-715.08.66-730.75,2Z" />
              </svg>
            </div>
            <h2>Get in contact through discord or email.</h2>
            <div id="contactDiscordWrapper" className="wrapper">
            <div id="contactDiscord" onClick={() => handleScroll(contact)}>
              <button id="contactDiscordInner" className="cta">discord</button>
            </div>
            <p>username: bliwi</p>
            </div>
            <h2>contact@bliwi.uk</h2>
            <div className="divider" />
            <div id="contactFotter">
              <a>Send a tip!</a>
              <div id="contactFotterInner">
                <a href="">Twitter</a>
                <h2>/</h2>
                <a>Reddit</a>
                <h2>/</h2>
                <a>Bluesky</a>
              </div>
            </div>
          </div>
        </div>
    </motion.div>
  );
};
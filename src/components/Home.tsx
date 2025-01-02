import { useState } from "react";
import { useRef } from "react";
import { motion } from "motion/react"
import IconHero from './commissionshero/IconHero';
import HbHero from './commissionshero/HbHero';
import FbHero from './commissionshero/FbHero';
import SceneHero from './commissionshero/SceneHero';
import RefSheetHero from './commissionshero/RefSheetHero';

export default function Home() {
  const [activeComp, setActiveComp] = useState('iconhero');
  const renderActiveComponent = () => {
    switch (activeComp) {
      case 'iconhero':
        return <IconHero />;
      case 'hbhero':
        return <HbHero />;
      case 'fbhero':
        return <FbHero />;
      case 'scenehero':
        return <SceneHero />;
      case 'refsheethero':
        return <RefSheetHero />;
      default:
        return null;
    }
  };
  const tos2 = useRef(null);
  const container2 = useRef(null);
  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
    <motion.div 
    
    id="spash"
    />
    <div id="home" className="page">
      <div id="ct1wrapper">
        <div id="container1">
          {/* Change to motion clock later */}
          <div id="heroInner">
            <div></div>
            <svg className="clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.14 327.99">
              <path className="clockPath bigcircle"
                d="M107.82,11.44A107.72,107.72,0,1,1,.1,119.16,107.71,107.71,0,0,1,107.82,11.44" />
              <path className="clockPath smallcircle"
                d="M174.43.1a66.62,66.62,0,1,1-66.61,66.61A66.61,66.61,0,0,1,174.43.1" />
              <path className="clockPath pendulumR"
                d="M174.43,240.72l5.49,5.49-5.49,5.49-5.49-5.49,5.49-5.49V72.38a5.67,5.67,0,1,0-5.67-5.67,5.67,5.67,0,0,0,5.67,5.67" />
              <path className="clockPath pendulumL"
                d="M39.63,148.22l-5.49-5.49,5.49-5.49,5.49,5.49-5.49,5.49V316.55a5.67,5.67,0,1,0,5.67,5.67,5.67,5.67,0,0,0-5.67-5.67" />
              <polygon className="clockPath rombusStack"
                points="113.31 210.59 107.82 216.09 102.33 210.59 113.31 199.62 102.33 188.65 107.82 183.16 113.31 188.65 102.33 199.62 113.31 210.59" />
              <path className="clockPath curvedpendulum"
                d="M19.25,81a5.68,5.68,0,1,1-7.54,2.81A5.67,5.67,0,0,1,19.25,81,96.81,96.81,0,0,1,63.87,33.31h0A5.67,5.67,0,1,0,66,25.56a5.69,5.69,0,0,0-2.08,7.74" />
              <polyline className="clockPath bigRombus"
                points="107.82 23.53 148.92 64.63 107.82 105.73 66.71 64.63 107.82 23.53" />
            </svg>
            <svg className="clock2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.14 327.99">
              <path className="clockPath bigcircle"
                d="M107.82,11.44A107.72,107.72,0,1,1,.1,119.16,107.71,107.71,0,0,1,107.82,11.44" />
              <path className="clockPath smallcircle"
                d="M174.43.1a66.62,66.62,0,1,1-66.61,66.61A66.61,66.61,0,0,1,174.43.1" />
              <path className="clockPath pendulumR"
                d="M174.43,240.72l5.49,5.49-5.49,5.49-5.49-5.49,5.49-5.49V72.38a5.67,5.67,0,1,0-5.67-5.67,5.67,5.67,0,0,0,5.67,5.67" />
              <path className="clockPath pendulumL"
                d="M39.63,148.22l-5.49-5.49,5.49-5.49,5.49,5.49-5.49,5.49V316.55a5.67,5.67,0,1,0,5.67,5.67,5.67,5.67,0,0,0-5.67-5.67" />
              <polygon className="clockPath rombusStack"
                points="113.31 210.59 107.82 216.09 102.33 210.59 113.31 199.62 102.33 188.65 107.82 183.16 113.31 188.65 102.33 199.62 113.31 210.59" />
              <path className="clockPath curvedpendulum"
                d="M19.25,81a5.68,5.68,0,1,1-7.54,2.81A5.67,5.67,0,0,1,19.25,81,96.81,96.81,0,0,1,63.87,33.31h0A5.67,5.67,0,1,0,66,25.56a5.69,5.69,0,0,0-2.08,7.74" />
              <polyline className="clockPath bigRombus"
                points="107.82 23.53 148.92 64.63 107.82 105.73 66.71 64.63 107.82 23.53" />
            </svg>
          </div>
        </div>
      </div>
      <div id="container2" className="container">
        <div ref={container2}></div>
        <div className="containerHeader">
          <h1>Commissions</h1>
        </div>
        <div className="commissionsHeroContainer">
          <div className="commissionsHeroSidebar">
            <div
              className="itemHeroCommissions"
              style={{ backgroundImage: "url('../snipets/kagogi icon.png')", marginTop: 0 }}
              onClick={() => setActiveComp('iconhero')}
            >
              icon
            </div>
            <div
              className="itemHeroCommissions half-bodyCommission"
              style={{ backgroundImage: "url('../snipets/archie_lowres watermarked.png')" }}
              onClick={() => setActiveComp('hbhero')}
            >
              half body
            </div>
            <div
              className="itemHeroCommissions full-bodyCommission"
              style={{ backgroundImage: "url('../snipets/milo.png')" }}
              onClick={() => setActiveComp('fbhero')}
            >
              full body
            </div>
            <div
              className="itemHeroCommissions"
              style={{ backgroundImage: "url('../snipets/proto-fisheye-no-ovelay.png')" }}
              onClick={() => setActiveComp('scenehero')}
            >
              scene
            </div>
            <div
              className="itemHeroCommissions"
              style={{ backgroundImage: "url('../snipets/Iralikesentinel_Ira.png')", marginBottom: 0 }}
              onClick={() => setActiveComp('refsheethero')}
            >
              ref-sheet
            </div>
          </div>
          <div className="commissionsHeroBackground" id="heroparallaxContainer">
                {renderActiveComponent()}
          </div>
          <div id="callForActionPortfolio">More Examples</div>
          <div id="callForActionPortfolioCircle"></div>
        </div>
      </div>
      <div id="container3" className="container">
        <div className="containerHeader">
          <h1>Contact</h1>
        </div>
      </div>
      <div id="container4" className="container">
        <div className="flex">
          <div className="sidebarTOS" style={{ flex: 0.5, background: 'none' }}>
            <button onClick={() => handleScroll(tos2)}>Scroll to Element</button>
          </div>
          <div className="innerTOS">
          <h1>Hello! This is my TOS</h1>
            <p>lorem ipsum 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

              
              Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.
              </p>
              <h1 ref={tos2}>Hello! This is my TOS2</h1>
            <p>lorem ipsum 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.

              Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.
              </p>
          </div>
        </div>
        <div className="footer">
          <h1>Footer here</h1>
        </div>
      </div>
    </div>
    </div>
  );
};

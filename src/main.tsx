import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// css
import './css/variables.css';
//import './css/clock.css';
import './css/commissionshero.css';
import './css/style.css';
import './css/portfolio.css';
import './css/about.css'
import './css/home.css'
import './css/gallery.css'

// pages
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/portfolio';
import Icons from './components/portfolio/icons';
import HbHero from './components/portfolio/halfbody';
import FbHero from './components/portfolio/fullbody';
import SceneHero from './components/portfolio/scene';
import RefSheetHero from './components/portfolio/refsheet';
import PathAnimation from './components/pathanimation';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/pathanim">Path animation</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pathanim" element={<PathAnimation />} />
          <Route path="portfolio" element={<Portfolio page={Icons} />}>
            <Route index element={<Icons />} />
            <Route path="icons" element={<Icons />} />
            <Route path="halfbody" element={<HbHero />} />
            <Route path="fullbody" element={<FbHero />} />
            <Route path="scene" element={<SceneHero />} />
            <Route path="refsheet" element={<RefSheetHero />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </div>
    </Router>
  </StrictMode>,
)

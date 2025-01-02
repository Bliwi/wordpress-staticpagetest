import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Clock from './components/clock';
import Portfolio from './components/portfolio';
import Icons from './components/portfolio/icons';
import HbHero from './components/portfolio/halfbody';
import FbHero from './components/portfolio/fullbody';
import SceneHero from './components/portfolio/scene';
import RefSheetHero from './components/portfolio/refsheet';
import PathAnimation from './components/pathanimation';


const App: FC = () => {
  return (
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
              <Link to="/clock">Clock</Link>
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
          <Route path="clock" element={<Clock />} />
          <Route path="pathanim" element={<PathAnimation />} />
          <Route path="portfolio" element={<Portfolio page={Icons} />}>
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
  );
}

export default App;
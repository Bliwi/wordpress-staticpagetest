import { Outlet, Link } from 'react-router-dom';
import React from 'react';

interface PortfolioProps {
  page?: React.ComponentType;
}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div>
      <div className="page">
        
        <ul>
          <li>
            <Link to="icons">Icons</Link>
          </li>
          <li>
            <Link to="halfbody">Half Body</Link>
          </li>
          <li>
            <Link to="fullbody">Full Body</Link>
          </li>
          <li>
            <Link to="scene">Scene</Link>
          </li>
          <li>
            <Link to="refsheet">Ref Sheet</Link>
          </li>
        </ul>
        <h2>Portfolio</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default Portfolio;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/variables.css';
import './css/clock.css';
import './css/commissionshero.css';
import './css/style.css';
import './css/portfolio.css';
import './css/about.css'
import './css/home.css'
import './css/gallery.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

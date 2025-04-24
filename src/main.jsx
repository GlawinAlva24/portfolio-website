import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Portfolio from './Portfolio';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 600,          // faster animation
  easing: 'ease-in-out',   // smoother animation flow
  once: true,
  anchorPlacement: 'top-bottom', // animation starts as soon as top of element reaches bottom of viewport
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);

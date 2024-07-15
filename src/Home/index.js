import React, { useState, useEffect } from 'react';
import '../styles/Home/index.scss';
import { VentoryLogo } from '../components';
import Carousel from './Carousel';
import WhatsNew from './WhatsNew';
import WhyVentory from './WhyVentory';
import WhyChooseUs from './WhyChooseUs';
import PartnersApp from './PartnersApp';
import CustomerApp from './CustomerApp';
import WhatElse from './WhatElse';
import Footer from './Footer';
import TrustedPartners from './TrustedPartners';
import LogoPlaceholder from './LogoPlaceholder';
import withLazyLoad from './withLazyLoad';

const LazyWhyVentory = withLazyLoad(WhyVentory);
const LazyWhyChooseUs = withLazyLoad(WhyChooseUs);
const LazyPartnersApp = withLazyLoad(PartnersApp);
const LazyCustomerApp = withLazyLoad(CustomerApp);
const LazyWhatElse = withLazyLoad(WhatElse);
const LazyTrustedPartners = withLazyLoad(TrustedPartners);

export default function Home() {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoLoaded(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <nav className="nav-bar-container">
        <div className='nav-bar'>
          {logoLoaded ? <VentoryLogo /> : <LogoPlaceholder />} {/* Conditional rendering */}
          <button className='su-btn'>
            <p>Register</p>
          </button>
        </div>
      </nav>

      <div className='hero-section'>
        <div className='hero-section-inner'>
          <div className="left-container">
            <Carousel />
          </div>

          <div className="right-container">
            <WhatsNew />
          </div>
        </div>
      </div>

      <div className="home-container">
        <LazyWhyVentory />
      </div>

      <div className="home-container">
        <LazyWhyChooseUs />
      </div>

      <div className="home-container">
        <LazyPartnersApp />
      </div>

      <div className="home-container">
        <LazyCustomerApp />
      </div>

      <div className="home-container">
        <LazyWhatElse />
      </div>
      
      <div className="home-container">
        <LazyTrustedPartners />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

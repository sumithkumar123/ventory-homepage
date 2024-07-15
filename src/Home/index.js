import '../styles/Home/index.scss';
import { VentoryLogo } from '../components'
import Carousel from './Carousel';
import WhatsNew from './WhatsNew';
import WhyVentory from './WhyVentory';
import WhyChooseUs from './WhyChooseUs';
import PartnersApp from './PartnersApp';
import CustomerApp from './CustomerApp';
import WhatElse from './WhatElse';
import Footer from './Footer';
import TrustedPartners from './TrustedPartners';

export default function Home() {
  return (
    <div className="home">
      <nav className="nav-bar-container">
        <div className='nav-bar'>
          <VentoryLogo />
          <button className='su-btn'
          ><p>Register</p></button>
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
        <WhyVentory />
      </div>

      <div className="home-container">
        <WhyChooseUs />
      </div>

      <div className="home-container">
        <PartnersApp />
      </div>

      <div className="home-container">
        <CustomerApp />
      </div>

      <div className="home-container">
        <WhatElse />
      </div>
      <div className="home-container">
        <TrustedPartners />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { pcDemo } from '../assets/home/demos';
import '../styles/Home/PartnersApp.scss';

export default function PartnersApp() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div className="partners-app">
      <div className="partners-app-left" data-aos="fade-right">
        <div className='head'>
          <p className="title">Partner's App</p>
          <p className='heading'>Empowering Partners for Success.</p>
        </div>
        <div className="description">
          <p>
            Explore the future of business management with a sneak peek into our
            revolutionary dashboard. Tailored for our partners, this intuitive
            interface merges cutting-edge technology with user-centric design,
            offering a glimpse into the seamless efficiency and powerful
            insights that await in the Ventory ecosystem.
          </p>
          <p>
            Elevate your business experience – the future is now, and it's at
            your fingertips.
          </p>
        </div>
      </div>

      <div className="partners-app-right" data-aos="zoom-in">
        <img src={pcDemo} alt="dashboard-demo-img" />
      </div>
    </div>
  );
}

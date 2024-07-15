import '../styles/Home/CustomerApp.scss';
import { phoneDemo } from '../assets/home/demos';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function CustomerApp() {
  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration in milliseconds
      // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="customer-app">
      <div className="customer-app-left" data-aos="fade-down">
        <div className='head'>
          <p className="title">Customer's App</p>
          <p className='heading'>
            Seamless Experience, Stunning UI: Discover Ventory's Customer App
          </p>
        </div>
        <div className="description"  data-aos="fade-up">
          <p>
            Empower customers with our mobile web app – your gateway to
            seamless transactions and personalized journeys. Designed for
            partner's end users, this innovative interface redefines engagement
            and elevates convenience.
          </p>
        </div>
      </div>
        <div className="customer-app-right" data-aos="zoom-in">
          <img src={phoneDemo} alt="app-demo-img"  />
        </div>
    </div>
  );
}
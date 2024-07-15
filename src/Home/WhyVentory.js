import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import '../styles/Home/WhyVentory.scss';
import { HomeDemo } from '../assets/home/demos';

export default function WhyVentory() {
  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration in milliseconds
       // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="why-ventory">
      <div className='why-ventory-left' data-aos="fade-right">
        <div className='head'>
          <p className="title">Why Ventory ?</p>
          <p className='heading'>Because we care about your business.</p>
        </div>
        <div className='description' data-aos="fade-right">
          <p>
            At Ventory, we go beyond conventional inventory
            management, crafting an experience that transcends expectations.
            Embrace a future where precision, innovation, and efficiency
            converge to propel your business to new heights with Ventory's
            advanced solutions.
          </p>
        </div>
      </div>
      <div className='why-ventory-right' data-aos="zoom-out">
        <img src={HomeDemo} alt='Ventory Image' />
      </div>
    </div>
  );
}

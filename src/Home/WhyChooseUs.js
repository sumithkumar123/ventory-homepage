import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import '../styles/Home/WhyChooseUs.scss';

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
      // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="why-choose-us">
      <div className='why-choose-us-top' data-aos="fade-right">
        <p className="title">Why Choose Us</p>
        <p className='heading'>
          Empowering Your Success, One Decision at a Time
        </p>
      </div>
      <div className='why-choose-us-bottom'>
        <div className='container' data-aos="fade-right">
          <div className='heading-container'>
            <p className="heading_">Modern Solution ✨</p>
          </div>
          <div className='description-container'>
            <p className="description">
              Revolutionize your operations with our modern solution.
              Harness innovation for streamlined processes and dynamic
              adaptability, ensuring your business stays ahead in this
              digital era.
            </p>
          </div>
        </div>
        <div className='container' data-aos="fade-down">
          <div className='heading-container'>
            <p className="heading_">Absolute Control ✨</p>
          </div>
          <div className='description-container'>
            <p className="description">
              Take command of your business with absolute control. Our
              comprehensive system empowers you to manage every aspect,
              providing unmatched authority and precision in your
              operations.
            </p>
          </div>
        </div>
        <div className='container' data-aos="fade-left">
          <div className='heading-container'>
            <p className="heading_">Secure Handling ✨ </p>
          </div>
          <div className='description-container'>
            <p className="description">
              Ensure peace of mind with our secure handling channel.
              Safeguard your assets through a fortified channel, offering
              reliable and protected transit for your valuable
              resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

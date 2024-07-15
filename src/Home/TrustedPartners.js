import React, { useEffect, useRef } from 'react';
import '../styles/Home/TrustedPartners.scss';
import google from "../assets/home/footer/social.png";
import micro from "../assets/home/footer/microsoft.png";
import sales from "../assets/home/footer/salesforce.png";

const images = [
    google, micro, sales
];

const TrustedPartners = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 2; // Increase this value to make scrolling faster
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 1); // Reduce this value to make scrolling faster
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Trusted Partners</h1>
      <div className="image-scroller" ref={scrollRef}>
        <div className="image-scroller__content">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`scrolling-img-${index}`} />
          ))}
          {images.map((src, index) => (
            <img key={images.length + index} src={src} alt={`scrolling-img-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;

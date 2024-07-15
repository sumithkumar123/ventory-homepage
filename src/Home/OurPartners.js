import React from 'react';
import '../../styles/Home/OurPartners.scss';
export default function OurPartners() {
  const partnerDetails = [
    { id: "Add Image", src: null },
    { id: "Add Image", src: null },
    { id: "Add Image", src: null },
    { id: "Add Image", src: null },
    { id: "Add Image", src: null },
    { id: "Add Image", src: null },
    { id: "Add Image", src: null },
    { id: "Add Image", src: null },
    { id: "Add Image", src: null }
  ];

  return (
    <div className="our-partners">
      <p className="title">Our Partners</p>

      <div className="partner-container">
        <div className="marquee">
          {partnerDetails.map((element, index) => (
            <img
              key={`image-${index}`}
              className="partner-logo"
              alt={element.id}
              src={element.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

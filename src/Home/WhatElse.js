import '../styles/Home/WhatElse.scss';
import {
  availabilityIcon, categorizedStockIcon, customerBillingIcon,
  customerFeedbackIcon, customerReviewsIcon, detailedAnalyticsIcon,
  digitalInventoryIcon, exclusiveThemesIcon, manageOfferIcon,
  manageOrdersIcon, mapsIntegrationIcon, satisfiedCustomersIcon,
  smartQrsIcon, socialMediaIntegrationIcon, staffPermissionsIcon,
  stickerManagerIcon,
} from '../assets/home/icons';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function WhatElse() {
  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration in milliseconds
      // Whether animation should happen only once
    });
  }, []);


  const imageDetails = [
    {id: "manage-offer", icon: manageOfferIcon, text: "Manage Offer", color: "green"},
    {id: "customer-billing", icon: customerBillingIcon, text: "Customer Billing", color: "#614385"},
    {id: "digital-inventory", icon: digitalInventoryIcon, text: "Digital Inventory", color: "Brown"},
    {id: "manage-orders",icon: manageOrdersIcon, text: "Manage Orders", color: "#FF5F6D"},
    {id: "smart-qrs", icon: smartQrsIcon, text: "Smart Qrs", color: "tomato"},
    {id: "sticker-manager", icon: stickerManagerIcon, text: "Sticker Manager", color: "goldenrod"},
    {id: "detailed-analytics", icon: detailedAnalyticsIcon, text: "Detailed Analytics", color: "green"},
    {id: "exclusive-themes", icon: exclusiveThemesIcon, text: "Exclusive Themes", color: "dodgerblue"},
    {id: "customer-reviews", icon: customerReviewsIcon, text: "Customer Reviews", color: "#11998E"},
    {id: "categorized-stock", icon: categorizedStockIcon, text: "Categorized Stock", color: "goldenrod"},
    {id: "availability", icon: availabilityIcon, text: "Availability", color: "dodgerblue"},
    {id: "staff-permissions", icon: staffPermissionsIcon, text: "Staff Permissions", color: "#FF5F6D"},
    {id: "customer-feedback", icon: customerFeedbackIcon, text: "Customer Feedback", color: "green"},
    {id: "social-media-integration", icon: socialMediaIntegrationIcon, text: "Social Media Integration", color: "#FF5F6D"},
    {id: "maps-integration", icon: mapsIntegrationIcon, text: "Maps Integration", color: "Brown"},
    {id: "satisfied-customers", icon: satisfiedCustomersIcon, text: "Satisfied Customers", color: "#614385"},
  ]

  return (
    <div className="what-else">
      <div className='what-else-top' data-aos='fade-up'>
        <p className="title">What Else ?</p>
        <p className='heading'>
          Unlock the Possibilities: Key Features of Ventory
        </p>
      </div>
      <div className="what-else-bottom" data-aos='zoom-out'>
        {imageDetails.map((element, index) => (
          <div
            key={`feature-${index}`}
            className="feature"
            style={{
              backgroundColor: element.color
            }}
          >
            <div className='icon-container'>
              <img
                className="icon"
                alt={element.id}
                src={element.icon}
              />
            </div>
            <div className='description-container' >
              <p className='description'>{element.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
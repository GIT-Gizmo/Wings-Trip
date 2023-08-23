import React, {useEffect} from 'react';
import gridImage from '../../assets/grid-image.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Support = () => {
// useEffect to set animation duration
useEffect(() => {
  Aos.init({duration: 2000})
}, [])

  return (
    <div className='support container section'>
      <div className="section-container">
        <div className="title-div">
          <small>trip support</small>
          <h2>Schedule your trip with poise</h2>
          <p>Get assistance with booking and travel strategy, anticipate the exciting journey ahead</p>
        </div>

        <div className="info-div grid">
          <div className="text-div grid">

            <div data-aos='fade-down' data-aos-duration='1000' className="single-info">
              <span className="number">01</span>
              <h4>Trip specifications for Maldives</h4>
              <p>Discover essential trip details and specifics for Your unforgettable Maldives adventure, including breathtaking destinations, luxurious accommodations, exciting activities, and personalized itineraries for a dreamy escape</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='1000' className="single-info">
              <span className="number color-one">02</span>
              <h4>Arrive in Style with Professional Chauffeur Services</h4>
              <p>Experience luxurious travel and arrive in style with our highly skilled chauffeurs, providing top-notch professional services tailored to your needs and preferences</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='1000' className="single-info">
              <span className="number color-two">03</span>
              <h4>Multi-risk travel Insurance</h4>
              <p>Secure your journey with our comprehensive multi-risk travel insurance, offering protection against a range of unforeseen events, ensuring peace of mind throughout your travels</p>
            </div>

          </div>

          <div data-aos='fade-up' data-aos-duration='1000' className="img-div">
            <img src={gridImage} alt="Airplane window view" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
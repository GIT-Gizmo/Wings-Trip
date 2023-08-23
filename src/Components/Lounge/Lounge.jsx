import React, {useEffect} from 'react';
import imageGrid from '../../assets/imageGrid.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Lounge = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='lounge container section'>
      <div className="section-container grid">

        <div data-aos='fade-down' data-aos-duration='1000' className="img-div">
          <img src={imageGrid} alt="Airplane aisle image grid" />
        </div>

        <div className="text-div">
          <h2 data-aos='fade-down' data-aos-duration='1000'>Lounge for Unaccompanied Minors</h2>

          <div className="grids grid">

            <div data-aos='fade-down' data-aos-duration='1000' className="single-grid">
              <span className="grid-title">
                Guidance within the airport
              </span>
              <p>Navigate airports effortlessly with our expert assistance, from check-in to boarding, ensuring a seamless travel experience for you.</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='1000' className="single-grid">
              <span className="grid-title">
                Priority boarding
              </span>
              <p>Enjoy the perks of priority boarding, ensuring a smooth and expedited process to begin your journey.</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='1000' className="single-grid">
              <span className="grid-title">
              In-Flight Care and Comfort
              </span>
              <p>Experience utmost care and comfort during your flight with our attentive crew, ensuring a memorable journey on board.</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='1000' className="single-grid">
              <span className="grid-title">
                Chauffeur-driver service
              </span>
              <p>Indulge in luxury travel with our top-notch chauffeur-driver service, providing a seamless and elegant journey from door to destination.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Lounge
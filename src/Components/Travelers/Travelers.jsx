import React, {useEffect} from 'react';
import maldives from '../../assets/maldives.webp';
import santorini from '../../assets/santorini.webp';
import prague from '../../assets/prague.webp';
import tokyo from '../../assets/tokyo.webp';
import traveler1 from '../../assets/traveler1.webp';
import traveler2 from '../../assets/traveler2.webp';
import traveler3 from '../../assets/traveler3.webp';
import traveler4 from '../../assets/traveler4.webp';
import Aos from 'aos';
import 'aos/dist/aos.css';


// Using high order array method called Map to display all the data

const travelers = [
  {
    id: 1,
    destinationImage: maldives,
    travelerImage: traveler1,
    travelerName: 'Oyin David',
    socialLink: '@oyindave'

  },

  {
    id: 2,
    destinationImage: santorini,
    travelerImage: traveler2,
    travelerName: 'Daniel Fritz',
    socialLink: '@danfritzz'

  },

  {
    id: 3,
    destinationImage: prague,
    travelerImage: traveler3,
    travelerName: 'Alyssa Smith',
    socialLink: '@alysmith'

  },

  {
    id: 4,
    destinationImage: tokyo,
    travelerImage: traveler4,
    travelerName: 'Angat Dam',
    socialLink: '@angatdam'

  }
]

const Travelers = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='travelers container section'>
      <div className="section-container">
        <h2 data-aos='fade-down' data-aos-duration='1000'>This Month's Top Adventurers!</h2>

        <div className="travelers-container grid">
          
          {
            travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink })=>{
              return(
                <div data-aos='fade-up' data-aos-duration='1000' key={id} className="single-traveler">
                  <img src={destinationImage} alt="image of travelers destination" className="destination-image" />

                  <div className="travelers-details">

                    <div className="travelers-picture">
                      <img src={travelerImage} alt="image of traveler" className="travelers-image" />
                    </div>

                    <div className="travelers-name">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>

                </div>
              )
            })
          }

          {/* <div className="single-traveler">
            <img src={santorini} alt="image of travelers destination" className="destination-image" />

            <div className="travelers-details">

              <div className="travelers-picture">
                <img src={traveler2} alt="image of traveler" className="travelers-image" />
              </div>

              <div className="travelers-name">
                <span>IsraTech</span>
                <p>@isratech8</p>
              </div>
            </div>

          </div>
          
          <div className="single-traveler">
            <img src={prague} alt="image of travelers destination" className="destination-image" />

            <div className="travelers-details">

              <div className="travelers-picture">
                <img src={traveler3} alt="image of traveler" className="travelers-image" />
              </div>

              <div className="travelers-name">
                <span>IsraTech</span>
                <p>@isratech8</p>
              </div>
            </div>

          </div>

          <div className="single-traveler">

            <img src={tokyo} alt="image of travelers destination" className="destination-image" />

            <div className="travelers-details">
              <div className="travelers-picture">
                <img src={traveler4} alt="image of traveler" className="travelers-image" />
              </div>

              <div className="travelers-name">
                <span>IsraTech</span>
                <p>@isratech8</p>
              </div>
            </div>

          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Travelers
import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='subscribe section'>
      <section data-aos='fade-up' data-aos-duration='1000' className="section-container container">
        <h2>Subscribe To Our Newsletter To Stay Updated With Our Services</h2>
        <section className="input-div flex">
          <input type="text" placeholder='Enter Your E-mail address' />
          <button className="btn">Subscribe</button>
        </section>
      </section>
    </section>
  )
}

export default Subscribe
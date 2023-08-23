import React, {useEffect} from 'react';
import video from '../../assets/video.mp4';
import airplane from '../../assets/plane.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='home flex container'>

      <div className="main-text">
        <h1 data-aos='fade-up' data-aos-duration='1000'>Build Timeless Memories In Our Care</h1>
      </div>

      <div data-aos='fade-down' data-aos-duration='1000' className="home-media flex">

        <div className="video-div">
          <video src={video} className='video' autoPlay muted loop></video>
        </div>

        <img src={airplane} alt="Airplane image" className="plane" />

      </div>

    </div>
  )
}

export default Home
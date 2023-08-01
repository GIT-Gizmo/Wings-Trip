import React from 'react';
import video from '../../assets/video.mp4';
import airplane from '../../assets/plane.png';

const Home = () => {
  return (
    <div className='home flex container'>

      <div className="main-text">
        <h1>Build Timeless Memories In Our Care</h1>
      </div>

      <div className="home-media flex">

        <div className="video-div">
          <video src={video} className='video' autoPlay muted loop></video>
        </div>

        <img src={airplane} alt="Airplane image" className="plane" />

      </div>

    </div>
  )
}

export default Home
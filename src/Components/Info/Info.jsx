import React from 'react'
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs'
import {RxCalendar} from 'react-icons/rx'

const Info = () => {
  return (
    <div className='info section'>
      <div className="info-container container">
        <div className="title-div flex">
          <h2>Embark on journeys around the globe to create lasting memories</h2>
          <button className="btn">
            View All
          </button>
        </div>

        <div className="cards-div grid">

          <div className="single-card grid">
            <div className="icon-div flex">
              <RxCalendar className='icon' />
            </div>
            <span className="card-title">Book & Relax</span>
            <p>You also have the option to contact airlines through your phone and make flight reservations.</p>
          </div>

          <div className="single-card grid">
            <div className="icon-div flex color-one">
              <BsShieldCheck className='icon' />
            </div>
            <span className="card-title">Smart Checklist</span>
            <p>Stay organized and travel confidently with our smart checklist, ensuring a smooth and stress-free journey for every trip.</p>
          </div>

          <div className="single-card grid">
            <div className="icon-div flex color-two">
              <BsBookmarkCheck className='icon' />
            </div>
            <span className="card-title">Save More</span>
            <p>Unlock incredible savings and enjoy affordable airfares with our exclusive deals, making travel dreams a reality for less.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
import React from 'react'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'

const Search = () => {
  return (
    <div className='search container section'>
      <div className="section-container grid">

        <div className="btns flex">

          <div className="single-btn">
            <span>Economy</span>
          </div>

          <div className="single-btn">
            <span>Business Class</span>
          </div>

          <div className="single-btn">
            <span>First Class</span>
          </div>
          
        </div>

        <div className="search-inputs flex">
          {/* Single inputs */}
          <div className="single-input flex">
            <div className="icon-div">
              <HiOutlineLocationMarker className='icon'/>
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Where do you want to go?' />
            </div>
          </div>

          {/* Single inputs */}
          <div className="single-input flex">
            <div className="icon-div">
              <RiAccountPinCircleLine className='icon'/>
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder='Add guests' />
            </div>
          </div>

          {/* Single inputs */}
          <div className="single-input flex">
            <div className="icon-div">
              <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder='Add date' />
            </div>
          </div>

          {/* Single inputs */}
          <div className="single-input flex">
            <div className="icon-div">
              <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder='Add date' />
            </div>
          </div>

          <button className="btn btn-block flex">Search Flights</button>

        </div>

      </div>
    </div>
  )
}

export default Search
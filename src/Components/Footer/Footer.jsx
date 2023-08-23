import React from 'react'
import logo from '../../assets/logo.png';
import { TiSocialFacebook } from 'react-icons/ti'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer">

      <section className="section-container container grid">
        <div className="grid-one">
          <figure className="logo-div">
            <img className='logo' src={logo} alt="Footer logo" />
          </figure>
          <p>Empower your mind over emotions and take flight.</p>
          <aside className="social-icon flex">
            <TiSocialFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <FaPinterestP className='icon'/>
            <AiOutlineInstagram className='icon'/>
          </aside>
        </div>

        <section className="footer-links">
          <strong className="link-title">Information</strong>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-In</a>
          </li>
          <li>
            <a href="">Manage Your Booking</a>
          </li>
        </section>

        <section className="footer-links">
          <strong className="link-title">Quick Guide</strong>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Our Communities</a>
          </li>
        </section>

        <section className="footer-links">
          <strong className="link-title">Information</strong>
          <li>
            <a href="">Chauffeur</a>
          </li>
          <li>
            <a href="">Our Partners</a>
          </li>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Transportation</a>
          </li>
          <li>
            <a href="">Programme Rules</a>
          </li>
        </section>
      </section>

      <section className="copyright-div flex">
        <p>Developed by <a href="https://davecodes.vercel.app" target='_blank' rel='noreferrer'>dave_gizmo</a></p>
      </section>
    </footer>
  )
}

export default Footer
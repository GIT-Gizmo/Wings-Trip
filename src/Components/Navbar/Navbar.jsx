import React, {useState} from 'react';
import {SiConsul} from 'react-icons/si';
import {BsPhoneVibrate} from 'react-icons/bs';
import {AiOutlineGlobal } from 'react-icons/ai';
import logo from '../../assets/logo.svg';
import {CgMenuGridO} from 'react-icons/cg';

const Navbar = () => {
    // Removes Navbar in small width screens
    const [active, setActive] = useState('navbar-menu');
    const showNavbar = () =>(
        setActive('navbar-menu show-navbar')
    )

    const removeNavbar = () =>(
        setActive('navbar-menu')
    )


    // Add background color to the second navbar
    const [noBg, addBg] = useState('navbar-two');

    const addBgColor = () =>{
        if (window.scrollY >= 10) {
            addBg('navbar-two navbar-with-bg')
        } else {
            addBg('navbar-two')
        }
    }
    window.addEventListener('scroll', addBgColor)


  return (
    <div className='navbar flex'>
        <div className="navbar-one flex">
            <div>
                <SiConsul />
            </div>

            <div className='none flex'>
                <li className='flex'> <BsPhoneVibrate /> Support</li>
                <li className='flex'> <AiOutlineGlobal /> Languages</li>
            </div>

            <div className="atb flex">
                <span>Sign In</span>
                <span>Sign Out</span>
            </div>
        </div>

        <div className={noBg}>
            <div className="logo-div">
                <img src={logo} className='logo' alt="Brand logo" />
            </div>

            <div className={active}>
                <ul className="menu flex">
                    <li onClick={removeNavbar} className="list-item">Home</li>
                    <li onClick={removeNavbar} className="list-item">About</li>
                    <li onClick={removeNavbar} className="list-item">Offers</li>
                    <li onClick={removeNavbar} className="list-item">Seats</li>
                    <li onClick={removeNavbar} className="list-item">Destinations</li>
                </ul>

                <button className="btn flex btn-one">
                    Contact
                </button>
            </div>

            <button className="btn flex btn-two">
                Contact
            </button>

            <div onClick={showNavbar} className="toggle-icon">
                <CgMenuGridO className='icon' />
            </div>
        </div>
    </div>
  )
}

export default Navbar
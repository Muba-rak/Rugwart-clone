import React from 'react'
import './Navbar.css'
import Logo from './images/Logo.png'

const Navbar = () => {
    let url = ''
    return (
        <div className='Navbar'>
            <div className='Navbar_left'>
                <img src= {Logo} alt='logo' />
            </div>
            <div className='Navbar_centre'>
                <a href= {url}>Features</a>
                <a href= {url}>Contacts</a>
                <a href= {url}>Pricing</a>
                <a href= {url}>About Us</a>
                <a href= {url}>Plus</a>
            </div>
            <div className='Navbar_right'>
                <a href= {url}>Login</a>
                <button id='getstartedbtn'>Get Started</button>
            </div>
            
        </div>
    )
}

export default Navbar

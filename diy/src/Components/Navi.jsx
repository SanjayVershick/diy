import React from 'react'
import logo from '../assets/logo1.png';
import './Navi.css';
const Navi = () => {
  return (
    <div classname="navi">
        <div className="navbar">
        <img src={logo} alt="Craft Logo" /> {/* Logo */}
        <h1>DIY CRAFTS STORE</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Community">Community</a></li>
          <li><a href="/aboutus">AboutUs</a></li>
          <li><a href="/Contact">Contact</a></li>
          
          
        </ul>
      </div>
    </div>
  )
}

export default Navi
import React from 'react'
import logo from "../Assets/logo.png"
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className='list'>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navbar
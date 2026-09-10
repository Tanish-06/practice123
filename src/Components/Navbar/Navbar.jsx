import React from 'react'
import logo from '../../assets/IMAGES/logo.jpg'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <h2>My Notes App</h2>
    </div>
  )
}

export default Navbar

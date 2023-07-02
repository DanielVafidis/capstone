import React from 'react'
import Logo from '../icons_assets/Logo.svg';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='tm'><img src={Logo} alt="Little Lemon Restaurant Logo" /></div>
      <div className="menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/">Reservations</a></li>
          <li><a href="/">Order&nbsp;Online</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

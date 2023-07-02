import React from 'react'
import Logo from './icons_assets/Logo .svg'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div><img src={Logo} alt="Little Lemon" /></div>
        <div className='footer-nav'>
          <div>
            <h4>Doormat Navigation</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </div>
          <div>
            <h4>Social Media Links</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
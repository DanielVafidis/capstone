import React from 'react';
import Nav from './Nav';
import Logo from './icons_assets/Logo.svg';

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <Nav/>
    </header>
  )
}

export default Header

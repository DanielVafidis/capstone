import React from 'react';
import headerimg from "./icons_assets/restaurantfood.jpg";


const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
        <div className="presentation col-12 col-md-6">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="col-12 col-md-6"><img src={headerimg} alt="" /></div>
        </div>
      </div>
    </header>
  )
}

export default Header

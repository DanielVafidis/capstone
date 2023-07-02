import React from 'react'

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className="container specials">
          <div className="row specials-header">
            <div className="title-cta">
              <h2>Specials</h2>
              <button className="cta-ornlinemenu">Online Menu</button>
            </div>
          </div>
          <div className="row specials-list">
            <div className="specials-card col-12 col-md-6 col-lg-4">
              <div className="scard">
                <img src="" alt="" />
                <div className="card-content">
                  <h4>Greek Salad</h4>
                  <span>$12.99</span>
                  <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                </div>
                <div className="card-button">
                  <span>order for delivery</span>
                </div>
              </div>
            </div>
            <div className="specials-card col-12 col-md-6 col-lg-4">
              <div className="scard">
                <img src="" alt="" />
                <div className="card-content">
                  <h4>Bruschetta</h4>
                  <span>$5.99</span>
                  <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                </div>
                <div className="card-button">
                  <span>order for delivery</span>
                </div>
              </div>
            </div>
            <div className="specials-card col-12 col-md-6 col-lg-4">
              <div className="scard">
                <img src="" alt="" />
                <div className="card-content">
                  <h4>Bruschetta</h4>
                  <span>$5.99</span>
                  <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                </div>
                <div className="card-button">
                  <span>order for delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials">
          <div className="container">
            <div className="row">
              <h1>What our customers say</h1>
            </div>
            <div className="row">
              <div className="t-card col-6 col-md-4 col-lg-3"><span className="rating"></span><div className="t-user"><img src="" alt="" /><span className="name">Daniel Vafidis</span><span className="handle">@username</span></div><div className="comment"><p>Lorem ipsum dolor sit amet</p></div></div>
              <div className="t-card col-6 col-md-4 col-lg-3"><span className="rating"></span><div className="t-user"><img src="" alt="" /><span className="name">Daniel Vafidis</span><span className="handle">@username</span></div><div className="comment"><p>Lorem ipsum dolor sit amet</p></div></div>
              <div className="t-card col-6 col-md-4 col-lg-3"><span className="rating"></span><div className="t-user"><img src="" alt="" /><span className="name">Daniel Vafidis</span><span className="handle">@username</span></div><div className="comment"><p>Lorem ipsum dolor sit amet</p></div></div>
              <div className="t-card col-6 col-md-4 col-lg-3"><span className="rating"></span><div className="t-user"><img src="" alt="" /><span className="name">Daniel Vafidis</span><span className="handle">@username</span></div><div className="comment"><p>Lorem ipsum dolor sit amet</p></div></div>
            </div>
          </div>
        </div>
        <div className="littlelemon">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6"><h2>Little Lemon</h2><h4>Chicago</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
              <div className="col-12 col-md-6"><img src="" alt="" /><img src="" alt="" /></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Homepage
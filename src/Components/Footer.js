import React from 'react'
import './Footer.css'
import "../Assets/google.png"
import "../Assets/facebook.png"
import "../Assets/twitter.png"
import "../Assets/instagram.png"
import "../Assets/get-on-gp.png"
import "../Assets/get-on-appstore.png"

function Footer() {
  return (
    <div className='footer'>
      <div className="row1">
        <div className="col1">
          <h2 className='heading className="h2"'>Minesweeper</h2>
          <p>Lets play!</p>
          <br/>
          <p >Contact us: +12 345 6789</p>
          <br/> 
          <div className="inner-col1">
              <div className="icon-btn">
                  <img className="icons" src={require('../Assets/google.png')} alt="google icon"/>
              </div>
              <div className="icon-btn">
                  <img className="icons" src={require('../Assets/facebook.png')}  alt="facebook icon"/>
              </div>
              <div className="icon-btn">
                  <img className="icons" src={require('../Assets/twitter.png')} alt="twitter icon"/>
              </div>
              <div className="icon-btn">
                  <img className="icons" src={require('../Assets/instagram.png')} alt="instagram icon"/>
              </div>
          </div>
        </div>
        <div className="col2">
            <h2 className="h2">Who are we?</h2>
            <h4>Home</h4>
            <h4>About us</h4>
            <h4>Careers</h4>
            <h4>Vision</h4>
        </div>
        <div className="col3">
            <h2 className="h2">Support</h2>
            <h4>Contact</h4>
            <h4>FAQ</h4>
            <h4>Help</h4>
            <h4>User Guide</h4>
        </div>
        <div className="col4">
            <h2 className="h2">Useful links</h2>
            <h4>My Profile</h4>
            <h4>Blogs</h4>
            <h4>Events</h4>
            <h4>Services</h4>
        </div>
        <div className="col5">
            <img className="get-on" src={require('../Assets/get-on-gp.png')} alt='get on '/>
            <img className="get-on" src={require('../Assets/get-on-appstore.png')} alt="get on appstore"/>
        </div>
      </div>
      <br/><br/>
      <hr/>
      <div className="row2">
          <h2 className="row2h2">Have a nice day!😊</h2>
          <div className="inner-row">
              <h3>Terms & Conditions</h3>
              <h3>|</h3>
              <h3>Services</h3>
              <h3>|</h3>
              <h3>Privacy</h3>
          </div>
          <h3 className="row2h3">©2022 Minesweeper Inc.</h3>
          <br/>
          <br/>
      </div>
    </div>
  )
}

export default Footer

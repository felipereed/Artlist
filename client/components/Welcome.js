import React, { Component } from "react";
import { Link } from "react-router-dom";
import '/Welcome.css'

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <div className='welcome-header-links'>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className='welcome-image-container'>
          <img src='/images/logo.png' alt='logo'></img>
        </div>
        <div className='welcome-sign-up-button'>
          <Link to='/sign-up'><button>Sign Up</button></Link>
        </div>
        <div className='welcome-log-in-button'>
          <Link to='/log-in'><p>Already a member? Log in</p></Link>
        </div>
        <div className='welcome-browse-link'>
          <Link to='/home'><p>Browse</p></Link>
        </div>
        <div className='welcome-app-description'>
          <p>
            <em><strong>ARTlist Marketplace</strong></em> is an online platform that allows striving independent artists to showcase and sell their original pieces in their own terms.
          </p>
          <div>
            <img src='/images/github.png' alt='github link'></img>
            <img src='/images/linkedin.png' alt='linkedin link'></img>
            <img src='/images/email.png' alt='send email link'></img>
            <img src='/images/instagram.png' alt='instagram link'></img>
          </div>
        </div>
      </div>
    );
  }
}

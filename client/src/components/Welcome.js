import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Welcome.css'
import Footer from './shared/Footer'


export default class Welcome extends Component {
  render() {
    return (
      <div>
        <div className='welcome-header-links'>
          <a className='welcome-deader-text' href="#description">About</a>
          <a className='welcome-deader-text' href="#description">Contact</a>
        </div>
        <div className='welcome-image-container'>
          <img src='/images/logo.png' alt='logo'></img>
        </div>
        <div className='welcome-button-container'>
          <Link to='/sign-up'><button className='welcome-sign-up-button'>Sign up</button></Link>
        </div>
        <div>
          <Link className='welcome-log-in-link' to='/log-in'><p className='welcome-log-in-link-text'>Already a member? Log in</p></Link>
        </div>
        <div>
          <Link className='welcome-browse-link' to='/home'><p>Browse</p></Link>
        </div>
        <div id='description' className='welcome-app-description'>
          <p className='welcome-app-description-text'>
            <em><strong>ARTlist Marketplace</strong></em> is an online platform that allows striving independent artists to showcase and sell their original pieces in their own terms.
          </p>
          <div className='welcome-footer'>
           <Footer />
          </div>
        </div>
      </div>
    );
  }
}

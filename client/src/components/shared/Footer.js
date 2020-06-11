import React, { Component } from "react";
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-image-container'>
        <img src="/images/github.png" alt="github link"></img>
        <img src="/images/linkedin.png" alt="linkedin link"></img>
        <img src="/images/email.png" alt="send email link"></img>
        <img src="/images/instagram.png" alt="instagram link"></img>
      </div>
    );
  }
}

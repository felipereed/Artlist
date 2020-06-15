import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-image-container">
        <div>
          <a href='https://github.com/felipereed' target="_blank">
            <img className="footer-icons" src="/images/github.png" alt="github link"></img>
          </a>
          <a href='www.linkedin.com/in/felipereed' target='_blank'>
            <img className="footer-icons" src="/images/linkedin.png" alt="linkedin link"></img>
          </a>
          <a href='mailto:contactfelipelins@gmail.com'>
            <img className="footer-icons" src="/images/email.png" alt="send email link"></img>
          </a>
          <a href='https://www.instagram.com/artlistmarketplace/' target='_blank'>
          <img className="footer-icons" src="/images/instagram.png" alt="instagram link"></img>
          </a>
        </div>
      </div>
    );
  }
}

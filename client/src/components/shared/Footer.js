import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    const welcomeFooterClass = (this.props.welcomeFooter) ? 'footer-image-container-welcome' : 'footer-image-container'
    return (
      <div className={welcomeFooterClass}>
        <div>
          <a href='https://github.com/felipereed/Artlist' target="_blank">
            <img className="footer-icons" src="/images/github3.png" alt="github link"></img>
          </a>
          <a href='https://www.linkedin.com/in/felipereed' target='_blank'>
            <img className="footer-icons" src="/images/linkedin.png" alt="linkedin link"></img>
          </a>
          <a href='mailto:contactfelipelins@gmail.com'>
            <img className="footer-icons" src="/images/email.png" alt="send email link"></img>
          </a>
          <a href='https://medium.com/@contactfelipelins/artlist-marketplace-a74d0ee97fae' target='_blank'>
          <img className="footer-icons" src="/images/medium.png" alt="instagram link"></img>
          </a>
        </div>
      </div>
    );
  }
}

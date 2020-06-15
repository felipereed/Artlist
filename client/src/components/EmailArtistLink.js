import React, { Component } from "react";
import "./EmailArtistLink.css";

export default class EmailArtistLink extends Component {
  render() {
    const email = `mailto:${this.props.email}?subject=ARTlist: ${this.props.name} inquiry.&body=Hi, I saw your ${this.props.name} piece on ARTlist, and I would like to buy it. Can you please send me some information? Thanks!`
    const email2 = `mailto:${this.props.email}?subject=ARTlist: ${this.props.name} inquiry.&body=Hi, ${this.props.name}.%0D%0A %0D%0A I would like to know more about your work.`
    return (
      <div>
        <a
          className="email-artist-link"
          href={(this.props.emailProductDetails) ? email : email2}
        >
          Email artist for info
        </a>
      </div>
    );
  }
}

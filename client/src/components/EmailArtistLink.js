import React, { Component } from "react";
import "./EmailArtistLink.css";

export default class EmailArtistLink extends Component {
  render() {
    return (
      <div>
        <a
          className="email-artist-link"
          href={`mailto:${this.props.email}?subject=ARTlist: ${this.props.name} inquiry.&body=Hi, I saw your ${this.props.name} piece on ARTlist, and I would like to buy it. Can you please send me some information? Thanks!`}
        >
          Email artist for info
        </a>
      </div>
    );
  }
}

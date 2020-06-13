import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header handleLogOut={this.props.handleLogOut} currentUser={this.props.currentUser} />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

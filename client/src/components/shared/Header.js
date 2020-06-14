import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = {
    hiddenDropdown: 'header-hide-dropdown'
  }
  toggleDropdown = () => {
    if (this.state.hiddenDropdown == '') {
      this.setState({
        hiddenDropdown: 'header-hide-dropdown'
      })
    } else {
      this.setState({
        hiddenDropdown: ''
      })
    }
  }
  render() {
    const userLoggedIn = this.props.currentUser;
    return (
      <div className="header-image-container">
        <Link className="header-icons-home-link" to="/home">
          <img
            className="header-icons-home-image"
            src="/images/homelogo.png"
            alt="home link"
          ></img>
        </Link>
        <img
          onClick={this.toggleDropdown}
          className="header-icons"
          src="/images/account.png"
          alt="account link"
        ></img>
        <div className={`header-dropdown-menu ${this.state.hiddenDropdown}`}>
          {userLoggedIn ? (
            //if user is logged in
            <div>
              <Link to="/create" className="header-menu-links">
                <div className="header-name-and-icons">
                  <p>Sell your art</p>
                  <img
                    className="header-menu-icons"
                    src="/images/sell.png"
                    alt="sell your item"
                  ></img>
                </div>
              </Link>
              <hr className="header-dropdown-divider" />
              <Link
                to={`/${this.props.currentUser.id}/artist`}
                className="header-menu-links"
              >
                <div className="header-name-and-icons">
                  <p>View your items</p>
                  <img
                    className="header-menu-icons"
                    src="/images/view.png"
                    alt="sell your item"
                  ></img>
                </div>
              </Link>
              <hr className="header-dropdown-divider" />
              <Link
                to='/welcome'
                onClick={this.props.handleLogOut}
                className="header-menu-links"
              >
                <div className="header-name-and-icons">
                  <p>Log out</p>
                  <img
                    className="header-menu-icons"
                    src="/images/exit.png"
                    alt="sell your item"
                  ></img>
                </div>
              </Link>
            </div>
            // if user is not logged in
          ) : (
            <div>
              <Link to='/welcome' className="header-menu-links">
                <div className="header-name-and-icons">
                  <p>Sign up/Log in</p>
                  <img
                    className="header-menu-icons"
                    src="/images/register.png"
                  ></img>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className='header-image-container'>
        <Link to='/home'>
        <img className='header-icons' src='images/home.png' alt='home link'></img>
        </Link>
        <img className='header-icons' src='images/account.png' alt='account link'></img>
        <div className='header-dropdown-menu'>
          <div>
            <Link className='header-menu-links'>
              <div className='header-name-and-icons'>
                <p>Sell your art</p>
                <img className='header-menu-icons' src='images/sell.png' alt='sell your item'></img>
              </div>
            </Link>
            <hr className="header-dropdown-divider" />
            <Link className='header-menu-links'>
              <div className='header-name-and-icons'>
                <p>View your items</p>
                <img className='header-menu-icons' src='images/view.png' alt='sell your item'></img>
              </div>
            </Link>
            <hr className="header-dropdown-divider" />
            <Link className='header-menu-links'>
              <div className='header-name-and-icons'>
                <p>Log out</p>
                <img className='header-menu-icons' src='images/exit.png' alt='sell your item'></img>
              </div>
            </Link>
          </div>
          <div>

          </div>
        </div>
      </div>
    )
  }
}

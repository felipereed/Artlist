import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header-image-container'>
        <img className='header-icons' src='images/home.png' alt='home link'></img>
        <img className='header-icons' src='images/account.png' alt='account link'></img>
      </div>
    )
  }
}

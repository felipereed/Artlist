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
      </div>
    )
  }
}

import React, { Component } from 'react'
import CategoryList from './CategoryList'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <CategoryList />
        <hr className='home-divider' />
      </div>
    )
  }
}

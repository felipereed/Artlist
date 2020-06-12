import React, { Component } from 'react'
import './CategoryList.css'

export default class CategoryList extends Component {
  categories = [
    "/images/categories/Group6.png",
    "/images/categories/Group7.png",
    "/images/categories/Group8.png",
    "/images/categories/Group9.png",
    "/images/categories/Group10.png",
    "/images/categories/Group11.png",
    "/images/categories/Group12.png"

  ]
  render() {
    return (
      <div>
        <div className='categorylist-title'>
          <h2>Categories</h2>
        </div>
        <div className='categorylist-container'>
          {this.categories.map((category) => 
            <div className='categorylist-horizontal-scroll' key={category}
              style={{
              backgroundImage: `url(${category})`
            }}
            >
              
            </div>
          )}
        </div>
      </div>
    )
  }
}

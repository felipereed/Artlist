import React, { Component } from 'react'
import './CategoryList.css'

export default class CategoryList extends Component {
  categories = [
    "/images/categories/applique.png",
    "/images/categories/calligraphy.png",
    "/images/categories/ceramic.png",
    "/images/categories/crocheting.png",
    "/images/categories/drawing.png",
    "/images/categories/felt-making.png",
    "/images/categories/flower-crafts.png",
    "/images/categories/garments.png",
    "/images/categories/glass-art.png",
    "/images/categories/grafitti.png",
    "/images/categories/lace-making.png",
    "/images/categories/leatherwork.png",
    "/images/categories/macrame.png",
    "/images/categories/metal-craft.png",
    "/images/categories/mixed-media.png",
    "/images/categories/needlework.png",
    "/images/categories/paper-craft.png",
    "/images/categories/photography.png",
    "/images/categories/poster.png",
    "/images/categories/pottery.png",
    "/images/categories/quilting.png",
    "/images/categories/sculpture.png",
    "/images/categories/stone-crafting.png",
    "/images/categories/tapestry.png",
    "/images/categories/textiles.png",
    "/images/categories/weaving.png",
    "/images/categories/wood-craft.png",
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

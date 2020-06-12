import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    // const product = this.props.product
    const product = {
      image_url: 'https://i.imgur.com/hVwi47j.jpg"',
      name: 'test',
      price: '50'
    }
    return (
      <div className='product-container'>
        <div className='product-image-container'>
          <img src={product.image_url} alt='product image'></img>
        </div>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>By</p>
      </div>
    )
  }
}

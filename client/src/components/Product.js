import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

export default class Product extends Component {
  render() {
    // const product = this.props.product
    const product = {
      image_url: 'https://i.imgur.com/FpSahC6.png',
      name: 'test',
      price: '50',
      username: 'Felipe'
    }
    return (
      <div className='product-container'>
        <div className='product-image-container'>
          <img className='product-image' src={product.image_url} alt='product image'></img>
        </div>
        <div className='product-info'>
        <p>{product.name}</p>
        <p>${product.price}</p>
        <p>By {product.username}</p>
        </div>
        <Link className='product-more-details-link' to={`/${product.id}/details`} >More details</Link>
      </div>

      
    )
  }
}

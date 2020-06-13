import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductDetails extends Component {
  render() {
    const product = {
      image_url: "https://i.imgur.com/hVwi47j.jpg",
      name: "Picture 01",
      price: "$100",
      username: "felipe",
      id: "1"
    }
    return (
      <div className='product-container'>
        <div className='product-image-container'>
          <img className='product-image' src={product.image_url} alt='product image'></img>
        </div>
        <div className='product-info'>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>By {product.username}</p>
        </div>
        <Link className='product-more-details-link' to={`/${product.id}/details`} >More details</Link>
      </div>
    )
  }
}

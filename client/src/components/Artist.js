import React, { Component } from 'react'
import './Artist.css'
import { getProductsByUser } from '../services/product';
import Product from './Product'

export default class Artist extends Component {
  state = {
    products: []
  }
  async componentDidMount() {
    const products = await getProductsByUser(this.props.userId);
    this.setState({ products: products });
  }
  render() {
    return (
      <div>
        <div className="artist-products">
          {this.state.products.map((item, key) => (
            <Product key={key} product={item} />
          ))}
        </div>
      </div>
    )
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../services/product";
import './ProductDetails.css'

export default class ProductDetails extends Component {
  state = {
    product: null,
  };

  async componentDidMount() {
    const product = await getProduct(this.props.productId);
    console.log(product);
    
    this.setState({ product: product });
  }

  render() {
    const product = this.state.product;

    return (
      <>
        {this.state.product ? (
          <div className="product-details-container">
            <div className="product-details-title">
              <p>{product.name}</p>
            </div>
          
            <div className="product-detail-image-container">
              <img
                className="product-details-image"
                src={product.image_url}
                alt=""
              ></img>
            </div>
            <div className="product-details-info">
              <p>{product.price}</p>
              <p>By {product.username}</p>
            </div>
            <Link
              className=""
              to={`/${product.id}/details`}
            >
              More details
            </Link>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  }
}

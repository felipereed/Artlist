import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../services/product";

export default class ProductDetails extends Component {
  state = {
    product: null,
  };

  async componentDidMount() {
    const product = await getProduct(this.props.productId);
    this.setState({ product: product });
  }

  render() {
    const product = this.state.product;

    return (
      <>
        {this.state.product ? (
          <div className="product-container">
            <div className="product-image-container">
              <img
                className="product-image"
                src={product.image_url}
                alt="product image"
              ></img>
            </div>
            <div className="product-info">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>By {product.username}</p>
            </div>
            <Link
              className="product-more-details-link"
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

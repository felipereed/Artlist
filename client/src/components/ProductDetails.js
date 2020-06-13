import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../services/product";
import './ProductDetails.css'
import EmailArtistLink from "./EmailArtistLink";

export default class ProductDetails extends Component {
  state = {
    product: null,
  };

  async componentDidMount() {
    const product = await getProduct(this.props.productId);
    console.log(product);
    
    this.setState({ product: product });
  }

  handleProductDelete = async (e) => {
    // call api to delete product

    // refresh the artist product list
  }

  artistLoggedInRender(productId) {
  return (
    <div className='product-details-edit-delete'>
      <Link to={`/${productId}/edit`}><button className="product-details-submit-button">Edit</button></Link>
      <button className="product-details-submit-button" onClick={this.handleProductDelete}>Delete</button>
    </div>
    
  )
  } 
  artistNotLoggedInRender(product) {
    return (
      <div>
        <EmailArtistLink email={product.email} name={product.name} />
        <Link className="" to={`/${product.user_id}/artist`}>
      <button className='product-details-submit-button'>Artist's Page</button>
    </Link>
      </div>
    )
  }

  artistPage(productUserId) {
    return this.props.currentUser && this.props.currentUser.id == productUserId
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
            <div className="product-datails-category">
              <p>{product.category_name}</p>
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
            {(this.artistPage(product.user_id)) ? this.artistLoggedInRender(product.id) : this.artistNotLoggedInRender(product) }
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  }
}

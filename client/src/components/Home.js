import React, { Component } from "react";
import CategoryList from "./CategoryList";
import "./Home.css";
import Product from "./Product";
import { getProducts, getProductsByCategory } from "../services/product";

export default class Home extends Component {
  state = {
    productsOnDisplay: [],
    hiddenProducts: [],
    filteredByCategory: false
  };

  getAllProducts = async () => {
    const products = await getProducts();
    this.setState({
      productsOnDisplay: products.splice(0, 20),
      hiddenProducts: products.splice(0)
    });
    this.setState({ filteredByCategory: false })
  };

  handleGetProductsByCategory = async (id) => {
    const products = await getProductsByCategory(id)
    this.setState({
      productsOnDisplay: products, hiddenProducts: []
    })
    this.setState({ filteredByCategory: true })
  }

  moreProducts = () => {
    if (this.state.hiddenProducts.length > 0) {
      // getting the hidden products and splicing out the next 10 to display
      let hiddenProducts = this.state.hiddenProducts;
      let productsToDisplay = hiddenProducts.splice(0, 20);
      // getting the currently displayed products and pushing the 20 I just spliced
      let productsOnDisplay = this.state.productsOnDisplay;
      let results = productsOnDisplay.concat(productsToDisplay);
      //updating the state with a new array of hidden products and new array of displayed products
      this.setState({
        hiddenProducts: hiddenProducts,
        productsOnDisplay: results
      });
    }
  };

  async componentDidMount() {
    await this.getAllProducts();
  }

  async componentDidUpdate(prev) {    
    if (this.props.location != prev.location) {
      await this.getAllProducts()
    }
  }

  render() {
    return (
      <div className='home-container'>
        <CategoryList handleGetProductsByCategory={this.handleGetProductsByCategory}/>
        <hr className="home-divider" />
        {(this.state.filteredByCategory) ? 
          <div className="home-go-back-link">
            <img src='/images/goback.png' alt='go back button' onClick={this.getAllProducts}></img>
            <p>View All Products</p>
          </div> : 
        <></>}
        <div className="home-products">
          {this.state.productsOnDisplay.map((item, key) => (
            <Product key={key} product={item} />
          ))}
        </div>
        {this.state.hiddenProducts.length == 0 ? (
          <div></div>
        ) : (
          <div>
            <button className="home-more-button" onClick={this.moreProducts}>More products</button>
          </div>
        )}
      </div>
    );
  }
}

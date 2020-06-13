import React, { Component } from "react";
import CategoryList from "./CategoryList";
import "./Home.css";
import Product from "./Product";
import { getProducts } from "../services/product";

export default class Home extends Component {
  state = {
    productsOnDisplay: [],
    hiddenProducts: [],
  };

  getAllProducts = async () => {
    const products = await getProducts();
    this.setState({ productsOnDisplay: products.splice(0, 10) });
    this.setState({ hiddenProducts: products.splice(0) });
  };

  moreProducts = () => {
    if (this.state.hiddenProducts.length > 0) {
      // getting the hidden products and splicing out the next 10 to display
      let hiddenProducts = [this.state.hiddenProducts];
      let productsToDisplay = hiddenProducts.splice(0, 10);
      // getting the currently displayed products and pushing the 10 I just spliced
      let productsOnDisplay = [this.state.productsOnDisplay];
      productsOnDisplay.push(productsToDisplay);
      //updating the state with a new array of hidden products and new array of displayed products
      this.setState({ hiddenProducts: hiddenProducts });
      this.setState({ productsOnDisplay: productsOnDisplay });
    }
  };

  async componentDidMount() {
    await this.getAllProducts();
  }

  async componentDidUpdate(prev) {
    console.log(this.props.location);
    console.log([prev.location]);
    
    
    if (this.props.location != prev.location) {
      await this.getAllProducts()
    }
  }

  render() {
    return (
      <div>
        <CategoryList />
        <hr className="home-divider" />
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

import React, { Component } from "react";
import CategoryList from "./CategoryList";
import "./Home.css";
import Product from "./Product";

export default class Home extends Component {
  render() {
    return (
      <div>
        <CategoryList />
        <hr className="home-divider" />
        <div className='home-products'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    );
  }
}

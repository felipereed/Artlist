import React, { Component } from "react";
import "./Artist.css";
import { getProductsByUser } from "../services/product";
import Product from "./Product";
import { getUser } from "../services/user";
import EmailArtistLink from './EmailArtistLink'
export default class Artist extends Component {
  state = {
    products: [],
    username: "",
    pronouns: "",
    email: "",
  };
  async componentDidMount() {
   await this.initializePage()
  }

  async initializePage() {
     //calls products api to get products based on user id
     const products = await getProductsByUser(this.props.userId);
     this.setState({ products: products });
     //calls users api to get users specific info
     const user = await getUser(this.props.userId);
     this.setState({ username: user.username });
     this.setState({ pronouns: user.pronouns });
     this.setState({ email: user.email });
  }

  refreshArtistProducts = async() => {

  }

  render() {
    return (
      <div className='artist-page-container'>
        <div>
          <h1 className='artist-title'>
            {this.state.username}{" "}
            {this.state.pronouns ? <em>{'(' + this.state.pronouns + ')'}</em> : <></>}
          </h1>
          <EmailArtistLink email={this.state.email} name={this.state.username}/>
        </div>
        <div className="artist-products">
          {this.state.products.map((item, key) => (
            <Product key={key} product={item} />
          ))}
        </div>
      </div>
    );
  }
}

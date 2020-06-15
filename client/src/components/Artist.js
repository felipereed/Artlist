import React, { Component } from "react";
import "./Artist.css";
import { getProductsByUser } from "../services/product";
import Product from "./Product";
import { getUser } from "../services/user";
import EmailArtistLink from "./EmailArtistLink";
export default class Artist extends Component {
  state = {
    products: [],
    username: "",
    pronouns: "",
    email: "",
    website: "",
  };
  async componentDidMount() {
    await this.initializePage();
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
    this.setState({ website: user.website });
  }

  refreshArtistProducts = async () => {};

  render() {
    return (
      <div className="artist-page-container">
        <div className='artist-business-card'>
          <h1 className="artist-title">
            {this.state.username}{" "}
            {this.state.pronouns ? (<em>{"(" + this.state.pronouns + ")"}</em>) : (<></>)}{" "}
          </h1>
          <hr />
          {this.state.website ? (
            <div className='artist-info-container'>
              <img className='artist-contact-image' src='/images/magritte.png'></img>
              <a className="artist-page-website" href={this.state.website} target="_blank">Artist's Website</a>
            </div>) : (<></>)}
          <div className="artist-website-email-container">
            <img className=".artist-page-email-image" src='/images/frida.png'></img>
            <div className='artist-page-email-artist-link'>
              <EmailArtistLink email={this.state.email} name={this.state.username}/>
            </div>
          </div>
        </div>
        <div className="artist-products">
          {this.state.products.map((item, key) => (<Product key={key} product={item} />))}
        </div>
      </div>
    );
  }
}

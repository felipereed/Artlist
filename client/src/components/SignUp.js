import React, { Component } from "react";
import "./SignUp.css";
import { Redirect } from "react-router-dom";

export default class SignUp extends Component {
  state = {
    username: "",
    pronouns: "",
    email: "",
    website: "",
    password: "",
    confirmPassword: "",
    redirect: false
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleCreateUser({
      username: this.state.username,
      pronouns: this.state.pronouns,
      email: this.state.email,
      website: this.state.website,
      password: this.state.password
    })
    this.setState({ 
      redirect: true
    })
    this.setState({
      username: "",
      pronouns: "",
      email: "",
      website: "",
      password: "",
      confirmPassword: "",
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
    return (
      <div>
        <img src="images/logo.png" alt="logo"></img>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            placeholder="username"
            type="text"
            onChange={this.handleChange}
          />
          <input
            name="pronouns"
            placeholder="pronouns"
            type="text"
            onChange={this.handleChange}
          />
          <input
            name="email"
            placeholder="email"
            type="text"
            onChange={this.handleChange}
          />
          <input
            name="website"
            placeholder="website"
            type="text"
            onChange={this.handleChange}
          />
          <input
            name="password"
            placeholder="password"
            type="password"
            onChange={this.handleChange}
          />
          <input
            name="confirmPassword"
            placeholder=" confirm password"
            type="password"
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

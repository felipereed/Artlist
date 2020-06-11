import React, { Component } from "react";
import "./SignUp.css";

export default class SignUp extends Component {
  state = {
    username: "",
    pronouns: "",
    email: "",
    website: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // handleRegisterSubmit(this.state);
    window.history.push("/home");
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

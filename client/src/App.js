import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Welcome from "./components/Welcome";
import CreateProduct from "./components/CreateProduct"
import Home from "./components/Home"
import SignUp from "./components/SignUp";
import Layout from "./components/shared/Layout";
import { createUser, validateUser } from "./services/auth";
import { getCategories } from "./services/category"
import LogIn from "./components/LogIn";

export default class App extends Component {
  state = {
    currentUser: null,
    categories: []
  }

  async componentDidMount() {
    const categories = await getCategories()
    const options = categories.map((category) => {
      return { value: category.id, label: category.name }
    })
    console.log(options);
    
    this.setState({ categories: options })
  }

  handleCreateUser = async (user) => {
    const currentUser = await createUser(user)
    this.setState({ currentUser: currentUser })
  }

  handleValidateUser = async (user) => {
    console.log(user);
    
    const currentUser = await validateUser(user)
    console.log(currentUser);
    
    this.setState({ currentUser: currentUser })
  }



  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Redirect from="/" exact to="/welcome" />
            <Route path="/welcome" render={() => <Welcome />}></Route>
            <Route
              path="/sign-up"
              render={() => (
                <Layout>
                  <SignUp handleCreateUser={this.handleCreateUser}/>
                </Layout>
              )}
            ></Route>
            <Route
              path="/log-in"
              render={() => (
                <Layout>
                  <LogIn handleValidateUser={this.handleValidateUser} />
                </Layout>
              )}></Route>
            <Route
              path="/home"
              render={() => (
                <Layout>
                  <Home />
                </Layout>
              )}></Route>
            <Route path="/:id/details"></Route>
            <Route path="/:id/artist"></Route>
            <Route
              path="/create"
              render={() => (
                <Layout>
                  <CreateProduct categories={this.state.categories} />
                </Layout>
              )}
            ></Route>
            <Route path="/:id/update"></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

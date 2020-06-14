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
import { createUser, validateUser, verifyUser, removeToken } from "./services/auth";
import { getCategories } from "./services/category"
import LogIn from "./components/LogIn";
import { createProduct } from './services/product'
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Artist from './components/Artist'
import Edit from './components/Edit'

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
    this.setState({ categories: options })
    this.handleVerify()
  }

  handleCreateUser = async (user) => {
    const currentUser = await createUser(user)
    this.setState({ currentUser: currentUser })
  }

  handleValidateUser = async (user) => {
    const currentUser = await validateUser(user)
    this.setState({ currentUser: currentUser })
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser })
  }

  handleCreateProduct = async (product) => {
    return await createProduct(product)
  }

  handleLogOut = () => {
    this.setState({
      currentUser: null
    })
    localStorage.clear()
    removeToken()
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
                <Layout handleLogOut={this.handleLogOut} currentUser={this.state.currentUser}>
                  <SignUp handleCreateUser={this.handleCreateUser}/>
                </Layout>
              )}
            ></Route>
            <Route
              path="/log-in"
              render={() => (
                <Layout handleLogOut={this.handleLogOut} currentUser={this.state.currentUser}>
                  <LogIn handleValidateUser={this.handleValidateUser} />
                </Layout>
              )}></Route>
            <Route
              path="/home"
              render={() => (
                <Layout handleLogOut={this.handleLogOut} currentUser={this.state.currentUser}>
                  <Home />
                </Layout>
              )}></Route>
            <Route
              path="/:id/details"
              render={(props) => (
                <Layout handleLogOut={this.handleLogOut} currentUser={this.state.currentUser}>
                  <ProductDetails currentUser={this.state.currentUser} productId={props.match.params.id} />
                </Layout>
              )}></Route>
            <Route
              path="/:id/artist"
              render={(props) => (
                <Layout handleLogOut={this.handleLogOut} currentUser={this.state.currentUser}>
                  <Artist userId={props.match.params.id}/>
                </Layout>
              )}></Route>
            <Route
              path="/create"
              render={() => (
                <Layout handleLogOut={this.handleLogOut} currentUser={this.state.currentUser}>
                  <CreateProduct handleCreateProduct={this.handleCreateProduct} categories={this.state.categories} user={this.state.currentUser}
                  />
                </Layout>
              )}
            ></Route>
            <Route
              path="/:id/edit" render={(props) => (
                <Layout handleLogOut={this.handleLogOut} currentUser={this.state.currentUser}>
                  <Edit productId={props.match.params.id} categories={this.state.categories}/>
                </Layout>
              )}></Route>
            <Route
              path='/w'
              render={() => (
                  <Product />
              )}  
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

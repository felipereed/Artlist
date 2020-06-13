import React, { Component } from 'react'
import './CreateProduct.css'
import { Redirect } from 'react-router-dom'
import Select from 'react-select'

export default class CreateProduct extends Component {
  state = {
    image_url: '',
    name: '',
    category_id: '',
    price: '',
    redirect: false
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  
  handleSelectChange = (e) => {
    this.setState({
      category_id: e.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreateProduct({
      image_url: this.state.image_url,
      name: this.state.name,
      category_id: this.state.category_id,
      price: this.state.price
    })
    this.setState({
      redirect: true
    })
    this.setState({
      image_url: '',
      name: '',
      category_id: '',
      price: '',
    })
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={`/${this.props.user.id}/artist`} />
    }
    return (
      <div>
        <img className='create-logo-container' src='/images/logo.png' alt='logo'></img>
        <form className='create-form-container' onSubmit={this.handleSubmit}>
        <input
            className='create-form'
            name="image_url"
            placeholder="image url"
            type="text"
            onChange={this.handleChange}
          />
          <input
            className='create-form'
            name="name"
            placeholder="name"
            type="text"
            onChange={this.handleChange}
          />
          <div className='create-form-select'>
          <Select
            placeholder="type"
            options={this.props.categories}
            onChange={this.handleSelectChange}
          />
          </div>
          <input
            className='create-form'
            name="price"
            placeholder="price"
            type="text"
            onChange={this.handleChange}
          />
          <button className='create-submit-button' type="submit" value="submit">Post</button>
        </form>
      </div>
    )
  }
}

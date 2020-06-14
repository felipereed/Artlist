import React, { Component } from 'react'
import './Edit.css'
import { Redirect } from 'react-router-dom'
import Select from 'react-select'
import { getProduct, editProduct } from '../services/product'

export default class Edit extends Component {
  state = {
    image_url: '',
    name: '',
    category_id: '',
    price: '',
    id: '',
    user_id: '',
    selectedCategory: null,
    redirect: false
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSelectChange = (e) => {
    this.setState({
      selectedCategory: e
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    editProduct({
      image_url: this.state.image_url,
      name: this.state.name,
      category_id: this.state.selectedCategory.value,
      price: this.state.price,
      id: this.state.id
    })
    this.setState({
      redirect: true
    })
    this.setState({
      image_url: '',
      name: '',
      category_id: '',
      price: '',
      selectedCategory: null
    })
  }
  async componentDidMount() {
    const product = await getProduct(this.props.productId)
    console.log(product.category_id);
    console.log(this.props.categories.find(category => category.value == product.category_id));
    
    
    this.setState({
      image_url: product.image_url,
      name: product.name,
      selectedCategory: this.props.categories.find(category => category.value == product.category_id),
      price: product.price,
      user_id: product.user_id,
      id: product.id
    })
   }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/${this.state.id}/details`} />
    }
    return (
      <div>
        <img className='edit-logo-container' src='/images/logo.png' alt='logo'></img>
        <form className='edit-form-container' onSubmit={this.handleSubmit}>
          <input
            value={this.state.image_url}
            className='edit-form'
            name="image_url"
            placeholder="image url"
            type="text"
            onChange={this.handleChange}
          />
          <input
            value={this.state.name}
            className='create-form'
            name="name"
            placeholder="name"
            type="text"
            onChange={this.handleChange}
          />
          <div className='edit-form-select'>
            <Select
            value={this.state.selectedCategory}  
            placeholder="type"
            options={this.props.categories}
            onChange={this.handleSelectChange}
          />
          </div>
          <input
            value={this.state.price}
            className='create-form'
            name="price"
            placeholder="price"
            type="text"
            onChange={this.handleChange}
          />
          <button className='edit-submit-button' type="submit" value="submit">Apply</button>
        </form>
      </div>
    )
  }
}

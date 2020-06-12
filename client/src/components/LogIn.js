import React, { Component } from 'react'
import './LogIn.css'
import { Redirect } from 'react-router-dom'


export default class LogIn extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleValidateUser({
      username: this.state.username,
      password: this.state.password
    })
    this.setState({
      redirect: true
    })
    this.setState({
      username: '',
      password: ''
    })
  }
  
  render() {
    if (this.state.redirect) {
      return <Redirect to='./home' />
    }
    return (
      <div>
        <img className='login-logo-container' src='images/logo.png' alt='logo'></img>
        <form className='login-form-container' onSubmit={this.handleSubmit}>
          <input
            className='login-form'
            name='username'
            placeholder='username'
            type='text'
            onChange={this.handleChange}
          />
          <input 
            className='login-form'
            name='password'
            placeholder='password'
            type='password'
            onChange={this.handleChange}
          />
          <button className='login-submit-button' type='submit' value='submit'>Log in</button>
        </form>
      </div>
    )
  }
}


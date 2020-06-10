import React from 'react'
import Footer from './Footer'
import Header from './Header'

import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header user={this.props.user} />
        <div>
          {this.props.children}
        </div>
        <Footer user={this.props.user} />
      </div>
    )
  }
}

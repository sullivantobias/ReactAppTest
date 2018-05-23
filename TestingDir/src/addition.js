import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Addition extends Component{
  constructor({a = 2, b = 2}) {
    super()
    this.a = a
    this.b = b
  }

  render () {
    return (
        this.makeAddition()
    )
  }

  makeAddition = () => {return this.a+this.b}
}

export default Addition

import React, {Component} from 'react'
import PropTypes from 'prop-types'

class inputNumber extends Component {

  constructor({numberToAdd}) {

    super();
    this.state = {
      number: 1
    }
    this.numberToAdd = numberToAdd
  }

  render () {
    return(
    <div>
      <button onClick = {() => this.componentWillReceiveProps()}>Increment from {this.numberToAdd}</button>
      <br/>
      <span>{this.state.number}</span>
    </div>
  )
  }

  componentWillReceiveProps () {
    this.setState (prevState => {
      return {number: prevState.number + this.numberToAdd}
    })
  }
}

inputNumber.defaultProps = {
  numberToAdd: 10
}

inputNumber.propTypes = {
  numberToAdd: PropTypes.number.isRequired
};

export default inputNumber

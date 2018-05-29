import React, { Component } from "react";
import PropTypes from "prop-types";

class inputNumber extends Component {
  constructor({ numberToAdd }) {
    super();
    this.state = {
      number: 1
    };
    this.numberToAdd = numberToAdd;
  }

  static defaultProps = {
    numberToAdd: 10
  };

  static propTypes = {
    number: PropTypes.number.isRequired
  };

  render() {
    const { number } = this.state;
    const { numberToAdd } = this.props;
    return (
      <div>
        <button onClick={() => this.componentWillReceiveProps()}>
          Increment from {numberToAdd}
        </button>
        <br />
        <span>{number}</span>
      </div>
    );
  }

  componentWillReceiveProps() {
    this.setState(prevState => {
      return { number: prevState.number + this.numberToAdd };
    });
  }
}

export default inputNumber;

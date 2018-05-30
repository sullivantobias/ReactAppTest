import React from "react";

class List extends React.Component {
  render() {
    return this.loops();
  }

  loops() {
	let indents = [];
    for (let i = 0; i < 10; i++) {
      indents.push(<li key={i}>{i}</li>);
    }
    return <ul>{indents}</ul>;
  }
}

export default List;

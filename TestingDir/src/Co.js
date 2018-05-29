import React from "react";

class Co extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.sendTest()}>Log In</button>
        <button onClick={() => this.sendTest()}>Log Out</button>
      </div>
    );
  }

  sendTest() {
    let first = document.querySelectorAll("button");
    for (let i = 0; i < first.length; i++) {
      i === 0 ? console.log("true") : console.log("false");
    }
  }
}

export default Co;

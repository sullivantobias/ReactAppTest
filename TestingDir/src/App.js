import React, { Component } from "react";
import "./App.css";

import { PrimaryButton } from "./Card.js";
import PrimaryList from "./List.js";
import Connection from "./Co.js";
import List, { Family } from "./mapList.js";
import Texting from "./DefaultTest.js";
import Addition from "./addition.js";
import DefaultInput from "./testLifeCycle.js";

class App extends Component {
  showedElement = element => {
    console.log(element, this);
  };
  render() {
    return (
      <div>
        <PrimaryButton name="Bob" />
        <PrimaryButton name="John" />
        <PrimaryButton name="Troll" />
        <PrimaryButton />

        <PrimaryList />
        <Connection />

        <List />
        <Addition />

        <Addition a={20} b={23} />

        <Texting el={1} text="First Text" onClick={this.showedElement} />
        <Texting el={2} text="Second Text" onClick={this.showedElement} />

        <DefaultInput numberToAdd={3} />

        <DefaultInput />
      </div>
    );
  }
}

export default App;

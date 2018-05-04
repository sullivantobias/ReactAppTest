import React, { Component } from 'react'
import './App.css'

import {PrimaryButton} from './Card.js'
import PrimaryList from './List.js'

class App extends Component {
  render() {
    return (
      <div>
        <PrimaryButton name="Bob"  />
        <PrimaryButton name="John" />
        <PrimaryButton name="Troll"  />
        <PrimaryButton />

        <PrimaryList />
      </div>
      )
  }
}

export default App

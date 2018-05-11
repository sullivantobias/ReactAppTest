import React, { Component } from 'react'
import './App.css'

import {PrimaryButton} from './Card.js'
import PrimaryList from './List.js'
import Connection from './Co.js'
import List, { Family }from './mapList.js'



class App extends Component {
  render() {
    return (
      <div>
        <PrimaryButton name="Bob"  />
        <PrimaryButton name="John" />
        <PrimaryButton name="Troll"  />
        <PrimaryButton />

        <PrimaryList />
        <Connection  />

        <List />
        </div>
      )
  }
}

export default App

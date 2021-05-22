import './App.css';
import React, { Component } from 'react'
import Dices from './components/Dices';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Dices />
      </div>
    )
  }
}

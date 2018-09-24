import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var Style={
      fontSize:80,
      color:'#FF0000'
    }
    return (
      <div className="App">
        <h1 style={Style}>Welcome To Web</h1>
        <h2>{50*8}</h2>
      </div>
    );
  }
}

export default App;

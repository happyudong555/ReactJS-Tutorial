import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Content'
import Contant from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contant />
      </div>
    );
  }
}

class Header extends Component{
  render(){
    return (
      <div>
        Hello Form Header
      </div>
    );
  }
}

export default App;

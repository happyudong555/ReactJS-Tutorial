import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Contant from './Contant';
import Footer from './Footer';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Route path=" " component={App} />
        <Route path="/Header" component={Header} />
        <Route path="/Contant" component={Contant} />
        <Route path="/Footer" component={Footer} />
      </div>
      // <div className="App">
      //   <h2><a href="#">Header</a></h2>
      //   <h2><a href="#">Contant</a></h2>
      //   <h2><a href="#">Footer</a></h2>
      // </div>
    );
  }
}

export default App;

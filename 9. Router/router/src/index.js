import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import Header from './Header';
import Contant from './Contant';
import Footer from './Footer';
const AppWithRouter = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
ReactDOM.render(
    <AppWithRouter />, 
    document.getElementById('root')
);
registerServiceWorker();

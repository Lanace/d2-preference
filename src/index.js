import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

import './index.css';

ReactDOM.render(
  <>
    <Header/>
    <Statistics/>
    <Footer/>
  </>, 
  document.getElementById('root')
);

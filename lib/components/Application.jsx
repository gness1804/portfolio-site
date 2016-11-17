import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

const ReactDOM = require('react-dom');


class Application extends Component {

  render() {
    return (
      <div>
        <Header />
        I am  the main Application.
        <Footer />
      </div>
    );
  }

}


export default Application;

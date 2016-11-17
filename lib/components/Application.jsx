import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const ReactDOM = require('react-dom');


class Application extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }

}


export default Application;

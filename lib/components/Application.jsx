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

// // modules/App.js
// // ...
//   render() {
//     return (
//       <div>
//         <h1>React Router Tutorial</h1>
//         <ul role="nav">
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/repos">Repos</Link></li>
//         </ul>
//
//         {/* add this */}
//         {this.props.children}
//
//       </div>
//     )
//   }
// // ...

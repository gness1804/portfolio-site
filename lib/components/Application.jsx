import React, {Component} from 'react';

const ReactDOM = require('react-dom');

class Application extends Component {

  render() {
    console.log(this.props.children);
    return (
      <div>Hello! This is a test. If I can see this, then React is set up correctly.</div>
    );
  }

}


export default Application;

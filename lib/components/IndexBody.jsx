import React, { Component } from 'react';
import { Link } from 'react-router';

const ReactDOM = require('react-dom');

class IndexBody extends Component {

  render() {
    return (
      <div>
        <div className="page-upper-section">
          <p>
            I am a front-end software engineer, published author, and educator. Feel free to browse my projects below and to <a href="mailto:gnessler@umich.edu" target="_blank">get in touch</a>.
          </p>
        </div>
      </div>
    );
  }

}


export default IndexBody;

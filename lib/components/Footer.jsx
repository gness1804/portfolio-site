import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class Footer extends Component {

  render() {
    return (
      <div>
        <footer className="footer-each-page">
          <a href="https://www.linkedin.com/in/graham-nessler-b9025756" target="_blank">
            <img src="images/linkedin.png" alt="LinkedIn icon." />
          </a>
          <a href="https://github.com/gness1804" target="_blank">
            <img src="images/github.png" alt="GitHub logo" />
          </a>
          <a href="mailto:gnessler@umich.edu" target="_blank">
            <img src="images/gmail.png" alt="Gmail logo." />
          </a>
          <a href="https://twitter.com/gness1804" target="_blank">
            <img src="images/twitter.png" alt="Twitter icon." />
          </a>
        </footer>
      </div>
    );
  }

}


export default Footer;

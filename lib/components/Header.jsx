import React, { Component } from 'react';
const ReactDOM = require('react-dom');

class Header extends Component {

  render() {
    return (
      <div>
        <header className="header-each-page">
          <h1>Graham Nessler</h1>
          <img className="header-photo" src="images/skype-photo-2.jpg" alt="Photo of me in blue shirt." />
          <nav className="nav-bar">
            <section className="dropdown-menu-container">
              <a href="index.html">Home</a>
            </section>
            <section className="dropdown-menu-container">
              <a href="project-menu.html" className="selected">Projects</a>
              <section className="dropdown-menu-actual projects-dropdown">
                <a href="netwerker.html">Netwerker</a>
                <a href="flash-shopper.html">Flash Shopper</a>
                <a href="project-menu.html">Other Projects</a>
              </section>
            </section>
            <section className="dropdown-menu-container">
              <a href="background.html">About Me</a>
              <section className="dropdown-menu-actual background-dropdown">
                <a href="background.html#work-hist">Employment History</a>
                <a href="background.html#education">Education</a>
              </section>
              </section>
              <section className="dropdown-menu-container">
                <a href="https://gness1804.github.io/Personal-Blog/">Blog</a>
              </section>
          </nav>
        </header>
      </div>
    );
  }

}


export default Header;

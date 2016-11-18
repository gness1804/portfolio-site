import React, { Component } from 'react';
import { Link } from 'react-router';

const ReactDOM = require('react-dom');

class Header extends Component {

  render() {
    return (
      <div>
        <header className="header-each-page">
          <Link className="headline-link" to="/">
            <h1>Graham Nessler</h1>
          </Link>
          <img className="header-photo" src="images/skype-photo-2.jpg" alt="Photo of me in blue shirt." />
          <nav className="nav-bar">
            <section className="dropdown-menu-container">
              <Link to="/">
                Home
              </Link>
            </section>
            <section className="dropdown-menu-container">
              <Link to="/projmenu">
                Projects
              </Link>
              <section className="dropdown-menu-actual projects-dropdown">
                <Link to="/netwerker">
                  Netwerker
                </Link>
                <Link to="/flashshopper">
                  Flash Shopper
                </Link>
                <Link to="/projmenu">Other Projects</Link>
              </section>
            </section>
            <section className="dropdown-menu-container">
              <Link to="/aboutme">
                About Me
              </Link>
              <section className="dropdown-menu-actual background-dropdown">
                <Link to="workhist">
                  Employment History
                </Link>
                <Link to="education">
                  Education
                </Link>
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

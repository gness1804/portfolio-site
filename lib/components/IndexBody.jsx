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
        <section className="two-article-control">
         <article className="main-article-half-width proj1">
          <Link to="/netwerker">
            <h3>Netwerker</h3>
          </Link>
           <a href="https://github.com/gness1804/netwerker" target="_blank">
             <h4>(GitHub)</h4>
           </a>
           <img src="images/netwerker.png" alt="Screen shot from Netwerker." />
           <p>
             <a href="https://netwerker-3d622.firebaseapp.com/" target="_blank">Netwerker</a> is a professional networking app, created with Matt Kaufman and Christine Gamble, that allows the user to store contacts, sort them alphabetically, delete them, flag them for followup, and add images. It was created using the toolbox of React, Firebase, Webpack, and Enzyme. For more details, see the <a href="netwerker.html" target="_blank">project page.</a>
           </p>
         </article>
         <article className="main-article-half-width proj2">
           <a href="flash-shopper.html"><h3>Flash Shopper</h3></a>
           <a href="https://github.com/gness1804/grocery-list-react" target="_blank">
             <h4>(GitHub)</h4>
           </a>
           <img src="images/flash-shopper.png" alt="Screenshot." />
           <p>
             <a href="https://grocery-list-caef5.firebaseapp.com/" target="_blank">Flash Shopper</a> is an application created by me independent of the Turing curriculum. It is a grocery list app where users can enter items, sort them, delete them, and populate aisles by category (currently available for 1 location). This app aims to present a smart and sleek alternative to existing grocery apps. For more details, see the <a href="flash-shopper.html" target="_blank">project page.</a>
           </p>
         </article>
        </section>
      </div>
    );
  }

}


export default IndexBody;

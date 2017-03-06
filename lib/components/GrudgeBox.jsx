import React, { Component } from 'react';

class GrudgeBox extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>GrudgeBox</h2>
          <a href="https://github.com/gness1804/grudge-box" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/grudge-box.png" alt="Screenshot." />
            <p>
              This app consists of a place to store grudges and information about the people in question. It was the final exam for Turing School. Check it out <a href="https://grudge-box-0217.herokuapp.com/" target="_blank" rel="noopener noreferrer">live!</a>
           </p>
          </section>
          <section className="project-page-section">
              <h3>What I Learned</h3>
              <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
              <p>
               This final assessment enabled me to solidify my skills with JavaScript, Node, Express, and Selenium testing. It also reaffirmed that I can work well under pressure and produce a solid product.
             </p>
        </section>
      </div>
    );
  }

}


export default GrudgeBox;

import React, { Component } from 'react';

class LoremIpsum extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Lorem Ipsum Generator</h2>
          <a href="https://github.com/gness1804/160gr8-lorem-ipsum-gen" target="_blank" rel="noreferrer noopener">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/lorem-ipsum-screenshot.png" alt="Screenshot." />
            <p>
              This is a fun side project that generates random lorem ipsum related to my cohort at Turing School. It allows the user to specify a word count, add a word to the generator, easily copy text to clipboard via a button, and clear text. It is a useful application to generate humorous lorem ipsum text. Check it out <a href="https://gness1804.github.io/160gr8-lorem-ipsum-gen/" target="_blank" rel="noopener noreferrer">live!</a>
           </p>
          </section>
          <section className="project-page-section">
            <h3>What I Learned</h3>
            <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
            <p>
             This project uses an array of words for the text. I learned a lot about array methods and how to manipulate arrays. This project also enhanced my knowledge of jQuery, since DOM manipuation was a key part of the project.
           </p>
        </section>
      </div>
    );
  }

}


export default LoremIpsum;

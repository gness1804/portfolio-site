import React, { Component } from 'react';
import { Link } from 'react-router'

class NumberGuesserReact extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Number Guesser in React</h2>
          <a href="https://github.com/gness1804/number-guesser-react" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/number-guesser-react.png" alt="Screenshot." />
            <p>
              This is a rebuild of the original <Link to="/number-guesser">Number Guesser.</Link>  It is the same as the original except that it is built in React and has different styling. This project showed how far I had come as a developer, since I was able to built this out myself with relative ease, while the original Number Guesser was quite challenging as a pair project. Check it out <a href="https://gness1804.github.io/number-guesser-react/" target="_blank" rel="noopener noreferrer">live!</a>
           </p>
          </section>
            <section className="project-page-section">
                <h3>What I Learned</h3>
                <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
                <p>
                 This project strengthened my understanding of React and allowed me to revisit random number generation from the original iteration of the project. It also gave me more experience working solo.
               </p>
          </section>
      </div>
    );
  }

}


export default NumberGuesserReact;

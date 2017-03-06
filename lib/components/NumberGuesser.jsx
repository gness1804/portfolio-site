import React, { Component } from 'react';

class NumberGuesser extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Number Guesser</h2>
          <a href="https://github.com/gness1804/number-guesser" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/number-guesser-screen.png" alt="Screenshot." />
            <p>
              I constructed a number guesser program with colleague Kinan Whyte during Module 1 at the Turing School of Software and Design. We created a program with basic functionality, albeit with a few hiccups. Our program accepts a number from the user (default range 0-100) and generates a pseudo-random number which it compares to the user's number. The program tells the user whether his/her number is too low, too high, out of the acceptable range, or not a number (such as text). If the user correctly guesses the computer's number, the program regenerates another pseudo-random value and adjusts the max and min by +10 and -10 respectively. The program also accepts optional max and min values from the user. Upon user submission of these values, the program regenerates a pseudo-random within the new range. Check it out <a href="https://kswhyte.github.io/number-guesser/" target="_blank" rel="noopener noreferrer">live!</a>
           </p>
          </section>
          <section className="project-page-section">
              <h3>Tools Used</h3>
              <p>
              We built this application in vanilla JavaScript, HTML, and CSS. This project improved our understanding of these tools, which would prove especially useful as I would return to vanilla JS for later projects.
             </p>
            </section>
            <section className="project-page-section">
              <h3>What I Learned</h3>
              <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
              <p>
               This was my first Turing project, so I learned a lot about teamwork and got my feet wet with JavaScript. It was a challenging project, but one that build a solid foundation for later projects.
             </p>
          </section>
      </div>
    );
  }

}


export default NumberGuesser;

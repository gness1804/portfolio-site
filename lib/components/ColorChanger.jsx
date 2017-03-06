import React, { Component } from 'react';

class ColorChanger extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Color Changer</h2>
          <a href="https://github.com/gness1804/color-changer" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/color-changer.png" alt="Screenshot." />
            <p>
              This is a simple application that changes the background of the page to a random color when the user clicks a button. The user can also reset the background color to the default (white) by pressing another button. This project successfully makes use of random number generation to randomize rgb colors. Check it out <a href="https://gness1804.github.io/color-changer/" target="_blank" rel="noopener noreferrer">live!</a>
           </p>
          </section>
          <section className="project-page-section">
              <h3>What I Learned</h3>
              <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
              <p>
               I expanded my knowledge of random number generation and how the rgb color system works. This was also my first solo project at Turing, so I gained confidence in my ability to efficiently complete a project on my own.
             </p>
        </section>
      </div>
    );
  }

}


export default ColorChanger;

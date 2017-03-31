import React, { Component } from 'react';

class NumberGuesserJava extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Number Guesser in Java</h2>
          <a href="https://github.com/gness1804/number-guesser-java" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/number_guesser_java.png" alt="Screenshot." />
            <p>
              This was my first project in Java. I built this project using Android Studio. The language and IDE have been a bit of a learning curve, but in the end, I successfully built out all of the features of the <a href="https://github.com/gness1804/number-guesser" target="_blank" rel="noopener noreferrer">original Number Guesser project</a>.
           </p>
          </section>
          <section className="project-page-section">
              <h3>What I Learned</h3>
              <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
              <p>
               I learned some core Java concepts in building this project, such as classes, data types, and how Java works with XML in Android development. I also learned a lot about Android Studio itself and how to construct a simple but effective UI using this tool.
             </p>
        </section>
      </div>
    );
  }

}


export default NumberGuesserJava;

import React, { Component } from 'react';
import { Link } from 'react-router'

class ToDoBox extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>ToDo Box</h2>
          <a href="https://github.com/gness1804/2DoBox-Pivot" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/2do-box.png" alt="Screenshot." />
            <p>
              This is a pivot of the original <Link to="/ideabox">idea box</Link> project. We revised this project by adding features such as ratings for level of importance and filtering by level of importance. Check it out <a href="https://hilarylewis92.github.io/2DoBox-Pivot/" target="_blank" rel="noopener noreferrer">live!</a>
           </p>
         </section>
          <section className="project-page-section">
              <h3>What I Learned</h3>
              <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
              <p>
               This was my first experience in diving into an existing codebase, so it gave me some valuable experience in working with preexisting code and understanding its logic and structure. I also learned a great deal about feature testing, as we used Selenium Webdriver to extensively test the application.
             </p>
        </section>
      </div>
    );
  }

}


export default ToDoBox;

import React, { Component } from 'react';

class Bookmarker extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Bookmarker in Angular</h2>
          <a href="https://github.com/gness1804/bookmarker-in-angular" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/bookmarker-ss.png" alt="Screenshot." />
            <p>
              This is my first project in Angular. It involves a list of bookmarks of sites useful for technical interviews that users can view, add, and delete. There are two main views: one for links, and the other for questions.
           </p>
          </section>
          <section className="project-page-section">
              <h3>What I Learned</h3>
              <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
              <p>
               I learned a lot about how Angular 2 works, its architecture, and debugging it. This project forms a foundation for future work in Angular.
             </p>
        </section>
      </div>
    );
  }

}


export default Bookmarker;

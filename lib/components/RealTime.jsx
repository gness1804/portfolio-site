import React, { Component } from 'react';

class RealTime extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Real Time</h2>
          <a href="https://github.com/gness1804/real-time" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/real-time-screen-shot-1.png" alt="Screenshot." />
            <p>
              This is an application that allows a user to create a question and then post the question to a live channel, where users (who must authenticate with Github) can post answers. The users all see the tally of answer choices chosen, who chose which answer (with Github profile pics next to each choice), the total number of votes, and the number of users in the room. The question choice keys can be any value; they are not restricted to a strict format such as A, B, C, D.
              Check it out <a href="https://real-time-gness.herokuapp.com/" target="_blank" rel="noopener noreferrer">live!</a>
           </p>
          </section>
          <section className="project-page-section">
              <h3>Tools Used</h3>
              <p>
              Main tools used: Websockets, ExpressJS, Auth0, Node.js, jQuery, Mocha and Chai.
             </p>
            </section>
            <section className="project-page-section">
                <h3>What I Learned</h3>
                <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
                <p>
                 This project taught me a lot about Websockets and Node. I left the project feeling a sense of accomplishment that I was able to build this complex app in a short period of time. In particular, I learned a lot about authentication and its challenges. This was also the first time that I had tested Express, since my partner had written all the tests for the previous project.
               </p>
          </section>
      </div>
    );
  }

}


export default RealTime;

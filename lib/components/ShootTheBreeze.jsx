import React, { Component } from 'react';

class ShootTheBreeze extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Shoot The Breeze</h2>
          <a href="https://github.com/gness1804/shoot-the-breeze" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/shoot-the-breeze.png" alt="Screenshot." />
            <p>
              This is a chat app created with Gabrielle Procell while a student at the Turing School of Software and Design. The app accepts messages from multiple users, who log in via Google using Firebase. Users can see and respond to other messages in the chat room, see who else is in the chat room, and log out at any time. Users can also filter messages by user and by message text. We built a solid instant messaging application with a Firebase back end and a React front end. Check it out <a href="https://shoot-the-breeze-b5e3f.firebaseapp.com/" target="_blank" rel="noopener noreferrer">live!</a>
           </p>
          </section>
          <section className="project-page-section">
              <h3>What I Learned</h3>
              <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
              <p>
               This was our first real experience using a database as a back-end, as opposed to localStorage. I learned a lot about Firebase and how to communicate data between back end and front end. I also learned a lot about teamwork and communication on this project.
             </p>
        </section>
      </div>
    );
  }

}


export default ShootTheBreeze;

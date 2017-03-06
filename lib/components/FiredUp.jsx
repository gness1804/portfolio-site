import React, { Component } from 'react';

class FiredUp extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Fired Up</h2>
          <a href="https://github.com/gness1804/fired-up" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/fired-up-screenshot.png" alt="Screenshot." />
            <p>
              This is a productivity app built in Electron. For details on this project, see my two Medium posts: <a href="https://medium.com/@gness1804/fired-up-an-introduction-to-electron-9d1f2c91f513#.8zep7num9" target="_blank" rel="noopener noreferrer">Intro to Electron</a> and <a href="https://medium.com/@gness1804/debugging-electron-a-journey-e4e01ea481fb#.a0ab0sm5g" target="_blank" rel="noopener noreferrer">Debugging Electron: A Journey</a>.
           </p>
          </section>
      </div>
    );
  }

}


export default FiredUp;

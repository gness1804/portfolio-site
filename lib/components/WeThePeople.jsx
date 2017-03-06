import React, { Component } from 'react';

class WeThePeople extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>We The People</h2>
          <a href="https://github.com/gness1804/we-the-people-native" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/we-the-people.png" alt="Screenshot." />
            <p>
              We The People is an application created in React Native that allows a user to track current Congressional bills and new laws. Using the <a href="https://sunlightlabs.github.io/congress/" target="_blank" rel="noopener noreferrer">Sunlight Congress API</a>, the application brings in data on bills and laws including title, date introduced, date of last action, sponsor, current progress (in House Committee, passed by Senate, enacted...), and other data. This application is meant for concerned citizens (and non-citizens) to keep track of Congressional actions and to be better informed and empowered to take action on critical issues.
           </p>
          </section>
          <section className="project-page-section">
              <h3>Key Technological and Learning Accomplishments</h3>
              <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
               <ul>
                 <li>A powerful search feature to filter bills by topic when a user taps on a topic name in the drawer</li>
                 <li>Data scraping and creating endpoints using Express</li>
                 <li>An SVG graphic showing bill progress</li>
                 <li>Strongly modular architecture that breaks apart logic into separate components and files</li>
                 <li>Strong and intuitive UI</li>
                 <li>Extensively tested</li>
               </ul>
               <p>For more details, see the <a href="https://github.com/gness1804/we-the-people-native/blob/master/README.md" target="_blank" rel="noopener noreferrer">readme.</a></p>
        </section>
      </div>
    );
  }

}


export default WeThePeople;

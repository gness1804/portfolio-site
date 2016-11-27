import React, {Component} from 'react';
import WorkHistory from './WorkHistory';
import Education from './Education';

const ReactDOM = require('react-dom');

class AboutMe extends Component {

  render() {
    return (
      <div>
        <section className="bio-page-headline">
          <h2>Who Am I?</h2>
        </section>
        <section className="big-button-container">
          <a href="resumes/Nessler-Resume-11-27-16.pdf" target="_blank">
            <button type="button" className="big-button">View My Resume</button>
          </a>
        </section>
        <section className="bio-page-section-container">
          <WorkHistory />
          <Education />
        </section>
      </div>
    );
  }

}


export default AboutMe;

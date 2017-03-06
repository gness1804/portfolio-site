import React, { Component } from 'react';

class EmberRemember extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Ember Remember</h2>
          <a href="https://github.com/kswhyte/remEMBER" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/ember-remember-screenshot.png" alt="Screenshot." />
            <p>
              This was our first and only Ember project at Turing. It involved a list of reminders that could be created, modified, and deleted. This project gave me confidence that I could quickly pick up a new framework, as we only had about a week to learn Ember and complete the project in it.
           </p>
          </section>
          <section className="project-page-section">
              <h3>Tools Used</h3>
              <img src="images/ember.png" alt="" />
              <p>
              The framework used for this project was Ember.js. As detailed below, this project also made heavy use of Git and taught us a lot about Git workflow.
             </p>
            </section>
            <section className="project-page-section">
                <h3>What I Learned</h3>
                <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
                <p>
                 This project was a rather different animal, as we worked from an instructor-created repo and did not have commit access. This meant that the pull request review process was a core part of the project. Accordingly, we learned a great deal about making a proper pull request, responding to PR comments, and pacing ourselves in accordance with the workflow of pull review acceptances. I feel that I am much stronger with Git as a result of this project. Also, as mentioned above, this project involved the use of Ember, a new framework for us, which allowed me to expand my horizons beyond my previous React comfort zone.
               </p>
          </section>
      </div>
    );
  }

}


export default EmberRemember;

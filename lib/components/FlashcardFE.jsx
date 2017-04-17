import React, { Component } from 'react';

class FlashCardFE extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>FlashcardFE</h2>
          <a href="https://github.com/gness1804/front-end-interview-prep-app" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/flashcardfe.png" alt="Screenshot." />
            <p>
            This app exists to help job seekers prepare for front end developer interviews. From the Home screen, you can select from three categories of questions: HTML, CSS, and JavaScript. These in turn are divided by category (typically difficulty). You can use this app to quiz yourself or others. Also, there is a section with links to useful interview-related sites and a section with questions to ask an interviewer. Check it out in the <a href="https://play.google.com/store/apps/details?id=com.grahamnessler.bookmarker&hl=en" target="_blank" rel="noopener noreferrer">Google Play Store</a> and the <a href="https://itunes.apple.com/us/app/flashcardfe/id1225364104?ls=1&mt=8" target="_blank" rel="noopener noreferrer">Apple Store!</a>
           </p>
          </section>
          <section className="project-page-section">
              <h3>What I Learned</h3>
              <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
              <p>
               This app really helped to reinforce my React Native skills. I am particularly proud of the search component, which allows the user to not only search the app but also search MDN and Google for key terms. I also gained familiarity with <a href="https://facebook.github.io/react-native/docs/navigation.html" target="_blank" rel="noopener noreferrer">React Native's Navigation system.</a>
             </p>
        </section>
      </div>
    );
  }

}


export default FlashCardFE;

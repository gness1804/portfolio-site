import React, { Component } from 'react';

class WeathrlyRN extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Weathrly in React Native</h2>
          <a href="https://github.com/gness1804/weathrly-react-native" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/weathrly-1.png" alt="Screenshot." />
            <p>
              This is a rebuild of my old project Weathrly in React Native. This app contains all the features of the original plus a zip code search and view toggling. Check out the <a href="https://github.com/gness1804/weathrly-react-native/blob/master/readme.md" target="_blank" rel="noopener noreferrer">readme</a> for more details.
           </p>
         </section>
            <section className="project-page-section">
                <h3>What I Learned</h3>
                <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
                <p>
                 This was my third project in React Native. I learned more about RN's components and structure. I also gained valuable experience developing on my actual Android phone, as opposed to a simulator.
               </p>
          </section>
      </div>
    );
  }

}


export default WeathrlyRN;

import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class Netwerker extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Netwerker <span className="italic-names">(with Matt Kaufman and Christine Gamble)</span></h2>
          <a href="https://github.com/gness1804/netwerker" target="_blank">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/netwerker.png" alt="Screenshot." />
            <p>
              <a    href="https://netwerker-3d622.firebaseapp.com/" target="_blank">Netwerker</a> is a professional networking app that allows the user to store contacts, sort them alphabetically, delete them, flag them for followup, and add images. It was created using the toolbox of React, Firebase, Webpack, and Enzyme. This is the largest React project I have worked on to date, and it succeeds in managing complex data, retrieving it from Firebase, and presenting a pleasant user interface.
           </p>
          </section>
          <section className="project-page-section">
              <h3>Tools Used</h3>
              <img src="images/firebase-logo.png" alt="Firebase logo." />
              <p>
              As noted above, we used React, Firebase, Webpack, and Enzyme for this project. We also made use of Firebase's storage capabilities and FileReader to store contact images. In addition, we utilized Sass to style the app, which gave us greater facility and comfort with this tool and with modular organization of scss files.
             </p>
            </section>
            <section className="project-page-section">
                <h3>What I Learned</h3>
                <img src="images/light-bulb-2.png" alt="Lightbulb." />
                <p>
                 I was fortunate to work with two very strong developers on this project, <a href="https://github.com/MilkMan90" target="_blank">Matt Kaufman</a> and <a href="https://github.com/ccgamble" target="_blank">Christine Gamble.</a> They both taught me a great deal about React and about programming in general. Thanks in large part to these partners and to the complexity of the project, I was able to learn a lot about more complex React functionality and how a somewhat larger app can harness the power of React for efficiency and a better user experience.
               </p>
          </section>
      </div>
    );
  }

}


export default Netwerker;

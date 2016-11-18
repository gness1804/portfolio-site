import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class FlashShopper extends Component {

  render() {
    return (
      <div>
      <section className="project-page-headline ">
      <h2>Flash Shopper</h2>
      <a href="https://github.com/gness1804/grocery-list-react" target="_blank">
        <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
        <p>Project Link (Github)</p>
      </a>
    </section>
    <section className="project-page-section">
        <h3>Principal Accomplishments</h3>
        <img src="images/flash-shopper.png" alt="Screenshot." />
        <p>
        <a href="https://grocery-list-caef5.firebaseapp.com/" target="_blank">Flash Shopper</a> is an application created by me independent of the Turing School curriculum. It is a grocery list app where users can enter items, sort them, delete them, and populate aisles by category (currently available for 1 location). This app aims to present a smart and sleek alternative to existing grocery apps. In creating this app, I successfully designed a complex system utilizing React to manage the state of each item and of the entire app. Not only that, but this app has become invaluable for me when I go grocery shopping!
        </p>
      </section>
      <section className="project-page-section">
          <h3>Tools Used</h3>
          <img src="images/react-logo.svg" alt="React logo." />
          <p>
          As noted above, I used React to build this app. By the time I decided to rebuild my <a href="https://github.com/gness1804/grocery-list-local-storage" target="_blank">old grocery list app</a> using React, I had become increasingly confident in React and ready to experiment with using it in new ways, such as sorting items alphabetically and by aisle number. I also managed to replace the local storage from the earlier iteration with Firebase, which affords me the opportuity to use any device to access the storage and for multiple users to store their own items
         </p>
        </section>
        <section className="project-page-section">
            <h3>What I Learned</h3>
            <img src="images/light-bulb.jpg" alt="A lightbulb." />
            <p>
            The main benefit to me of doing this project was to increase my skills in React and to learn more how Firebase can integrate into an application. Moreover, as I used the grocery list app in my real life experience in planning grocery runs and at the store, I learned valuable lessons on how real-life experiences can inform the improvement of software--that is, no matter how well a given app is designed, user experience and user testing are crucial to ensuring a viable product. These lessons will surely be useful to me as I embark on my career in web development.
            </p>
      </section>
      </div>
    );
  }

}


export default FlashShopper;

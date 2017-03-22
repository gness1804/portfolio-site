import React, { Component } from 'react';

class FlashShopperReactNative extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Flash Shopper in React Native</h2>
          <a href="https://github.com/gness1804/flash-shopper-react-native" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/flash-shopper-screenshot-mobile.png" alt="Screenshot." />
            <p>
              This is a rebuild of my <a href="https://github.com/gness1804/grocery-list-react" target="_blank" rel="noopener noreferrer">Flash Shopper</a> application in React Native. It contains most of the functionality of the original app. Rather than existing in the browser, this program exists as a separate application. 
           </p>
          </section>
          <section className="project-page-section">
              <h3>What I Learned</h3>
              <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
              <p>
               This was my first React Native application. I learned a lot about creating user interfaces for mobile and adjusting to React Native's distinctive styling system. This experience prepared me well for later React Native applications.
             </p>
        </section>
      </div>
    );
  }

}


export default FlashShopperReactNative;

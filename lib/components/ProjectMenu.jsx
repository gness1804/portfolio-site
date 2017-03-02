import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectMenu extends Component {

  render() {
    return (
      <div>
        <div className="proj-menu-master-container">
          <h2>My Work</h2>

          <a href="https://github.com/gness1804/jet-fuel">
            <div className="proj-menu-indiv-box">
              <img src="images/jet-fuel-ss.png" alt="Screenshot." />
                <p>Jet Fuel Bookmarker</p>
            </div>
          </a>

          <Link to="/fareharbor">
            <div className="proj-menu-indiv-box">
              <img src="images/search-input-screenshot.png" alt="Screenshot." />
              <p>FareHarbor Toolkit</p>
            </div>
          </Link>

          <a href="https://github.com/kswhyte/remEMBER">
            <div className="proj-menu-indiv-box">
              <img src="images/ember-remember-screenshot.png" alt="Screenshot." />
                <p>Ember RemEMBER</p>
            </div>
          </a>

          <Link to="/weather-tracker">
            <div className="proj-menu-indiv-box">
              <img src="images/weather-tracker-screenshot.png" alt="Screenshot." />
              <p>Weather Tracker</p>
            </div>
          </Link>

          <Link to="/netwerker">
            <div className="proj-menu-indiv-box">
              <img src="images/netwerker.png" alt="Screenshot." />
              <p>Netwerker</p>
            </div>
          </Link>

          <Link to="/flashshopper">
            <div className="proj-menu-indiv-box">
              <img src="images/flash-shopper.png" alt="Screenshot." />
              <p>Flash Shopper</p>
            </div>
          </Link>

          <a href="https://gness1804.github.io/number-guesser-react/">
            <div className="proj-menu-indiv-box">
              <img src="images/number-guesser-react.png" alt="Screenshot." />
                <p>Number Guesser in React</p>
            </div>
          </a>

          <a href="https://gness1804.github.io/seven-weeks-of-fonts/">
            <div className="proj-menu-indiv-box">
              <img src="images/seven-weeks-of-fonts.png" alt="Screenshot." />
              <p>Seven Weeks of Fonts</p>
            </div>
          </a>

        <a href="https://shoot-the-breeze-b5e3f.firebaseapp.com/">
            <div className="proj-menu-indiv-box">
              <img src="images/shoot-the-breeze.png" alt="Screenshot." />
              <p>Shoot the Breeze</p>
            </div>
          </a>

          <Link to="/weatherapp">
            <div className="proj-menu-indiv-box">
              <img src="images/weather-app.png" alt="Screenshot." />
              <p>Weathrly 2.0 </p>
            </div>
          </Link>

        <a href="https://hilarylewis92.github.io/2DoBox-Pivot/">
            <div className="proj-menu-indiv-box">
              <img src="images/2do-box.png" alt="Screenshot." />
              <p>2Do Box Pivot</p>
            </div>
          </a>

          <Link to="/gametime">
            <div className="proj-menu-indiv-box">
              <img src="images/game-time-screenshot1.png" alt="Screenshot from game." />
              <p>Bluecifer's Revenge</p>
            </div>
          </Link>

          <Link to="/ideabox">
            <div className="proj-menu-indiv-box">
              <img src="images/idea-box-screenshot.png" alt="Screenshot of Idea Box." />
              <p>Idea Box</p>
            </div>
          </Link>

          <a href="https://gness1804.github.io/Personal-Blog/linked-list-09-03-16.html">
            <div className="proj-menu-indiv-box">
              <img src="images/linked_list.png" alt="Linked List screenshot." />
              <p>Linked List</p>
            </div>
          </a>

          <a href="https://gness1804.github.io/Personal-Blog/number-guesser-08-25-16.html">
            <div className="proj-menu-indiv-box">
              <img src="images/number-guesser-screen.png" alt="Number guesser screenshot." />
              <p>Number Guesser</p>
            </div>
          </a>

          <a href="https://gness1804.github.io/color-changer/">
            <div className="proj-menu-indiv-box">
              <img src="images/color-changer.png" alt="Color changer screenshot." />
              <p>Color Changer</p>
            </div>
          </a>

          <a href="https://gness1804.github.io/160gr8-lorem-ipsum-gen/">
            <div className="proj-menu-indiv-box">
              <img src="images/lorem-ipsum-screenshot.png" alt="Screenshot of lorem ipsum generator." />
              <p>Lorem Ipsum Generator</p>
            </div>
          </a>

        </div>
      </div>
    );
  }

}


export default ProjectMenu;

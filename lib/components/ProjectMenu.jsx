import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectMenu extends Component {

  render() {
    return (
      <div>
        <div className="proj-menu-master-container">
          <h2>My Work</h2>

            <Link to="we-the-people">
              <div className="proj-menu-indiv-box">
                <img src="images/we-the-people.png" alt="Screenshot." />
                <p>We The People</p>
              </div>
            </Link>

            <Link to="flash-shopper-rn">
              <div className="proj-menu-indiv-box">
                <img src="images/flash-shopper-screenshot-mobile.png" alt="Screenshot." />
                <p>F. Shopper React Native</p>
              </div>
            </Link>

            <Link to="grudge-box">
              <div className="proj-menu-indiv-box">
                <img src="images/grudge-box.png" alt="Screenshot." />
                <p>GrudgeBox</p>
              </div>
            </Link>

            <Link to="fired-up">
              <div className="proj-menu-indiv-box">
                <img src="images/fired-up-screenshot.png" alt="Screenshot." />
                <p>Fired Up</p>
              </div>
            </Link>

          <Link to="real-time">
            <div className="proj-menu-indiv-box">
              <img src="images/real-time-screen-shot-1.png" alt="Screenshot." />
              <p>Real Time</p>
            </div>
          </Link>

          <Link to="jet-fuel">
            <div className="proj-menu-indiv-box">
              <img src="images/jet-fuel-ss.png" alt="Screenshot." />
              <p>Jet Fuel Bookmarker</p>
            </div>
          </Link>

          <Link to="/fareharbor">
            <div className="proj-menu-indiv-box">
              <img src="images/search-input-screenshot.png" alt="Screenshot." />
              <p>FareHarbor Toolkit</p>
            </div>
          </Link>

          <Link to="ember-remember">
            <div className="proj-menu-indiv-box">
              <img src="images/ember-remember-screenshot.png" alt="Screenshot." />
                <p>Ember RemEMBER</p>
            </div>
          </Link>

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

          <Link to="number-guesser-react">
            <div className="proj-menu-indiv-box">
              <img src="images/number-guesser-react.png" alt="Screenshot." />
                <p>Number Guesser (React)</p>
            </div>
          </Link>

          <a href="https://gness1804.github.io/seven-weeks-of-fonts/">
            <div className="proj-menu-indiv-box">
              <img src="images/seven-weeks-of-fonts.png" alt="Screenshot." />
              <p>Seven Weeks of Fonts</p>
            </div>
          </a>

        <Link to="shoot-the-breeze">
            <div className="proj-menu-indiv-box">
              <img src="images/shoot-the-breeze.png" alt="Screenshot." />
              <p>Shoot the Breeze</p>
            </div>
          </Link>

          <Link to="/weatherapp">
            <div className="proj-menu-indiv-box">
              <img src="images/weather-app.png" alt="Screenshot." />
              <p>Weathrly 2.0 </p>
            </div>
          </Link>

        <Link to="todo-box">
            <div className="proj-menu-indiv-box">
              <img src="images/2do-box.png" alt="Screenshot." />
              <p>2Do Box Pivot</p>
            </div>
          </Link>

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

          <Link to="/linked-list">
            <div className="proj-menu-indiv-box">
              <img src="images/linked_list.png" alt="Linked List screenshot." />
              <p>Linked List</p>
            </div>
          </Link>

          <Link to="/number-guesser">
            <div className="proj-menu-indiv-box">
              <img src="images/number-guesser-screen.png" alt="Number guesser screenshot." />
              <p>Number Guesser</p>
            </div>
          </Link>

          <Link to="/color-changer">
            <div className="proj-menu-indiv-box">
              <img src="images/color-changer.png" alt="Color changer screenshot." />
              <p>Color Changer</p>
            </div>
          </Link>

          <Link to="/lorem-ipsum">
            <div className="proj-menu-indiv-box">
              <img src="images/lorem-ipsum-screenshot.png" alt="Screenshot of lorem ipsum generator." />
              <p>Lorem Ipsum Generator</p>
            </div>
          </Link>

        </div>
      </div>
    );
  }

}


export default ProjectMenu;

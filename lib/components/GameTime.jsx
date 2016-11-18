import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class GameTime extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Bluecifer's Revenge</h2>
          <a href="https://github.com/gness1804/game-time" target="_blank">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <a href="images/game-time-screenshot1.png" target="_blank">
              <img src="images/game-time-screenshot1.png" alt="Screenshot from the game." title="Click to Enlarge"/>
            </a>
            <p>
              In <a href="https://gprocell927.github.io/game-time/" target="_blank">"Bluecifer's Revenge"</a>, created with colleagues Gabi Procell and Lacey Knaff, the user controls the eponymous blue horse avatar who must dodge airplanes en route to his home at Denver International Airport. The game represents a successful effort to create a fully functional side-scroller in just ten days. The game keeps track of the state of all objects involved and allows the user to start a new game, win by surviving for a set period of time, and even enter a cheat code to disable collision detection. Our main achievements were accomplishing all this using object-oriented JavaScript, extensive JS testing, and Webpack to keep it all together.
            </p>
          </section>
          <section className="project-page-section">
              <h3>Tools Used</h3>
              <a href="images/game-time-code.png" target="_blank">
                <img src="images/game-time-code.png" alt="Screen shot for our game time code." title="Click to Enlarge" />
              </a>
              <p>
                As noted above, we made extensive use of JavaScript testing for this project (specifically the Mocha and Chai testing libraries). This was necessary in order to ensure that our functions involving collision detection, movement, state maintenance, and other issues were operating successfully. We also utilized jQuery to manipulate and control elements in the code, such as the objects involved in the game.
              </p>
            </section>
            <section className="project-page-section">
                <h3>What I Learned</h3>
                <a href="images/game-time-you-win.png" target="_blank">
                  <img src="images/game-time-you-win.png" alt="The You Win screen." title="Click to Enlarge" />
                </a>
                <p>
                  As I explain in further detail in my <a href="https://gness1804.github.io/Personal-Blog/game-time-09-25-16.html" target="_blank">blog post on the game</a>, our biggest headache was re-creating our game's functionality after splitting out JavaScript into several different files. We learned the hard way that it is necessary to meticulously test each piece of code as one changes it rather than making major changes and then putting the pieces back together all at once. We also learned a great deal about object-oriented programming and how one can control many elements using object constructors and methods.
                </p>
          </section>
      </div>
    );
  }

}


export default GameTime;

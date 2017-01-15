import React, {Component} from 'react';

class WeatherTracker extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Weather Tracker</h2>
          <a href="https://github.com/gness1804/weather-tracker" target="_blank">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/weather-tracker-screenshot.png" alt="Screenshot." />
            <p>
              This was our first project built with Redux and also our first project in a group of four. (I worked with <a href="https://github.com/rcwestlake">Ryan Westlake</a>, <a href="https://github.com/nnchambs">Nick Chambers</a>, and <a href="https://github.com/lrknaff">Lacey Knaff</a>.) We used the <a href="https://openweathermap.org/">OpenWeatherMap API</a> to capture data for several cities, including the user's current city, obtained by geolocation. We were able to build a sleek and effective application that displays the data in an appealing manner. Moreover, since we displayed extended forecasts as well as simple forecasts, this project allowed us to delve further into APIs than had been the case previously.
           </p>
          </section>
          <section className="project-page-section">
              <h3>Tools Used</h3>
              <img src="images/redux-logo.png" alt="The Redux logo." />
              <p>
                As mentioned above, this was our first time to use Redux in a project. This enabled us to effectively manage the state of our application, and it inspired me to transition my <a href="https://github.com/gness1804/grocery-list-redux">grocery list project</a> into Redux. We also used React, React Router, SASS, and <a href="https://github.com/facebookincubator/create-react-app">Create React App.</a>
             </p>
            </section>
            <section className="project-page-section">
                <h3>What I Learned</h3>
                <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
                <p>
                  The four-person team format encouraged us to delegate responsibilities while also collaborating and communicating as a team. The struggle to find the balance between these things taught me a lot about teamwork and effective communication. Also, the OpenWeatherMap API presented many challenges due to its unreliable data. Adjusting to these challenges and still producing a user-friendly app has proven a very valuable experience.
               </p>
          </section>
      </div>
    );
  }

}


export default WeatherTracker;

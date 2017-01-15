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

           </p>
          </section>
          <section className="project-page-section">
              <h3>Tools Used</h3>
              <img src="" alt="" />
              <p>

             </p>
            </section>
            <section className="project-page-section">
                <h3>What I Learned</h3>
                <img src="images/thinking.svg" alt="A lightbulb." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
                <p>

               </p>
          </section>
      </div>
    );
  }

}


export default WeatherTracker;

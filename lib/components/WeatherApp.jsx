import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class WeatherApp extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline ">
          <h2>Weathrly 2.0</h2>
          <a href="https://github.com/gness1804/weather-app-real-api" target="_blank">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/weather-app.png" alt="Screenshot." />
            <p>
            This application allows the user to enter in any US city and state to see a forecast of several days for that city. It uses data from the <a href="https://www.wunderground.com/weather/api/" target="_blank">WeatherUnderground API</a>. This was my first experience using a real API, and I was able to successfully utilize the JSON data and URL to adjust for the user's input. Many thanks to <a href="https://github.com/KristenBurgess25" target="_blank">Kristen Burgess</a>, my partner on an earlier version of this project, for her invaluable assistance on the functionality and styling.
           </p>
          </section>
          <section className="project-page-section">
              <h3>Tools Used</h3>
              <img src="images/vim-weather-app.png" alt="Screenshot of code for the app.." />
              <p>
              In building this app, I used React, Ajax, Enzyme (for the <a href="https://github.com/gness1804/weathrly" target="_blank">earlier iteration of the project</a>), and Webpack. I found that React facilitated the process of creating and generating weather cards (and cards for extreme weather events in the earlier version of the project).
             </p>
            </section>
            <section className="project-page-section">
                <h3>What I Learned</h3>
                <img src="images/thinking.svg" alt="A lightbulb." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
                <p>
                This project was our first experience using React. We found this to be quite a steep learning curve, but thanks in large part to well-time and extremely helpful guest lesson by Turing alum <a href="https://github.com/kristindiannefoss" target="_blank">Kris Foss</a>, we pulled through and began to understand the ins and outs of this library. I learned a great deal not only about React but also about Ajax calls and APIs during this project, and I am excited to work more with APIs in the future!
                </p>
          </section>
      </div>
    );
  }

}


export default WeatherApp;

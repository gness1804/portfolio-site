import React, { Component } from 'react';
import { Link } from 'react-router'

class JetFuel extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Jet Fuel</h2>
          <a href="https://github.com/gness1804/jet-fuel" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/jet-fuel-ss.png" alt="Screenshot." />
            <p>
              This is a URL shortening service built using Postgres, SQL, jQuery, Express.js, and Node.js. The user enters in folder names to store URLs and then enters in URLs in specified folders. The application then generates a shortened URL for each URL the user enters. These are grouped by folders in the UI, which the user can navigate. The user can also sort URLs by date added and popularity (number of clicks). The data persists in a Postgres database. Check it out <a href="https://kbgn-jetfuel.herokuapp.com/" target="_blank" rel="noopener noreferrer">live!</a>
           </p>
          </section>
          <section className="project-page-section">
              <h3>What I Learned</h3>
              <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
              <p>
               This was our first experience creating our own Postgres database, using SQL, and creating a server to interact with the front end (though we did create a small server for the <Link to="/fareharbor">FareHarbor project</Link>). Though the learning curve was steep, I feel far more prepared now to tackle back-end work in a future job. This project also taught me more about Node and Express.
             </p>
        </section>
      </div>
    );
  }

}


export default JetFuel;

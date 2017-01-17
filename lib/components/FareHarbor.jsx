import React, {Component} from 'react';

class FareHarbor extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>FareHarbor Toolkit</h2>
          <a href="https://github.com/rcwestlake/fare-harbor-toolkit" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/search-input-screenshot.png" alt="Screenshot." />
            <span className="ul-span">Main portfolio deliverables:</span>
            <ul>
              <li><a href="images/fareharbor-wireframes.pdf" target="_blank" rel="noopener noreferrer">A wireframe built in Sketch</a></li>
              <li><a href="https://www.gitbook.com/book/rcwestlake/fareharbor-toolkit/details" target="_blank" rel="noopener noreferrer">Documentation written for the FareHarbor integrator</a></li>
              <li><a href="https://github.com/rcwestlake/fare-harbor-toolkit" target="_blank" rel="noopener noreferrer">Github repo</a></li>
            </ul>
            <p className="fareharbor-accomplishments-p">
              This was my first company project, and it was an excellent learning experience. Fellow student <a href="https://github.com/rcwestlake" target="_blank" rel="noopener noreferrer">Ryan Westlake</a> and I built three tools and a tool creator for <a href="https://fareharbor.com/" target="_blank" rel="noopener noreferrer">FareHarbor</a>, an online travel services company. We ended up creating a powerful tool creator (essentially a series of objects) allowing the company to create and customize tools for their hundreds of clients. We also created three tools ourselves: a search input tool, a footer tool, and a bottom modal tool. We built these tools in order to increase conversions among FareHarbor's clients, and we were able to create an effective and robust final product with detailed documentation.
           </p>
          </section>
          <section className="project-page-section">
              <h3>Tools Used and What I Learned</h3>
              <img src="images/fareharbor-code-screenshot.png" alt="Screenshot of code from the FareHarbor project." />
              <p>
                We learned a lot in the process of building this toolkit. First, we had to build a small server to get around a CORS issue in order to serve up client API data for our tools. This led us to learn a lot about Express.js and the fundamentals of building a server. Second, due to backwards compatibility concerns, we built the whole project in vanilla JavaScript (including the styling and markup), which was an extremely useful exercise in the fundamentals and also made us learn how to make API calls using the vanilla XMLHTTPRequest() object (see screenshot above). <br /><br />

                We also became more adept testers, as we made extensive use of Selenium Webdriver for testing and had to adapt our tests for contingencies such as different company names. Finally, the project taught us a lot about building software for business needs. As noted above, we shaped our choices around the objective of increasing conversions for FareHarbor's clients. This certainly made me more aware of how seemingly small aesthetic choices and code decisions can significantly impact the user experience.
             </p>
            </section>
      </div>
    );
  }

}


export default FareHarbor;

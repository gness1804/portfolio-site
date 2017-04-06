import React, { Component } from 'react';

class QuickSearch extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Quick Search</h2>
          <a href="https://github.com/gness1804/quicksearch" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/quicksearch.png" alt="Screenshot." />
            <p>
              Quick Search is an app that filters through a database in response to user queries. The user can search fields such as first and last name, domain, number of page visits, and screen width and height. This app was an exercise in effectively using a database and querying it to return a range of results.
           </p>
          </section>
          <section className="project-page-section">
              <h3>What I Learned</h3>
              <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
              <p>
               This project presented many tough technical challenges, ranging from setting up the many database queries to laying out the data in an appealing manner. The hardest challenge was the range query: how to change the UI when the user selects a range (like 1 to 100 for screen width) and integrating this with a database query. I learned a great deal about constructing and querying a database.
             </p>
        </section>
      </div>
    );
  }

}


export default QuickSearch;

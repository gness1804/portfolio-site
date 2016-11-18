import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class WorkHistory extends Component {

  render() {
    return (
      <div>
        <article className="bio-page-section">
          <h3 id="work-hist" target="_blank">Work History</h3>
            <p>
              <span>Selected Positions:</span>
            </p><br></br>
            <p>
              Visiting Professor of History, <a href="https://www.fau.edu" target="_blank"><span>Florida Atlantic University</span></a> (2015-2016)
            </p>
            <p>
              Post-Doctoral Fellow, <a href="https://www.bentley.edu" target="_blank"><span>Bentley University</span></a> (2013-2015)
            </p>
            <p>
              Ad Interim Assistant Professor of History, <a href="https://www.tamuc.edu" target="_blank"><span>Texas A and M University-Commerce</span></a> (2012-2013)
            </p><br></br>
        </article>
      </div>
    );
  }

}


export default WorkHistory;

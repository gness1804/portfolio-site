import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class Education extends Component {

  render() {
    return (
      <div>
        <article className="bio-page-section">
          <h3 id="education">Education</h3>
          <p>
            Certificate in Front End Engineering, <a href="https://www.turing.io/" target="_blank"><span>Turing School of Software and Design</span></a> (anticipated in March 2017)
          </p>
          <p>
            PhD, History, <a href="https://www.umich.edu/" target="_blank"><span>University of Michigan</span></a> (2011)
          </p>
          <p>
            BA, History, <a href="http://www.wm.edu/" target="_blank"><span>College of William and Mary</span></a> (2005)
          </p><br></br>
        </article>
      </div>
    );
  }

}


export default Education;

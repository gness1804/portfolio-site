import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class AboutMe extends Component {

  render() {
    return (
      <div>
        <section className="bio-page-headline">
          <h2>Who Am I?</h2>
        </section>
        <section className="big-button-container">
          <a href="resumes/Nessler-Resume-11-14-16.pdf" target="_blank">
            <button type="button" className="big-button">View My Resume</button>
          </a>
        </section>
        <section className="bio-page-section-container">
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
        </section>
      </div>
    );
  }

}


export default AboutMe;

import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class AboutMe extends Component {

  render() {
    return (
      <div>I am the About Me page.
        <div id="#work-hist">I am the work history section.</div>
        <div id="#education">I am the education section.</div>
      </div>
    );
  }

}


export default AboutMe;

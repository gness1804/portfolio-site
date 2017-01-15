import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class IdeaBox extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Idea Box</h2>
          <a href="https://github.com/gness1804/IdeaBox" target="_blank">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <a href="images/idea-box-screenshot.png" target="_blank">
              <img src="images/idea-box-screenshot.png" alt="Idea box screen shot" title="Click to Enlarge"/>
            </a>
            <p>
              Idea box is an <a href="https://adam-rice.github.io/IdeaBox/" target="_blank">application</a>, created by colleague Adam Rice and I, that allows the user to enter in a title and body of an "idea" (such as: title: "football", body: "football is a fun game"), which then populate in an area below the input box. The user can assign one of three "qualities" to an idea ("genius", "plausible", or "swill"), delete an idea, and search for text within the titles and bodies of the ideas. All of this persists after page reload thanks to local storage. In creating this application, we were able to achieve data persistence using JSON and build a foundation for many other web applications such as travel sites or online to-do lists. We created a versatile application that even includes icons (corresponding to each "quality" rating) as a bonus feature.
            </p>
          </section>
          <section className="project-page-section">
              <h3>Tools Used</h3>
              <a href="images/idea-box-code.png" target="_blank">
                <img src="images/idea-box-code.png" alt="" title="Click to Enlarge"/>
              </a>
              <p>
                As alluded to above, our core tools for this project were JSON and local storage. All of the data entered by the user, and the user's other interactions such as deleting an idea or modifying its quality, are retained and changed accordingly in local storage. We also utilized CSS to match the project specs, which can be found on the project <a href="https://github.com/gness1804/IdeaBox/blob/gh-pages/README.md" target="_blank">readme</a>.
              </p>
            </section>
            <section className="project-page-section">
                <h3>What I Learned</h3>
                <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
                <p>
                  Our core lessons for this project were the difficulties of using JSON and local storage. Our previous project, <a href="https://gness1804.github.io/Personal-Blog/linked-list-09-03-16.html" target="_blank">Linked List</a>, also involved transferring user input to other parts of the page and allowing users to modify their data in various ways, but there was no data persistence involved. We quickly learned that keeping up with data via local storage was far harder than it appeared initially. This project indeed taught us the value of trial-and-error, since we tried many approaches before finding a viable method that involved using arrays and object literals. (You can read my <a href="https://gness1804.github.io/Personal-Blog/idea-box-09-25-16.html" target="_blank">blog post on the project</a> for more details).
                </p>
          </section>
      </div>
    );
  }

}


export default IdeaBox;

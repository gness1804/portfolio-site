import React, { Component } from 'react';

class LinkedList extends Component {

  render() {
    return (
      <div>
        <section className="project-page-headline">
          <h2>Linked List</h2>
          <a href="https://github.com/gness1804/linked-list" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="GitHub logo" title="Project GitHub link" />
            <p>Project Link (Github)</p>
          </a>
        </section>
        <section className="project-page-section">
            <h3>Principal Accomplishments</h3>
            <img src="images/linked_list.png" alt="Screenshot." />
            <p>
              This project involved creating a site where the user could enter in a title and url of favorite sites. The program organizes the user's entries into bookmarks that can be toggle "read" and "unread". The user has the option of marking all bookmarks on the page as read, removing all bookmarks, and removing all read bookmarks. The program keeps track of the number of bookmarks on the page as well as the number of read and unread ones currently on the page. At the end of the day, we created a functional program using jQuery, CSS, and HTML. Alex did the majority of the CSS, and I focused on the JavaScript. Check it out <a href="https://gness1804.github.io/linked-list/" target="_blank" rel="noopener noreferrer">live!</a>
           </p>
          </section>
          <section className="project-page-section">
              <h3>What I Learned</h3>
              <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
              <p>
               Our biggest challenge was coordinating all of the functions to keep count of the read and unread bookmarks and all those currently on the page. I initially wrote some jQuery that used the global variable count = 0 and reassigned this variable when the user submitted a bookmark and removed a bookmark, but the addition of the functionality to keep track of read and unread bookmarks, and in particular the fact that the "Mark as Read" button within each bookmark toggled the class of "read", necessitated a different approach. Ultimately, this project not only helped us improve our JavaScript and jQuery skills but also afforded us the opportunity to learn how to write focused, well-organized CSS by creating several logically-organized stylesheets. The project also enhanced our knowledge of semantic HTML.
             </p>
        </section>
      </div>
    );
  }

}


export default LinkedList;

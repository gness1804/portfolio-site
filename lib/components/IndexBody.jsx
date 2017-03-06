import React, { Component } from 'react';
import { Link } from 'react-router';

class IndexBody extends Component {

  render() {
    return (
      <div>
        <div className="page-upper-section">
          <p>
            I am a front-end software engineer, published author, and educator. Feel free to browse my projects below and to <a href="mailto:graham@grahamnessler.com" target="_blank" rel="noopener noreferrer">get in touch</a>.
          </p>
        </div>
        <section className="two-article-control">
         <article className="main-article-half-width proj1">
          <Link to="/we-the-people">
            <h3>We The People</h3>
          </Link>
           <a href="https://github.com/gness1804/we-the-people-native" target="_blank" rel="noopener noreferrer">
             <h4>(GitHub)</h4>
           </a>
           <img src="images/we-the-people.png" alt="Screenshot." />
           <p className="left-article-p">
              We The People is an application created in React Native that allows a user to track current Congressional bills and new laws. The application brings in data on bills and laws including title, date introduced, date of last action, sponsor, current progress (in House Committee, passed by Senate, enacted...), and other data. For more details, see the <Link to="/we-the-people">project page.</Link>
           </p>
         </article>
         <article className="main-article-half-width proj2">
          <Link to="/flashshopper">
            <h3>Flash Shopper</h3>
          </Link>
           <a href="https://github.com/gness1804/grocery-list-react" target="_blank" rel="noopener noreferrer">
             <h4>(GitHub)</h4>
           </a>
           <img src="images/flash-shopper.png" alt="Screenshot." />
           <p>
             <a href="https://github.com/gness1804/grocery-list-react" target="_blank" rel="noopener noreferrer">Flash Shopper</a> is an application created by me independent of the Turing School curriculum. It is a grocery list app built in React where users can enter items, sort them, delete them, and edit them. The app also populates aisles by category (currently available for 1 location). This app aims to present a smart and sleek alternative to existing grocery apps. For more details, see the <Link to="/flashshopper">project page.</Link>
           </p>
         </article>
        </section>
        <section className="big-button-container">
          <Link to="/projmenu">
            <button className="big-button">
            View More Projects
           </button>
          </Link>
        </section>
        <section className="bottom-elements-control">
         <article className="page-lower-section">
           <h3>Who Am I?</h3>
           <p>
             My web development experience includes projects using React, Redux, JavaScript/jQuery, SASS/CSS, and other technologies. I am also the author of a book on the only successful slave revolution in world history, entitled <a href="http://uncpress.unc.edu/books/12448.html" target="_blank" rel="noopener noreferrer">An Islandwide Struggle for Freedom: Revolution, Emancipation, and Reenslavement in Hispaniola, 1789-1809.</a> For more information, see my <Link to="/aboutme">"About Me" page.</Link>
           </p>
         </article>
         <a href="http://uncpress.unc.edu/books/12448.html" target="_blank" rel="noopener noreferrer">
           <figure id="fig-main">
             <img src="images/book_cover.jpg" alt="The cover of my book." title="Book Cover" id="book-img" />
             <figcaption>My book</figcaption>
           </figure>
         </a>
        </section>
      </div>
    );
  }

}


export default IndexBody;

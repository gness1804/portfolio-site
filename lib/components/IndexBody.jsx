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
            <h3>MyGov</h3>
          </Link>
           <a href="https://github.com/gness1804/we-the-people-native" target="_blank" rel="noopener noreferrer">
             <h4>(GitHub)</h4>
           </a>
           <img src="images/we-the-people.png" alt="Screenshot." />
           <p className="left-article-p">
              MyGov is an application created in React Native that allows a user to track current Congressional bills and new laws. The application brings in data on bills and laws including title, date introduced, date of last action, sponsor, current progress (in House Committee, passed by Senate, enacted...), and other data. For more details, see the <Link to="/we-the-people">project page.</Link>
           </p>
         </article>
         <article className="main-article-half-width proj2">
          <Link to="/flashcard-fe">
            <h3>FlashcardFE</h3>
          </Link>
           <a href="https://github.com/gness1804/front-end-interview-prep-app" target="_blank" rel="noopener noreferrer">
             <h4>(GitHub)</h4>
           </a>
           <img src="images/flashcardfe.png" alt="Screenshot." />
           <p id="google-play-notice">
             Check it out in the <a href="https://play.google.com/store/apps/details?id=com.grahamnessler.bookmarker&hl=en" target="_blank" rel="noopener noreferrer">Google Play Store!</a> (iOS version coming soon.)
           </p>
           <p>
             This app exists to help job seekers prepare for front end developer interviews. From the Home screen, you can select from three categories of questions: HTML, CSS, and JavaScript. You can use this app to quiz yourself or others. Also, there is a section with links to useful interview-related sites and a section with questions to ask an interviewer.
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

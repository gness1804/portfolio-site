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
              <h3>Tools Used</h3>
              <img src="" alt="." />
              <p>

             </p>
            </section>
            <section className="project-page-section">
                <h3>What I Learned</h3>
                <img src="images/thinking.svg" alt="A thinking head." title="Image courtesy of Elias Bikbulatov for FlatIcon, http://www.flaticon.com" />
                <p>

               </p>
          </section>
      </div>
    );
  }

}


export default FareHarbor;

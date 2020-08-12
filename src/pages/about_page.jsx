import React from 'react';

import PageTitle from '../components/page_title'

function AboutPage(props) {
  return(
    <div>
      <div id={"about-page"} className={"page-size beige-background scroll-child"}>
        <PageTitle title={"about"} design={"page-title-about"}/>
        <div id={"about-page-content"}>
          <div id={"about-page-image"}></div>
          <div id={"about-page-text"}>
            <div>
              <div className={"about-header-text"}><h1>VIOLETA POPOV</h1><h1>M.D.</h1></div>
              <div className={"about-page-body"}>
                <section>
                  <h2>EDUCATION :</h2>
                  <p>Graduate of the Medical University of Sofia, and the Yale Graduate school of Arts and Sciences, with a Ph.D. from Yale in investigate medicine.</p>
                </section>
                <section>
                  <h2>BIO :</h2>
                  <p>Dr. Popov is an Assistant Professor of Medicine in the Division of Gastroenterology at New York University (NYU) School of Medicine and the Manhattan Harbor Healthcare VA Medical Center. Dr. Popov has established the first active Bariatric Endoscopy Program at a Veterans hospital in the U.S and also is a co-founder of the Yale Weight Loss Center. Dr. Popov has pioneered at NYU Langone Medical Center...</p>
                </section>
              </div>
            </div>
            <a href="/#for-patients" id={"about-page-link"}><i>Read more&nbsp;</i><span>></span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

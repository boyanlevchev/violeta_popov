import React from 'react';

import PageTitle from '../components/page_title'

function AboutPage(props) {
  return(
    <div>
      <div id={"about-page"} className={"page-size beige-background scroll-child"}>
        <PageTitle title={"about"} design={"page-title-about"}/>
      </div>
    </div>
  );
}

export default AboutPage;

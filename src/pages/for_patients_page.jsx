import React from 'react';

import PageTitle from '../components/page_title'

function ForPatientsPage(props) {
  return(
    <div id={"for-patients-page"} className={"page-size beige-background scroll-child"}>
      <PageTitle title={"for patients"} design={"page-title-patients"}/>
      <div className={"for-patients-heading"}>
        <h1>Procedures and Protocols</h1>
        <a href="/#for-patients-page"><h2>I have my password</h2><i>></i></a>
      </div>
      <div style={{height: '18%'}}></div>
      <div className={"for-patients-body"}>
        <p>
          These protocols can just give an overview of what will be achieved, what are lifestyle changes you can take on, etc.
          But to access the full protocol or procedure, you must provide a password.
          Would you like to know more about the protocols available to you?
        </p>
        <a href="/#for-patients"><p>Contact Violeta</p><i>></i></a>
      </div>

      <img className={"protocol-images protocol-image-1"} src="protocols_1.png" alt="Healthy green leaves for the gut - representing protocols for weight-loss"/>
      <img className={"protocol-images protocol-image-2"} src="protocols_2.png" alt="Healthy green spinach for the gut - representing protocols for weight-loss"/>
    </div>
  );
}

export default ForPatientsPage;

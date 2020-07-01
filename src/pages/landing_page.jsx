import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import { retrieveContent } from '../actions'

class LandingPage extends Component {

  render(){
    return(
      <div id="landing-page" className={"first-page-size"}>
        <div id="landing-page-image"></div>
        <div id="landing-page-image-overlay"></div>
        <div id="landing-page-text"><h1>Losing weight<br/>with the power of science</h1><p className={"shake-vertical"}>﹀</p></div>
      </div>
    );
  }
}


export default LandingPage;

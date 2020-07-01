import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PageTitle from '../components/page_title'
import ResearchCard from '../components/research_card'
// import { retrieveContent } from '../actions'

class ResearchPage extends Component {

  render(){
    return(
      <div id="research-page" className={"page-size blue-background scroll-child"}>
        <PageTitle title={"research"} design={"page-title-research"}/>
        <div id={"research-page-content"}>
          <div>
            <h1 id={"research-page-heading"}>Discover Violeta Popov M.D.'s <br/> body of work</h1>
          </div>
          <Container className="margin">
            <Row >
              <Col xs={6} sm={6} md={6} lg={3} xl={3} className={"research-page-col"}>
                <ResearchCard card={"publications-card"} text={"PUBLICATIONS"}/>
              </Col>
              <Col xs={6} sm={6} md={6} lg={3} xl={3} className={"research-page-col"}>
                <ResearchCard card={"chapters-card"} text={"BOOK\nCHAPTERS"}/>
              </Col>
              <Col xs={6} sm={6} md={6} lg={3} xl={3} className={"research-page-col"}>
                <ResearchCard card={"abstracts-card"} text={"CONFERENCE\nABSTRACTS"}/>
              </Col>
              <Col xs={6} sm={6} md={6} lg={3} xl={3} className={"research-page-col"}>
                <ResearchCard card={"lectures-card"} text={"INVITED\nLECTURES"}/>
              </Col>
            </Row>
          </Container>
         </div>
      </div>
    );
  }
}


export default ResearchPage;

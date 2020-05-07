import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TwitterFeed from '../components/twitter_feed'

// import { retrieveContent } from '../actions'

class MediaPage extends Component {

  render(){
    return(
      <Container fluid className="margin">
        <Row>
          <Col xs={12} sm={12} md={7} lg={8} xl={8}>

          </Col>
          <Col xs={12} sm={12} md={5} lg={4} xl={4}>
            <TwitterFeed/>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default MediaPage;

import React from 'react';
import logo from './logo.svg';
import './App.scss';


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navbar from './components/navbar'
import TwitterFeed from './components/twitter_feed'
import MainPageContainer from './containers/main_page_container'

function App() {
  return (
    <div className="App">
      <div className="sticky-nav">
        <Navbar/>
      </div>
      <div className="z-index">
        <Container fluid className="margin">
          <Row>
            <Col xs={12} sm={12} md={7} lg={8} xl={8}>
              <MainPageContainer/>
            </Col>
            <Col xs={12} sm={12} md={5} lg={4} xl={4}>
              <TwitterFeed/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;

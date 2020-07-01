import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function FooterPage(props) {
  return(
    <div id={"footer-page"} className={"footer-size blue-background scroll-child"}>
      <div>
        <span class={"footer-header"}><h1>VIOLETA POPOV</h1><h1>M.D.</h1></span>
      </div>

      <div id={"footer-map"}>
        <Container>
          <Row >
            <Col xs={6} sm={6} md={6} lg={3} xl={3}>
              <ul className={"footer-map-list"}>
                <li><a href="#for-patients-page">for patients</a></li>
                <li><a href="#for-patients-page">Protocols</a></li>
                <li><a href="#for-patients-page">Procedure 1</a></li>
                <li><a href="#for-patients-page">Procedure 2</a></li>
                <li><a href="#for-patients-page">Procedure 3</a></li>
              </ul>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={3}>
              <ul className={"footer-map-list"}>
                <li><a href="#research-page">research</a></li>
                <li><a href="#research-page">Publications</a></li>
                <li><a href="#research-page">Book Chapters</a></li>
                <li><a href="#research-page">Conference Abstracts</a></li>
                <li><a href="#research-page">Invited Lectures</a></li>
              </ul>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={3}>
              <ul className={"footer-map-list"}>
                <li><a href="#media-page">media</a></li>
                <li><a href="#media-page">twitter</a></li>
              </ul>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} xl={3}>
              <ul className={"footer-map-list"}>
                <li><a href="#about-page">about</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <span id={"copyright-bit"}>
        <p>© 2020 Violeta Popov M.D.</p>
        <p>All rights reserved.</p>
      </span>
    </div>
  );
}

export default FooterPage;

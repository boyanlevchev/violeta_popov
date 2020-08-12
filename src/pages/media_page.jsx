import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TwitterFeed from '../components/twitter_feed'
import PageTitle from '../components/page_title'
// import { retrieveContent } from '../actions'
import { TwitterFollowButton } from 'react-twitter-embed';


function MediaPage(props) {

  return(
    <div id="media-page" className={"page-size gradient-background scroll-child"}>
    <PageTitle title={"media"} design={"page-title-media"}/>
      <Container fluid className="margin">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div>
              <TwitterFeed/>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={"follow-violeta"} style={{marginLeft:'60px', paddingTop:'70px'}}>
              <h1> Follow Violeta <br/> on twitter</h1>
              <div className="mb-2">
                <TwitterFollowButton
                  screenName={'PopovVioleta'}
                  options={{size: 'large'}}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default MediaPage;

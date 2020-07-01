import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TwitterFeed from '../components/twitter_feed'


// import { retrieveContent } from '../actions'

class MainPageContainer extends Component {

  render(){

    return(
      <Container fluid className="margin">
        <Row>
            <TwitterFeed/>
        </Row>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {
  },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return{
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MainPageContainer);

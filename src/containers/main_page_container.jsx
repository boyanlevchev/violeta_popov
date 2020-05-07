import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TwitterFeed from '../components/twitter_feed'

import { retrieveContent } from '../actions'

class MainPageContainer extends Component {
  componentWillMount(){
    this.props.retrieveContent()
  }

  render(){
    const backgroundImage = {
      backgroundImage: 'url("https://pbs.twimg.com/profile_images/1248761199342366720/gPJLwI3a_400x400.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height:'500px',
      width:'500px',
      borderRadius: '50%',
      float: 'left',
      shapeOutside:'circle()',
      position: 'relative'
    }

    return(
      <Container fluid className="margin">
        <Row>
          <Col xs={12} sm={12} md={7} lg={8} xl={8}>
            <div className="main-page-container">
              <div className="main-page-content">
                <div style={backgroundImage}>
                  <div className="main-page-quote">
                    <h1>"Losing weight with</h1>
                    <h1>the power of science..."</h1>
                  </div>
                </div>

                {/*<p className="margin">{this.props.mainPageContent}</p>*/}
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={4} xl={4}>
            <TwitterFeed/>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {
    retrieveContent: retrieveContent },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return{
    mainPageContent: reduxState.mainPageContent
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MainPageContainer);

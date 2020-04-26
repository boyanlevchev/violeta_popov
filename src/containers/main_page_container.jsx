import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { retrieveContent } from '../actions'

class MainPageContainer extends Component {
  componentWillMount(){
    this.props.retrieveContent()
  }

  render(){
    const backgroundImage = {
      background: 'url("https://pbs.twimg.com/profile_images/1248761199342366720/gPJLwI3a_400x400.jpg")',
      height:'400px',
      width:'400px',
      borderRadius: '50%',
      float: 'left',
      shapeOutside:'circle()'
    }

    console.log(this.props.mainPageContent)
    return(
      <div className="main-page-container">
        <div className="main-page-content">
          <div style={backgroundImage}>
          </div>
          <p className="margin">{this.props.mainPageContent}</p>
        </div>
      </div>
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

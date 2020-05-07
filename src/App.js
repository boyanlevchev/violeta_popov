import React, { Component } from 'react';

import { connect } from 'react-redux'

import logo from './logo.svg';
import './App.scss';

import Navbar from './components/navbar'
import MainPageContainer from './containers/main_page_container'

class App extends Component {
  render(){

    let contentTarget = null
    if (this.props.appContentTarget){
      contentTarget = this.props.appContentTarget
    } else {
      contentTarget = <MainPageContainer/>
    }
    return (
      <div className="App">
        <div className="sticky-nav">
          <Navbar/>
        </div>
        <div className="z-index">
          {contentTarget}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
 return { appContentTarget: state.appContentTarget };
}

export default  connect(mapStateToProps)(App);

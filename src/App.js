import React, { Component } from 'react';

import { connect } from 'react-redux'



import Navbar from './components/navbar'
import LandingPage from './pages/landing_page'
import ForPatientsPage from './pages/for_patients_page'
import MediaPage from './pages/media_page'
import Contact from './components/contact'
import ResearchPage from './pages/research_page'
import AboutPage from './pages/about_page'
import FooterPage from './pages/footer_page'

import './App.scss';

// import logo from './logo.svg';

class App extends Component {
  render(){
    return (
      <div className="App scroll-container">
        <div className="scroll-child">
          <Navbar/>
          <LandingPage/>
        </div>
        <Contact/>
        <ForPatientsPage/>
        <ResearchPage/>
        <MediaPage/>
        <AboutPage/>
        <FooterPage/>
      </div>
    );
  }
}

function mapStateToProps(state) {
 return {
  appContentTarget: state.appContentTarget
  };
}

export default  connect(mapStateToProps)(App);

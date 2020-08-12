import React, { Component } from 'react';

import { connect } from 'react-redux'

import { InView } from 'react-intersection-observer'

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
  constructor(props){
    super(props)
    this.state = {
      color: "color-white",
      stroke: "stroke-white"
    }
  }

  handleContactChange = (color) => {
    if ( color === "white" && this.state.color !== "white") {
      this.setState({color: "color-white", stroke: "stroke-white"})

    } else if (color === "blue" && this.state.color !== "blue") {
      this.setState({color: "color-blue", stroke: "stroke-blue"})

    } else if (color === "green" && this.state.color !== "green") {
      this.setState({color: "color-green", stroke: "stroke-green"})

    }
  }

  render(){

    return (
      <div className="App scroll-container">
        <Contact color={this.state.color} stroke={this.state.stroke}/>

        <InView threshold="0.9" onChange={(inView, entry) => this.handleContactChange("white")}>
          <div className="scroll-child">
            <Navbar/>
            <LandingPage/>
          </div>
        </InView>

        <InView threshold="0.9" onChange={(inView, entry) => this.handleContactChange("blue")}>
          <ForPatientsPage/>
        </InView>

        <InView threshold="0.9" onChange={(inView, entry) => this.handleContactChange("white")}>
          <ResearchPage/>
        </InView>

        <InView threshold="0.9" onChange={(inView, entry) => this.handleContactChange("blue")}>
          <MediaPage/>
        </InView>

        <InView threshold="0.9" onChange={(inView, entry) => this.handleContactChange("green")}>
          <AboutPage/>
        </InView>

        <InView threshold="0.9" onChange={(inView, entry) => this.handleContactChange("white")}>
          <FooterPage/>
        </InView>
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

import React, { Component } from 'react';


class ResearchCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render(){
    let researchCard = "research-card-image " + this.props.card

    return(
      <a className={"research-card-a-tag"} href="#research-page">
        <div className={"research-card"}>
            <div className={researchCard}>

            </div>
            <div className={"research-card-footer"}>
              <div className={"research-card-text-box"}>
                <h3 className={"research-card-text"}>{this.props.text}</h3>
              </div>
              <h3 className={"research-card-caret"}>></h3>
            </div>
        </div>
      </a>
    );
  }
}

export default ResearchCard;

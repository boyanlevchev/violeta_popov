import React, { Component } from 'react';

class PageTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render(){
    const pageTitle="page-title " + this.props.design
    return(
      <div className={"page-title-container"}>
        <div className={pageTitle}>
          <h2>{this.props.title}</h2>
        </div>
      </div>
    );
  }
}

export default PageTitle;

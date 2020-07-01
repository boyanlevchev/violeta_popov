import React from 'react'
import { useState } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { displayPage } from '../actions'

import Collapse from 'react-bootstrap/Collapse'


function NavLink(props) {
  const [open, setOpen] = useState(false);
  const href = "#";
  let className = "";

  if (props.headerClass){
    className = props.headerClass
  } else {
    className = "nav-link"
  }

  if (props.links){
    return (
      <div>
        <a href={href} className={className} onClick={() => setOpen(!open)} aria-controls={props.title.split(' ').join('') + "-collapse"} aria-expanded={open}>{props.title}</a>
        <Collapse in={open}>
          <div id={props.title.split(' ').join('') + "-collapse"} className="accordion-links">
            {props.links.map( link => {
              return  <div>
                        <a href={href} className={className} onClick={() => props.displayPage(link.split(' ').join('').toLowerCase())}>{link}</a>
                      </div>
            })}
          </div>
        </Collapse>
      </div>
    );
  } else {
    return <a href={props.href} className={className} onClick={() => props.displayPage(props.title.split(' ').join('').toLowerCase())}>{props.title}</a>
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {
    displayPage: displayPage
  },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(NavLink);

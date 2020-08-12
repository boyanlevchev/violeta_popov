import React from 'react';

// import { ReactComponent as ContactVioletta} from '../contactvioletta.svg'
// import { ReactComponent as ContactLetter} from '../contactletter.svg'

const ContactVioletta = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="120px" width="120px" style={{overflow: 'visible'}} viewBox="0 0 120.000000 120.000000" id="rotating-name">
    <path
            id="myTextPath"
            fill="none"
            stroke="white"
            className={props.stroke}
            stroke-width="0.5"
            transform="scale (-1, 1)"
            transform-origin="center"
            d="M0,60 a60,60 0 1,0 120,0 a60,60 0 1,0 -120,0"
             />

    <text fill="white" stroke-width="0" >
      <textPath xlinkHref="#myTextPath" className={"svg-text " + props.color}>
        <tspan dy="-9" >CONTACT VIOLETA POPOV <tspan dy="-1" className={"md-text " + props.color}>M.D.</tspan></tspan>
      </textPath>
    </text>
  </svg>
)

const ContactLetter = (props) => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
   width="50" height="50" viewBox="0 0 50.000000 50.000000"
   preserveAspectRatio="xMidYMid meet" id="envelope-logo">
    <g>
      <rect width="50" height="35" fill="none" stroke="white" className={props.stroke} stroke-width="1"  />
      <polyline points="0,0 25,20 50,0" fill="none" stroke="white" className={props.stroke} stroke-width="1" />
    </g>
  </svg>
)

function Contact(props) {
  return(
    <a href="#contact" className={"contact-positioner"}>
          <ContactVioletta color={props.color} stroke={props.stroke}/>
          {/*<img src={contactvioletta} loading="lazy" alt="Violeta Popov - Gastroenterologist in Manhattan, New York City, NY" id="rotating-name"/>*/}
          <div className={"letter-positioner"}>
            <ContactLetter color={props.color} stroke={props.stroke}/>
          {/*<img src={contactletter} loading="lazy" alt="Envelope logo - send a direct message to Dr. Popov" id="envelope-logo"/>*/}
        </div>
    </a>
  );
}

export default Contact;

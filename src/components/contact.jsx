import React from 'react';

const ContactVioletta = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="120px" width="120px" style={{overflow: 'visible'}} viewBox="0 0 120.000000 120.000000" id="rotating-name">
    <g>
      <path
              id="myTextPath"
              fill="none"
              stroke="white"
              className={props.stroke}
              strokeWidth="0.5"
              transform="scale (-1, 1)"
              transform-origin="center"
              d="M0,60 a60,60 0 1,0 120,0 a60,60 0 1,0 -120,0"
               />

      <text fill="white" stroke-width="0" >
        <textPath xlinkHref="#myTextPath" className={"svg-text " + props.color}>
          <tspan dy="-9" >CONTACT VIOLETA POPOV <tspan dy="-1" className={"md-text " + props.color}>M.D.</tspan></tspan>
        </textPath>
      </text>
      <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 60 60"
                          to="360 60 60"
                          dur="60s"
                          repeatCount="indefinite"/>
    </g>
    <g>
      <rect x="25" y="37.5" width="70" height="45" fill="none" stroke="white" className={props.stroke} strokeWidth="1"  />
      <polyline x="25" y="37.5" points="25,37.5 60,60 95,37.5" fill="none" stroke="white" className={props.stroke} strokeWidth="1" />
    </g>
  </svg>
)


function Contact(props) {
  return(
    <a href="#contact" className={"contact-positioner"}>
        <ContactVioletta color={props.color} stroke={props.stroke}/>
        {/*<img src={contactvioletta} loading="lazy" alt="Violeta Popov - Gastroenterologist in Manhattan, New York City, NY" id="rotating-name"/>*/}
    </a>
  );
}

export default Contact;

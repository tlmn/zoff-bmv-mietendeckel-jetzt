import React from "react";

const InstagramIcon = ({ width, isYellow }) => (
  <svg viewBox="0 0 35 35" width={width}>
    <g>
      <circle
        cx="17.4"
        cy="17.6"
        r="3.1"
        fill={isYellow ? "#ffe200" : "#fff"}
      />
      <path
        d="M21.3,10h-7.8c-1.1,0-2.1,0.4-2.8,1c-0.6,0.6-1,1.6-1,2.8v7.8c0,1.1,0.4,2.1,1.1,2.8c0.7,0.6,1.6,1,2.8,1h7.8
		c1.1,0,2.1-0.4,2.8-1c0.7-0.6,1.1-1.6,1.1-2.8v-7.8c0-1.1-0.4-2.1-1-2.8C23.4,10.3,22.5,10,21.3,10z M17.4,22.5
		c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8s4.9,2.1,4.9,4.8S20.1,22.5,17.4,22.5z M22.4,13.7c-0.6,0-1.1-0.5-1.1-1.1
		s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S23,13.7,22.4,13.7z"
      />
      <path
        d="M17.5,0C7.8,0,0,7.8,0,17.5S7.8,35,17.5,35S35,27.2,35,17.5C35.1,7.8,27.2,0,17.5,0z M26.8,21.6c0,1.6-0.6,3.1-1.6,4.1
		s-2.4,1.5-4,1.5h-7.8c-1.6,0-3-0.5-4-1.5c-1.1-1-1.6-2.4-1.6-4.1v-7.8c0-3.3,2.2-5.5,5.5-5.5h7.8c1.6,0,3,0.6,4,1.6
		c1,1,1.5,2.3,1.5,4C26.8,13.8,26.8,21.6,26.8,21.6z"
      />
    </g>
  </svg>
);

export default InstagramIcon;
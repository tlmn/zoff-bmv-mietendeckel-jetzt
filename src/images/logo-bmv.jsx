import React from "react";

const LogoBMV = ({ width, isBlack }) => (
  <svg width={width} viewBox="0 0 48 41">
    <g>
      <path
        d="m24.132 32.385c6.8389 0 12.382-5.3625 12.382-11.978 0-6.6155-5.5435-11.978-12.382-11.978s-12.382 5.3625-12.382 11.978c0 6.6156 5.5436 11.978 12.382 11.978z"
        fill={isBlack ? "#000" : "#ffe200"}
      />
      <path
        d="m35.341 3.4774h9.3101v33.857h-9.3101"
        fill="none"
        stroke={isBlack ? "#000" : "#c4c4c4"}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeWidth="6"
      />
      <path
        d="m12.308 3.4774h-9.3081v33.857h9.3081"
        fill="none"
        stroke={isBlack ? "#000" : "#c4c4c4"}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeWidth="6"
      />
    </g>
  </svg>
);

export default LogoBMV;

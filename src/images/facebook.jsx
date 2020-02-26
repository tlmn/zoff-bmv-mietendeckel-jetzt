import React from "react";

export default ({ color, ...props }) => (
  <svg {...props} viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="m35 17.406c0 9.349-7.8353 16.928-17.5 16.928-9.6647 0-17.5-7.5794-17.5-16.928 0-9.3491 7.8353-16.928 17.5-16.928 9.6647 0 17.5 7.5794 17.5 16.928z"
        fill={color}
      />
      <path
        d="m20.615 10.476h2.4804v-3.5821h-3.5117c-2.023 0-4.655 1.255-4.655 4.9093v2.8417h-3.3577v3.7107h3.3577v9.6515h4.0063v-9.6515h3.339l0.553-3.7107h-3.8896v-2.3632c0-1.2166 0.609-1.8057 1.6776-1.8057z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect y=".47742" width="35" height="33.857" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);

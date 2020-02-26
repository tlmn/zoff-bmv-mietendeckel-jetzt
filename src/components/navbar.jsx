import React from "react";
import LogoBMV from "../images/logo-bmv";
import LogoFacebook from "../images/facebook";
import LogoTwitter from "../images/twitter";

export default () => (
  <div className="navbar">
    <LogoBMV width="40"/>
    <ul className="navmenu">
      <li>
        <a href="#was-kann-mietendeckel">Was ist der Mietendeckel?</a>
      </li>
      <li>
        <a href="#wie-kann-ich-deckeln">Wie kann ich deckeln?</a>
      </li>
      <li>
        <a href="#faq">FAQ</a>
      </li>
      <li>
        <a href="#nach-dem-mietendeckel">Mietendeckel, und dann?</a>
      </li>
    </ul>
    <ul className="socialmediaMenu">
      <li><a href=""><LogoFacebook width="30" /></a></li>
      <li><a href=""><LogoTwitter width="30" /></a></li>
    </ul>
  </div>
);

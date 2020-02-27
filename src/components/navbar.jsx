import React from "react";
import LogoBMV from "../images/logo-bmv";
import LogoFacebook from "../images/facebook";
import LogoTwitter from "../images/twitter";
import Scrollspy from "react-scrollspy";

export default () => (
  <div className="navbar">
    <LogoBMV width="40" />
    <Scrollspy
      items={[
        "was-kann-mietendeckel",
        "wie-kann-ich-deckeln",
        "faq",
        "nach-dem-mietendeckel"
      ]}
      currentClassName="is-current"
      className="navbar__menu"
    >
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
    </Scrollspy>
    <ul className="navbar__socialmedia">
      <li>
        <a href="">
          <LogoFacebook width="30" />
        </a>
      </li>
      <li>
        <a href="">
          <LogoTwitter width="30" />
        </a>
      </li>
    </ul>
  </div>
);

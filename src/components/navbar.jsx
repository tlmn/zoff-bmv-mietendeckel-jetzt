import React, { useState } from "react";
import LogoBMV from "../images/logo-bmv";
import LogoFacebook from "../images/facebook";
import LogoTwitter from "../images/twitter";
import Scrollspy from "react-scrollspy";

export default () => {
  const [iconColors, setIconColors] = useState({
    twitter: "#2D2D37",
    facebook: "#2D2D37"
  });
  function handleMouseEnter(item) {
    //setIconColors({...iconColors, twitter: "#ccc"})
  }
  function handleMouseOut(item) {
    //setIconColors({...iconColors, twitter: "#2D2D37"})
  }
  return (
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
          <a
            href=""
            onMouseEnter={handleMouseEnter("twitter")}
            onMouseOut={handleMouseOut("twitter")}
          >
            <LogoFacebook width="30" color={iconColors.facebook} />
          </a>
        </li>
        <li>
          <a
            href=""
            onMouseEnter={handleMouseEnter("twitter")}
            onMouseOut={handleMouseOut("twitter")}
          >
            <LogoTwitter width="30" color={iconColors.twitter} />
          </a>
        </li>
      </ul>
    </div>
  );
};

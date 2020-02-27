import React, { useState, useRef, useLayoutEffect } from "react";
import LogoBMV from "../images/logo-bmv";
import LogoFacebook from "../images/facebook";
import LogoTwitter from "../images/twitter";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";


export default () => {
  const [menuHeight, setMenuHeight] = useState(0);
  const refMenu = useRef(null);
  const offset = 50;

  useLayoutEffect(() => {
    function FsetMenuHeight() {
      setMenuHeight(refMenu.current.scrollHeight);
    }
    FsetMenuHeight();
    window.addEventListener("resize", FsetMenuHeight);
    return () => window.removeEventListener("resize", FsetMenuHeight);
  }, []);
  return (
    <>
      <div className="navbar" ref={refMenu}>
        <AnchorLink href="#top"><LogoBMV width="40" /></AnchorLink>
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
            <AnchorLink offset={offset}href="#was-kann-mietendeckel">Was ist der Mietendeckel?</AnchorLink>
          </li>
          <li>
            <AnchorLink offset={offset}href="#wie-kann-ich-deckeln">Wie kann ich deckeln?</AnchorLink>
          </li>
          <li>
            <AnchorLink offset={offset}href="#faq">FAQ</AnchorLink>
          </li>
          <li>
            <AnchorLink offset={offset}href="#nach-dem-mietendeckel">Mietendeckel, und dann?</AnchorLink>
          </li>
        </Scrollspy>
        <ul className="navbar__socialmedia">
          <li>
            <a href="https://www.facebook.com">
              <LogoFacebook width="30" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <LogoTwitter width="30" />
            </a>
          </li>
        </ul>
      </div>
      <div style={{ height: menuHeight + "px" }} />
    </>
  );
};

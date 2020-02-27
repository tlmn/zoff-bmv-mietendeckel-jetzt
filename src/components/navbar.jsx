import React, { useState, useRef, useLayoutEffect } from "react";
import LogoBMV from "../images/logo-bmv";
import LogoFacebook from "../images/facebook";
import LogoTwitter from "../images/twitter";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default ({ items, links }) => {
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

  const hrefs = [];
  items.map(item => hrefs.push(item.href.substr(1)));

  return (
    <>
      <div className="d-none d-sm-block">
        <div className="navbar" ref={refMenu}>
          <AnchorLink href="#top">
            <LogoBMV width="40" />
          </AnchorLink>
          <Scrollspy
            items={hrefs}
            currentClassName="is-current"
            className="navbar__menu"
            offset={-menuHeight}
          >
            {items.map(item => (
              <li>
                <AnchorLink offset={offset} href={item.href}>
                  {item.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
          <ul className="navbar__socialmedia">
            <li>
              <a href={links.facebook}>
                <LogoFacebook width="30" />
              </a>
            </li>
            <li>
              <a href={links.twitter}>
                <LogoTwitter width="30" />
              </a>
            </li>
          </ul>
        </div>
        <div style={{ height: menuHeight + "px" }} />
      </div>
      <div className="d-block d-sm-none">
        <LogoBMV width="40"/>
        mobile Navigation</div>
    </>
  );
};

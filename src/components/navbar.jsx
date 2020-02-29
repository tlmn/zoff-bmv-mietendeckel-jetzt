import React, { useState, useRef, useLayoutEffect } from "react";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LogoBMV from "../images/logo-bmv";
import LogoFacebook from "../images/facebook";
import LogoTwitter from "../images/twitter";

const NavBar = ({ items, links }) => {
  const [menuHeight, setMenuHeight] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
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
      <div className="navbar" ref={refMenu}>
        <AnchorLink href="#top">
          <LogoBMV width="40" />
        </AnchorLink>
        <Scrollspy
          items={hrefs}
          currentClassName="is-current"
          className="navbar__menu d-none d-md-block"
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
        <ul className="navbar__socialmedia d-none d-md-flex">
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
        <span className="d-block d-md-none">Mietendeckel, jetzt!</span>
        <button
          class="hamburger hamburger--squeeze d-flex d-md-none"
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          onClick={() => {
            setShowMenu(showMenu === true ? false : true);
          }}
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <Scrollspy
          items={hrefs}
          currentClassName="is-current"
          className="navbar__menu"
          style={{ display: showMenu === true ? "block" : "none" }}
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
      </div>
      <div style={{ height: `${menuHeight}px` }} />
    </>
  );
};

export default NavBar;

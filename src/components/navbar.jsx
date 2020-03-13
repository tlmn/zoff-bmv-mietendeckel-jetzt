import React, { useState, useRef, useLayoutEffect } from "react";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import BMVLogo from "../images/icons/BMVLogo";
import FacebookIcon from "../images/icons/facebookIcon";
import TwitterIcon from "../images/icons/twitterIcon";

const NavBar = ({ items, links }) => {
  const [menuHeight, setMenuHeight] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const refMenu = useRef(null);
  const offset = 10;

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
      <div className="navbar__wrapper">
        <div className="navbar" ref={refMenu}>
          <AnchorLink href="#top">
            <BMVLogo width="40" />
          </AnchorLink>
          <Scrollspy
            items={hrefs}
            currentClassName="is-current"
            className="navbar__menu d-none d-md-block"
            offset={-menuHeight}
          >
            {items.map((item, i) => (
              <li key={i}>
                <AnchorLink offset={offset} href={item.href}>
                  {item.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
          <ul className="navbar__socialmedia d-none d-md-flex">
            <li>
              <a href={links.facebook}>
                <FacebookIcon width="30" />
              </a>
            </li>
            <li>
              <a href={links.twitter}>
                <TwitterIcon width="30" />
              </a>
            </li>
          </ul>
          <span className="d-block d-md-none font-weight-bold">
            Mietendeckel, jetzt!
          </span>
          <button
            className={`${
              showMenu === true ? "is-active" : ""
            } hamburger hamburger--squeeze d-flex d-md-none`}
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
            onClick={() => {
              setShowMenu(showMenu === true ? false : true);
            }}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div
          style={{ display: showMenu === true ? "block" : "none" }}
          className="menu__wrapper"
        >
          <Scrollspy
            items={hrefs}
            currentClassName="is-current"
            className="navbar__menu"
            offset={-menuHeight}
          >
            {items.map((item, i) => (
              <li key={i}>
                <AnchorLink
                  offset={offset}
                  href={item.href}
                  onClick={() => {
                    setShowMenu(showMenu === true ? false : true);
                  }}
                >
                  {item.label}
                </AnchorLink>
              </li>
            ))}
            <li>
              <a href={links.facebook} className="mr-4">
                <FacebookIcon width="40" isYellow />
              </a>
              <a href={links.twitter}>
                <TwitterIcon width="40" isYellow />
              </a>
            </li>
          </Scrollspy>
        </div>
      </div>
      <div style={{ height: `${menuHeight}px` }} />
    </>
  );
};

export default NavBar;

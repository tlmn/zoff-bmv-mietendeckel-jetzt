import React, { useState } from "react";
import ReactGA from "react-ga";

import Helmet from "../components/helmet";
import CookieConsent from "react-cookie-consent";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import MietendeckelWirkt from "../sections/0-mietendeckel-wirkt";
import WasIstMietendeckel from "../sections/1-was-ist-mietendeckel";
import WieKannIchDeckeln from "../sections/2-wie-kann-ich-deckeln";
import FragenZumMietendeckel from "../sections/3-fragen-zum-mietendeckel";
import WarumMietendeckel from "../sections/4-warum-mietendeckel";
import WasKommtNachDemMietendeckel from "../sections/5-mietendeckel-und-weiter";
import Materialien from "../sections/6-materialien";

import "../assets/stylesheets/application.scss";
import { Link } from "gatsby";

const IndexPage = () => {
  const [FBPixelStatus, setFBPixelStatus] = useState(false);

  const links = {
    twitter: "https://twitter.com/bmieterverein",
    facebook: "https://de-de.facebook.com/BerlinerMieterverein/",
    instagram: "https://instagram.com/BerlinerMieterverein",
    bmv: "https://www.berliner-mieterverein.de/",
    datenschutz: "/datenschutz",
    impressum: "/impressum",
  };

  function optOut() {
    if (typeof window !== "undefined") {
      window["ga-disable-UA-164110266-1"] = true;
    }
  }

  function enableTracking() {
    setFBPixelStatus(true);
    ReactGA.set({ anonymizeIp: true });
    ReactGA.initialize("UA-164110266-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return (
    <>
      <Helmet />
      <div id="top" />
      <Navbar
        links={links}
        items={[
          {
            label: "Was ist der Mietendeckel?",
            href: "#was-ist-der-mietendeckel",
          },
          { label: "Mietendeckelrechner", href: "#mietendeckelrechner" },
          { label: "FAQ Mietendeckel", href: "#faq" },
          { label: "Warum Mietendeckel?", href: "#warum-mietendeckel" },
          {
            label: "Mietendeckel und weiter?",
            href: "#mietendeckel-und-weiter",
          },
        ]}
      />
      <Hero
        images={[
          {
            src: "header-keine-angst-vor-mieterhoehungen.jpg",
            srcMobile: "header-mobile-keine-angst-vor-mieterhoehungen.jpg",
          },
          {
            src: "header-alt-werden-im-eigenen-kiez.jpg",
            srcMobile: "header-mobile-alt-werden-im-eigenen-kiez.jpg",
          },
          {
            src: "header-platz-fuer-freunde.jpg",
            srcMobile: "header-mobile-platz-fuer-freunde.jpg",
          },
          {
            src: "header-alleine-wohnen.jpg",
            srcMobile: "header-mobile-alleine-wohnen.jpg",
          },
          {
            src: "header-reicht-die-kohle.jpg",
            srcMobile: "header-mobile-reicht-die-kohle.jpg",
          },
        ]}
      />
      <MietendeckelWirkt />
      <WasIstMietendeckel />
      <WieKannIchDeckeln />
      <FragenZumMietendeckel />
      <WarumMietendeckel />
      <WasKommtNachDemMietendeckel />
      <Materialien />
      <Footer />
      {FBPixelStatus === true && (
        <img
          height="1"
          width="1"
          src="https://www.facebook.com/tr?id=775019216286706&ev=PageView
&noscript=1"
        />
      )}
      <CookieConsent
        location="bottom"
        buttonText="Akzeptieren"
        enableDeclineButton={true}
        declineButtonText="Deaktivieren"
        style={{
          background: "#ffe200",
          opacity: "0.9",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,.15)",
        }}
        onAccept={() => enableTracking()}
        contentStyle={{ margin: "0.4rem" }}
        buttonStyle={{
          color: "#fff",
          fontSize: "1rem",
          margin: "0.4rem",
          backgroundColor: "rgb(78, 193, 40)",
        }}
        declineButtonStyle={{ fontSize: "1rem", margin: "0.4rem" }}
        expires={0}
      >
        Wir verwenden Cookies, um das Nutzungsverhalten mittels Google Analytics
        und Facebook Pixel auszuwerten.{" "}
        <Link to="/datenschutz">Erfahre mehr</Link>
      </CookieConsent>
    </>
  );
};

export default IndexPage;

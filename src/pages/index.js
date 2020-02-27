import React from "react";

import Helmet from "components/helmet";
import Footer from "components/footer";
import Navbar from "components/navbar";
import Hero from "../components/hero";
import MietendeckelWirkt from "../sections/0-mietendeckel-wirkt";
import WasIstMietendeckel from "../sections/1-was-ist-mietendeckel";
import WieKannIchDeckeln from "../sections/2-wie-kann-ich-deckeln";
import FragenZumMietendeckel from "../sections/3-fragen-zum-mietendeckel";
import WasKommtNachDemMietendeckel from "../sections/4-was-kommt-nach-dem-mietendeckel";

const IndexPage = () => {
  const links = {
    twitter: "https://twitter.com/",
    facebook: "https://www.facebook.com/",
    bmv: "https://www.berliner-mieterverein.de/",
    datenschutz: "/datenschutz",
    impressum: "/impressum"
  };

  return (
    <>
      <Helmet />
      <div id="top" />
      <Navbar
        links={links}
        items={[
          { label: "Mietendeckel wirkt!", href: "#mietendeckel-wirkt" },
          {
            label: "Was ist der Mietendeckel?",
            href: "#was-kann-mietendeckel"
          },
          { label: "Wie kann ich deckeln?", href: "#wie-kann-ich-deckeln" },
          { label: "Fragen zum Mietendeckel", href: "#faq" },
          { label: "Nach dem Mietendeckel", href: "#nach-dem-mietendeckel" }
        ]}
      />
      <Hero
        images={[
          {
            src: "header-keine-angst-vor-mieterhoehungen.jpg",
            text: "<i>Endlich!</i><br/>Keine Angst vor Mieterhöhungen"
          },
          {
            src: "header-alt-werden-im-eigenen-kiez.jpg",
            text: "<i>Endlich!</i><br/>Alt werden im eigenen Kiez"
          },
          {
            src: "header-platz-fuer-freunde.jpg",
            text: "<i>Endlich!</i><br/>Platz für Freunde"
          }
        ]}
      />
      <MietendeckelWirkt />
      <WasIstMietendeckel />
      <WieKannIchDeckeln />
      <FragenZumMietendeckel />
      <WasKommtNachDemMietendeckel />
      <Footer />
    </>
  );
};

export default IndexPage;

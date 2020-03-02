import React from 'react';

import Helmet from '../components/helmet';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import MietendeckelWirkt from '../sections/0-mietendeckel-wirkt';
import WasIstMietendeckel from '../sections/1-was-ist-mietendeckel';
import WieKannIchDeckeln from '../sections/2-wie-kann-ich-deckeln';
import FragenZumMietendeckel from '../sections/3-fragen-zum-mietendeckel';
import WarumMietendeckel from '../sections/4-warum-mietendeckel';
import WasKommtNachDemMietendeckel from '../sections/5-was-kommt-nach-dem-mietendeckel';

import '../assets/stylesheets/application.scss';

const IndexPage = () => {
  const links = {
    twitter: 'https://twitter.com/',
    facebook: 'https://www.facebook.com/',
    bmv: 'https://www.berliner-mieterverein.de/',
    datenschutz: '/datenschutz',
    impressum: '/impressum',
  };

  return (
    <>
      <Helmet />
      <div id="top" />
      <Navbar
        links={links}
        items={[
          {
            label: 'Was ist der Mietendeckel?',
            href: '#was-kann-mietendeckel',
          },
          { label: 'Wie kann ich deckeln?', href: '#wie-kann-ich-deckeln' },
          { label: 'FAQ Mietendeckel', href: '#faq' },
          { label: 'Warum Mietendeckel?', href: '#warum-mietendeckel' },
          { label: 'Nach dem Mietendeckel', href: '#nach-dem-mietendeckel' },
        ]}
      />
      <Hero
        images={[
          {
            src: 'header-keine-angst-vor-mieterhoehungen.jpg',
            text: 'Keine Angst vor Mieterhöhungen',
          },
          {
            src: 'header-alt-werden-im-eigenen-kiez.jpg',
            text: 'Alt werden im eigenen Kiez',
          },
          {
            src: 'header-platz-fuer-freunde.jpg',
            text: 'Platz für Freunde',
          },
          {
            src: 'header-alleine-wohnen.jpg',
            text: 'Alleine wohnen',
          },
          {
            src: 'header-mehr-fuer-uns.jpg',
            text: 'Reicht die Kohle',
          }
        ]}
      />
      <MietendeckelWirkt />
      <WasIstMietendeckel />
      <WieKannIchDeckeln />
      <FragenZumMietendeckel />
      <WarumMietendeckel />
      <WasKommtNachDemMietendeckel />
      <Footer />
    </>
  );
};

export default IndexPage;

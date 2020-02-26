import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div className="bg--yellow pt-5 pb-5">
      <div className="container mx-auto d-block">
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
        <p>Kontakt</p>
        <a
          href="https://www.berliner-mieterverein.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Berliner Mieterverein
        </a>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <div className="bg--yellow pt-5 pb-5">
    <div className="container mx-auto d-block">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Link to="/impressum">
            <h4>Impressum</h4>
          </Link>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Link to="/datenschutz">
            <h4>Datenschutz</h4>
          </Link>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <h4>Kontakt</h4>
          <a href="mailto:mietendeckel@berliner-mieterverein.de">
            mietendeckel@berliner-mieterverein.de
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <h4>
            <span>Berliner Mieterverein e.V.</span>
          </h4>
          Spichernstraße 1<br />
          10777 Berlin
        </div>
      </div>
    </div>
  </div>
);

export default Footer;

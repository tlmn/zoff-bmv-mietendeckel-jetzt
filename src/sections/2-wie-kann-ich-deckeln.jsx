import React from "react";

export default () => (
  <>
    <div
      className="container mx-auto d-block pt-5 pb-5"
      id="wie-kann-ich-deckeln"
    >
      <div className="row text-center">
        <div className="col-12">
          <h2 className="circle circle--blue">
            Wie wirkt der Mietendeckel für mich?
          </h2>
        </div>
        <div className="col-12">
          <iframe
            src="https://mietendeckelrechner.berliner-mieterverein.de"
            id="mdr"
            frameborder="0"
            height="400"
            width="500"
            title="Mietendeckelrechner"
          ></iframe>
          <script type="text/javascript" src="/js/iframe.js" />
        </div>
      </div>
    </div>
  </>
);

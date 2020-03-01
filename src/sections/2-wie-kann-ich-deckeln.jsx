import React from "react";

const Page = () => (
  <>
    <div
      className="container mx-auto d-block pt-5"
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
            frameBorder="0"
            height="400"
            title="Mietendeckelrechner"
            className="mietendeckelrechner pt-4"
          />
        </div>
      </div>
    </div>
  </>
);

export default Page;

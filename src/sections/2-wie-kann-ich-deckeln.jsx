import React from "react";

const Page = () => (
  <>
    <div className="section">
      <div className="container mx-auto d-block" id="wie-kann-ich-deckeln">
        <div className="row text-left text-md-center">
          <div className="col-12 mb-2">
            <h2>Wie wirkt der Mietendeckel für mich?</h2>
          </div>
          <div className="col-12 mt-5">
            <div className="calculator__wrapper">
              <div className="calculator__title">Mietendeckelrechner</div>
              <iframe
                src="https://mietendeckelrechner.berliner-mieterverein.de/md-jetzt"
                id="mdr"
                frameBorder="0"
                height="300"
                title="Mietendeckelrechner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Page;

import React, { useEffect, useRef, useState } from "react";

const ORIGIN = "https://mietendeckelrechner.berliner-mieterverein.de";

const Page = () => {
  const iframe = useRef();
  const [iframeDimensions, setIframeDimensions] = useState({ height: 300 });

  useEffect(() => {
    window.addEventListener("message", event => {
      
      if (event.origin === ORIGIN) {
        const data = event.data && JSON.parse(event.data);
console.log(data)
        if (data) {
          setIframeDimensions(data);
          console.log(iframeDimensions)
        }
      }
    });
  }, []);

  return (
    <div className="container mx-auto d-block" id="wie-kann-ich-deckeln">
      <div className="section">
        <div className="row text-left text-md-center">
          <div className="col-12">
            <h2>Wie wirkt der Mietendeckel für mich?</h2>
          </div>
          <div className="col-lg-8 offset-lg-2">
            <p className="teaser">
              Checke mit unserem Mietendeckelrechner, ob und wie du deckeln
              kannst.
            </p>
          </div>
          <div className="col-12 mb-5">
            <div className="calculator__wrapper">
              <div className="calculator__title">Mietendeckelrechner</div>
              <iframe
                ref={iframe}
                src={`${ORIGIN}/md-jetzt`}
                frameBorder="0"
                title="Mietendeckelrechner"
                {...iframeDimensions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

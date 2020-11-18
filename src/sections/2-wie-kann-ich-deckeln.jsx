import React, { useEffect, useRef, useState } from "react";

const ORIGIN = "https://mietendeckelrechner.berliner-mieterverein.de";

const Page = () => {
  const iframe = useRef();
  const [iframeDimensions, setIframeDimensions] = useState({ height: 450 });

  useEffect(() => {
    window.addEventListener("message", event => {
      if (event.origin === ORIGIN) {
        const data = event.data && JSON.parse(event.data);
        if (data) {
          setIframeDimensions(data);
        }
      }
    });
  }, []);

  return (
    <div className="container mx-auto d-block" id="mietendeckelrechner">
      <div className="section">
        <div className="row text-center">
          <div className="col-12 mb-5">
            <h2 style={{hyphens: 'none'}}>Wie wirkt der Mietendeckel für mich?</h2>
          </div>
          <div className="col-12">
            <div className="calculator__wrapper">
              <div className="calculator__title">Mietendeckelrechner</div>
              <iframe
                ref={iframe}
                src={`${ORIGIN}/de/md-jetzt`}
                frameBorder="0"
                title="Mietendeckelrechner"
                className="calculator__mdr"
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

import React from "react";
import Image from "../components/image";
import DownloadIcon from "../images/icons/downloadIcon";

const Page = () => (
  <div className="container mx-auto d-block" id="materialien">
    <div className="section">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 offset-0 col-12 text-left text-md-center mb-5">
          <h2 className="circle circle--congress-blue">
            Materialien zum Mietendeckel
          </h2>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-12 col-lg-4">
          <div className="pt-5 pr-5 pl-0 pb-5">
            <div className="overlay__container">
              <Image name="posterzeitung.jpg" className="overlay__image" />
              <div className="overlay__content">
                <DownloadIcon width="100" />
                <div className="material__wrapper">
                  <div className="material__link">
                    <a href="/material/Faltposter-Mietendeckel-deutsch.pdf">
                      Download Faltplakat (deutsch):
                      <br />
                      Wie kann ich deckeln?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page;

import DownloadIcon from "../images/icons/downloadIcon";
import Image from "../components/image";
import React from "react";

const Page = () => (
  <div className="container mx-auto d-block" id="materialien">
    <div className="section">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 offset-0 col-12 text-center mb-5">
          <h2 className="circle circle--congress-blue">
            Materialien zum Mietendeckel
          </h2>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-12 col-lg-4">
          <div className="p-5">
            <div className="overlay__container">
              <Image name="faltposter-de.jpg" className="overlay__image" />
              <a href="/material/Mietendeckel-Faltposter-DE.pdf">
                <div className="overlay__content">
                  <DownloadIcon width="100" />
                  <div className="material__wrapper">
                    <div className="material__link">
                      Download Faltplakat (deutsch):
                      <br />
                      Wie kann ich deckeln?
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="p-5">
            <div className="overlay__container">
              <Image name="faltposter-en.jpg" className="overlay__image" />
              <a href="/material/Mietendeckel-Faltposter-EN.pdf">
                <div className="overlay__content">
                  <DownloadIcon width="100" />
                  <div className="material__wrapper">
                    <div className="material__link">
                      Download Faltplakat (englisch):
                      <br />
                      How can I cap?
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="p-5">
            <div className="overlay__container">
              <Image name="faltposter-tr.jpg" className="overlay__image" />
              <a href="/material/Mietendeckel-Faltposter-TR.pdf">
                <div className="overlay__content">
                  <DownloadIcon width="100" />
                  <div className="material__wrapper">
                    <div className="material__link">
                      Download Faltplakat (türkisch):
                      <br />
                      Üst sınırı nasıl uygulayabilirim?
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="p-5">
            <div className="overlay__container">
              <Image name="absenkung-de.jpg" className="overlay__image" />
              <a href="/material/MD_Absenkung-DE.pdf">
                <div className="overlay__content">
                  <DownloadIcon width="100" />
                  <div className="material__wrapper">
                    <div className="material__link">
                      Download Flyer Mietabsenkung (deutsch):
                      <br />
                      Wie kann ich absenken?
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="p-5">
            <div className="overlay__container">
              <Image name="absenkung-en.jpg" className="overlay__image" />
              <a href="/material/MD_Absenkung-EN.pdf">
                <div className="overlay__content">
                  <DownloadIcon width="100" />
                  <div className="material__wrapper">
                    <div className="material__link">
                      Download Flyer Mietabsenkung (englisch):
                      <br />
                      How to lower my rent?
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="p-5">
            <div className="overlay__container">
              <Image name="absenkung-tr.jpg" className="overlay__image" />
              <a href="/material/MD_Absenkung-TR.pdf">
                <div className="overlay__content">
                  <DownloadIcon width="100" />
                  <div className="material__wrapper">
                    <div className="material__link">
                      Download Flyer Mietabsenkung (türkisch):
                      <br />
                      Kiranın düşürülmesi
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="p-5">
            <div className="overlay__container">
              <Image name="absenkung-es.jpg" className="overlay__image" />
              <a href="/material/MD_Absenkung-ES.pdf">
                <div className="overlay__content">
                  <DownloadIcon width="100" />
                  <div className="material__wrapper">
                    <div className="material__link">
                      Download Flyer Mietabsenkung (spanisch):
                      <br />
                      ¿Puedes ahorrarte algo?
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page;

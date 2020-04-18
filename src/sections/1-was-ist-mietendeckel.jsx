import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Reveal from "react-reveal";

const Page = () => {
  const delayBase = 0.2;
  return (
    <>
      <div className="bg--yellow section" id="was-ist-der-mietendeckel">
        <div className="container mx-auto d-block">
          <div className="row mb-3">
            <div className="col-12 text-center">
              <h2>Was ist der Mietendeckel?</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <p className="teaser mb-5 pb-5 pt-md-3 pt-0">
                Der Mietendeckel soll die Explosion der Mieten in Berlin
                stoppen. Mit drei Maßnahmen soll das gelingen:{" "}
                <strong>
                  Mietenstopp, Obergrenzen bei Wiedervermietung und
                  Mietabsenkung
                </strong>
                . Diese Maßnahmen wirken bis 2025 und betreffen rund 1,5
                Millionen Berliner Miethaushalte. Einige Wohnungsarten wie
                beispielsweise der so genannte soziale Wohnungsbau oder Neubau
                sind vom Mietendeckel ausgenommen.
              </p>
            </div>
          </div>
          <div className="row contentItems">
            <div className="col-12 col-lg-4">
              <Reveal
                effect="animated fadeInUp"
                transition={`all 0.5s ease ${delayBase * 1}s`}
              >
                <div>
                  <h3 className="circle circle--white">Mietenstopp</h3>
                  <p className="text--small-running">
                    <span className="font-weight-bold mr-2">
                      Seit 23.2.2020
                    </span>
                    Ob Staffel-, Indexmiete oder einfache Erhöhung:
                    Mieterhöhungen machen wohnen immer teurer. Bis 2025 werden
                    in Berlin die Mieten weitgehend eingefroren. Ab dem 1.1.2022
                    können sie leicht angehoben werden.
                    <br />
                    Auch Modernisierungen können nur noch zu einem geringeren
                    Teil auf die Mieter*innen umgelegt werden: mit höchstens 1
                    Euro/qm im Monat. Endlich keine Angst mehr vor
                    Mieterhöhungen!
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="col-12 col-lg-4">
              <Reveal
                effect="animated fadeInUp"
                transition={`all 0.5s ease ${delayBase * 2}s`}
              >
                <div>
                  <h3 className="circle circle--flamingo">Wiedervermietung</h3>
                  <p className="text--small-running">
                    <span className="font-weight-bold mr-2">
                      Seit 23.2.2020
                    </span>
                    Bei Mieterwechsel drehen Vermieter*innen oftmals an der
                    Preisschraube. So steigen Mietpreise von Mieter*in zu
                    Mieter*in besonders stark – trotz Mietpreisbremse. Das
                    verhindert jetzt der Mietendeckel. Er legt Obergrenzen für
                    Mietpreise bei Wiedervermietungen fest. Diese richten sich
                    nach Baujahr des Hauses und Ausstattung. Vermieter*innen
                    sind verpflichtet, diese Obergrenzen einzuhalten. Welche
                    Höchstwerte genau gelten, verrät unser{" "}
                    <AnchorLink href="#mietendeckelrechner">
                      Mietendeckelrechner.
                    </AnchorLink>
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="col-12 col-lg-4">
              <Reveal
                effect="animated fadeInUp"
                transition={`all 0.5s ease ${delayBase * 3}s`}
              >
                <div>
                  <h3 className="circle circle--congress-blue">
                    Mietabsenkung
                  </h3>
                  <p className="text--small-running mb-0">
                    <span className="font-weight-bold mr-2">Ab 23.11.2020</span>
                    Wer in den letzten Jahren das Glück hatte, eine Wohnung zu
                    finden, muss das häufig teuer bezahlen. Die gute Nachricht
                    dank Mietendeckel: Mieten, die mehr als 20&nbsp;% über den
                    Obergrenzen für Wiedervermietung liegen, werden nicht nur
                    eingefroren. Ab 23.11.2020 können sie abgesenkt werden! Wann
                    genau eine überhöhte Miete vorliegt, richtet sich nach
                    Baujahr, Ausstattung und Wohnlage des Hauses.
                    Vermieter*innen sind verpflichtet, ihre Mieter*innen zu
                    informieren und von sich aus die Miete abzusenken. Ob die
                    Miete gesenkt werden kann und wie hoch eine Absenkung wäre,
                    das berechnet unser{" "}
                    <AnchorLink href="#mietendeckelrechner">
                      Mietendeckelrechner
                    </AnchorLink>
                    .
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

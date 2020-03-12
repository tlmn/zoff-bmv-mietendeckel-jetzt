import React from "react";

const Page = () => (
  <>
    <div className="bg--yellow section" id="was-ist-der-mietendeckel">
      <div className="container mx-auto d-block">
        <div className="row mb-3">
          <div className="col-12 text-left text-md-center">
            <h2>
              Was ist der Mietendeckel?
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="teaser mb-5 pb-5 pt-3">
              Der Mietendeckel soll die Explosion der Mieten in Berlin stoppen.
              Mit drei Maßnahmen soll das gelingen:{" "}
              <strong>
                Mietenstopp, Obergrenzen bei Wiedervermietung und Mietabsenkung
              </strong>
              . Diese Maßnahmen wirken bis 2025 und betreffen rund 1,5 Millionen
              Berliner Miethaushalte. Einige Wohnungsarten wie beispielsweise
              der so genannte soziale Wohnungsbau oder Neubau sind vom
              Mietendeckel ausgenommen.
            </p>
          </div>
        </div>
        <div className="row contentItems">
          <div className="col-12 col-lg-4">
            <h3 className="circle circle--white">Mietenstopp</h3>
            <p className="text--small-running">
              <span className="font-weight-bold mr-2">Seit 23. Februar 2020</span>
              Ob Staffel-, Indexmiete oder einfache Erhöhung: Mieterhöhungen
              machen Wohnen immer teurer. Bis 2025 werden in Berlin die Mieten
              weitgehend eingefroren. Ab dem 1.1.2022 können sie leicht
              angehoben werden. Auch Modernisierungen können nur noch zu einem
              geringeren Teil auf die Mieter*innen umgelegt werden: mit
              höchstens 1 Euro je Quadratmeter. Endlich keine Angst mehr vor
              Mieterhöhungen!
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <h3 className="circle circle--flamingo">Wiedervermietung</h3>
            <p className="text--small-running">
              <span className="font-weight-bold mr-2">Seit 23. Februar 2020</span>
              Bei Mieterwechsel drehen Vermieter*innen oftmals an
              der Preisschraube. So steigen Mietpreise von Mieter*in zu
              Mieter*in besonders stark, trotz Mietpreisbremse. Das verhindert
              jetzt der Mietendeckel. Er legt Obergrenzen für Mietpreise bei
              Wiedervermietungen fest. Diese unterscheiden sich nach Baujahr des
              Hauses und Ausstattung. Vermieter*innen sind verpflichtet, dieser
              Obergrenzen einzuhalten. Welche Höchstwerte genau gelten, verrät
              unser Mietendeckelrechner.
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <h3 className="circle circle--congress-blue">Mietabsenkung</h3>
            <p className="text--small-running">
              <span className="font-weight-bold mr-2">Ab 23. November 2020</span>
              Wer in den letzten Jahren das Glück hatte eine Wohnung zu finden,
              muss das häufig teuer bezahlen. Die gute Nachricht dank
              Mietendeckel: Mieten, die mehr als 20&nbsp;% über den Obergrenzen
              für Wiedervermietung liegen, werden nicht nur eingefroren. Ab
              23.11.2020 können sie abgesenkt werden! Wann genau eine überhöhte
              Miete vorliegt, richtet sich nach Baujahr, Ausstattung und
              Wohnlage des Hauses. Vermieter*innen sind verpflichtet, ihre
              Mieter*innen zu informieren und von sich aus die Miete abzusenken.
              Ob die MIete gesenkt werden kann und wie hoch eine Absenkung wäre,
              das berechnet unser Mietendeckelrechner.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Page;

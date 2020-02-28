import React from 'react';

const Page = () => (
  <>
    <div className="bg--yellow pt-5 pb-5" id="was-kann-mietendeckel">
      <div className="container mx-auto d-block">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="circle circle--md circle--red">
              Was ist der Mietendeckel?
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="teaser pb-5 pt-3">
              Der Mietendeckel soll die Entwicklungen auf dem Berliner Mietmarkt
              stoppen. Mit drei Maßnahmen soll das gelingen: Mietenstopp,
              Obergrenzen bei Wiedervermietung und Mietabsenkung. Sie wirken bis
              2025 und betreffen die Vielzahl der 1,5 Millionen Berliner
              Haushalte. Einige Wohnungsarten wie beispielsweise so genannter
              sozialer Wohnungsbau oder Neubau sind vom Mietendeckel
              ausgenommen.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <h3 className="circle circle--white">Mietenstopp</h3>
            <p className="font-weight-bold">seit 23. Februar 2020</p>
            <p>
              Ob Staffelmiete oder einfache Erhöhung: Mieterhöhungen machen
              Wohnen immer teurer. Bis 2025 werden in Berlin die Mieten dank
              Mietenstopp eingefroren. 2022 können sie leicht angehoben werden.
              Auch Modernisierungen können nur noch zu einem geringeren Teil auf
              die Mieter*innen umgelegt werden: mit höchstens 1 Euro je
              Quadratmeter. Endlich keine Angst mehr vor Miethöhungen!
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <h3 className="circle circle--red">Wiedervermietung</h3>
            <p className="font-weight-bold">seit 23. Februar 2020</p>
            <p>
              Bei Mieterwechsel drehen Vermieter*innen oftmals an der
              Preisschraube. So steigen Mietpreise von Mieter*in zu Mieter*in
              besonders stark. Das verhindert jetzt der Mietendeckel. Er legt
              Obergrenzen für Mietpreise bei Wiedervermietungen fest. Diese
              Obergrenzen unterscheiden sich nach Baujahr des Hauses und
              Ausstattung. Vermieter*innen sind verpflichtet, dieser Obergrenzen
              einzuhalten. Welche Höchstwerte genau gelten, verrät unser
              Mietendeckelrechner.
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <h3 className="circle circle--blue">Mietabsenkung</h3>
            <p className="font-weight-bold">ab 23. November 2020</p>
            <p>
              Wer in den letzten Jahren das Glück hatte eine Wohnung zu finden,
              muss das häufig teuer bezahlen. Die gute Nachricht dank
              Mietendeckel: Mieten, die mehr als 20 % über den Obergrenzen für
              Wiedervermietung liegen, werden nicht nur eingefroren. Ab
              23.11.2020 können sie abgesenkt werden! Wann genau eine überhöhte
              Miete vorliegt, richtet sich nach Baujahr, Austattung und Wohnlage
              des Hauses. Vermieter sind verpflichtet, ihre Mieter*innen zu
              informieren. Ob Sie Ihre Miete absenken können und wie hoch eine
              Absenkung wäre, berechnet unser Mietendeckelrechner.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Page;
